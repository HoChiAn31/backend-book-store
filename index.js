const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const axios = require('axios');
let querystring = require('qs');
let crypto = require('crypto');
const db = require('./src/config/config');
const routes = require('./src/routes/routes');
const moment = require('moment');
db.connect();
const app = express();

app.use(express.json(), cors());
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/views/index.html');
});
// app.use('/api', (req, res) => res.send('Hello World!'));
app.use('/', routes);
const port = process.env.PORT || 5000;

const { VNPay, ignoreLogger, ProductCode, VnpLocale } = require('vnpay');

const vnpay = new VNPay({
    tmnCode: 'AKUXBK4Y',
    secureSecret: 'RDWVJ77BC9LYZHVYJIVPRS1BBIJT2RKP',
    vnpayHost: 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html',
    testMode: false, // tùy chọn, ghi đè vnpayHost thành sandbox nếu là true
    hashAlgorithm: 'sha512', // tùy chọn

    /**
     * Sử dụng enableLog để bật/tắt logger
     * Nếu enableLog là false, loggerFn sẽ không được sử dụng trong bất kỳ phương thức nào
     */
    // enableLog: true, // optional

    /**
     * Hàm `loggerFn` sẽ được gọi để ghi log
     * Mặc định, loggerFn sẽ ghi log ra console
     * Bạn có thể ghi đè loggerFn để ghi log ra nơi khác
     *
     * `ignoreLogger` là một hàm không làm gì cả
     */
    loggerFn: ignoreLogger, // optional
});

app.post('/api/order', async (req, res) => {
    // // Tạo đơn hàng
    // const order = await createOrder(req.body); // Hàm tạo đơn hàng, bạn cần tự cài đặt
    const { totalPrice } = req.body;
    // Tạo URL thanh toán
    const paymentUrl = vnpay.buildPaymentUrl({
        vnp_Amount: totalPrice,
        vnp_IpAddr:
            req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.ip,
        // vnp_IpAddr: '1.1.1.1',
        vnp_TxnRef: new Date().getTime(),
        vnp_OrderInfo: `Thanh toan don hang 12345 ${new Date().getTime()}`,
        vnp_OrderType: ProductCode.Other,
        vnp_ReturnUrl: 'http://localhost:4000/successfulTransaction',
        vnp_Locale: VnpLocale.VN,
    });

    return res.json({ paymentUrl });
    // return res.redirect(paymentUrl);
});
app.get('/payment_vnpay', function (req, res, next) {
    res.render('order', { title: 'Tạo mới đơn hàng', amount: 10000 });
});
// // Xử lý thanh toán VNPAY
// app.post('/payment_vnpay', async (req, res) => {
//     const { totalPrice } = req.body;

//     const vnp_TmnCode = 'AKUXBK4Y'; // Mã website của bạn tại VNPAY
//     const vnp_HashSecret = 'RDWVJ77BC9LYZHVYJIVPRS1BBIJT2RKP'; // Chuỗi bí mật
//     const vnp_Url = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html'; // URL thanh toán VNPay
//     const vnp_ReturnUrl = 'http://localhost:5000/successfulTransaction'; // URL chuyển hướng sau khi thanh toán thành công

//     const tmnCode = vnp_TmnCode;
//     const secretKey = vnp_HashSecret;
//     const returnUrl = vnp_ReturnUrl;
//     // const orderId = tmnCode + new Date().getTime();
//     const orderId = new Date().getTime();

//     const orderInfo = 'Thanh toan don hang';
//     const orderType = 'other';
//     const locale = 'vn';
//     const currCode = 'VND';
//     const vnpIpAddr =
//         req.headers['x-forwarded-for'] ||
//         req.connection.remoteAddress ||
//         req.socket.remoteAddress ||
//         req.connection.socket.remoteAddress;

//     let vnp_Params = {
//         vnp_Version: '2.1.0',
//         vnp_Command: 'pay',
//         vnp_TmnCode: tmnCode,
//         vnp_Locale: locale,
//         vnp_CurrCode: currCode,
//         vnp_TxnRef: orderId,
//         vnp_OrderInfo: orderInfo,
//         vnp_OrderType: orderType,
//         vnp_Amount: totalPrice * 100,
//         vnp_ReturnUrl: returnUrl,
//         vnp_IpAddr: vnpIpAddr,
//         vnp_CreateDate: new Date().toISOString().replace(/[-:]/g, '').slice(0, 15),
//     };
//     let querystring = require('qs');
//     let crypto = require('crypto');

//     vnp_Params = sortObject(vnp_Params);

//     const signData = querystring.stringify(vnp_Params, { encode: false });
//     const hmac = crypto.createHmac('sha512', secretKey);
//     const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');

//     vnp_Params['vnp_SecureHash'] = signed;
//     console.log(vnp_Params['vnp_SecureHash']);

//     const vnpUrl = vnp_Url + '?' + querystring.stringify(vnp_Params, { encode: false });

//     return res.status(200).json({ vnpUrl });
//     // res.redirect(vnpUrl);
// });
app.post('/payment_vnpay', async (req, res) => {
    process.env.TZ = 'Asia/Ho_Chi_Minh';
    let { totalPrice } = req.body;
    let date = new Date();
    let createDate = moment(date).format('YYYYMMDDHHmmss');
    let vnp_TmnCode = 'AKUXBK4Y'; // Mã website của bạn tại VNPAY
    let vnp_HashSecret = 'RDWVJ77BC9LYZHVYJIVPRS1BBIJT2RKP'; // Chuỗi bí mật
    let vnp_Url = 'https://sandbox.vnpayment.vn/paymentv2/Transaction/PaymentMethod.html'; // URL thanh toán VNPay
    let vnp_ReturnUrl = 'http://localhost:5000/successfulTransaction'; // URL chuyển hướng sau khi thanh toán thành công

    let tmnCode = vnp_TmnCode;
    let secretKey = vnp_HashSecret;
    let returnUrl = vnp_ReturnUrl;
    let orderId = moment(date).format('DDHHmmss');

    let orderInfo = 'Thanh toan cho ma GD:' + orderId;
    let orderType = 'other';
    let locale = 'vn';
    let currCode = 'VND';
    let vnpIpAddr =
        req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        (req.connection.socket ? req.connection.socket.remoteAddress : '');

    // let vnp_Params = {
    //     vnp_Version: '2.1.0',
    //     vnp_Command: 'pay',
    //     vnp_BankCode: 'VNBANK',
    //     vnp_TmnCode: tmnCode,
    //     vnp_Locale: locale,
    //     vnp_CurrCode: currCode,
    //     vnp_TxnRef: orderId,
    //     vnp_OrderInfo: orderInfo,
    //     vnp_OrderType: orderType,
    //     vnp_Amount: totalPrice * 100,
    //     vnp_ReturnUrl: returnUrl,
    //     vnp_IpAddr: vnpIpAddr,
    //     vnp_CreateDate: createDate,
    // };
    let vnp_Params = {};
    vnp_Params['vnp_Version'] = '2.1.0';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = tmnCode;
    // vnp_Params['vnp_Merchant'] = ''
    vnp_Params['vnp_Locale'] = locale;
    vnp_Params['vnp_CurrCode'] = currCode;
    vnp_Params['vnp_TxnRef'] = orderId;
    vnp_Params['vnp_OrderInfo'] = orderInfo;
    vnp_Params['vnp_OrderType'] = orderType;
    vnp_Params['vnp_Amount'] = totalPrice * 100;
    vnp_Params['vnp_ReturnUrl'] = returnUrl;
    vnp_Params['vnp_IpAddr'] = vnpIpAddr;
    vnp_Params['vnp_CreateDate'] = createDate;
    vnp_Params['vnp_BankCode'] = 'VNBANK';

    vnp_Params = sortObject(vnp_Params);

    let signData = querystring.stringify(vnp_Params, { encode: false });
    let hmac = crypto.createHmac('sha512', secretKey);
    let signed = hmac.update(new Buffer(signData, 'utf-8')).digest('hex');
    vnp_Params['vnp_SecureHash'] = signed;
    console.log(vnp_Params['vnp_SecureHash']);

    const vnpUrl = vnp_Url + '?' + querystring.stringify(vnp_Params, { encode: false });

    return res.status(200).json({ vnpUrl });
    // res.redirect(vnpUrl);
    // ==================================================
    // // Tạo token bằng cách sử dụng chữ ký đã băm
    // let token = signed;

    // // Tạo URL thanh toán với token
    // let vnpUrl = `${vnp_Url}?token=${token}`;
    // res.set('Content-Type', 'text/html');
    // res.status(200).json({ vnpUrl });
});

function sortObject(obj) {
    const sorted = {};
    const keys = Object.keys(obj).sort();
    keys.forEach((key) => {
        sorted[key] = obj[key];
    });
    return sorted;
}
app.post('/check-status-transaction-vnpay', async (req, res) => {
    // const { orderId } = req.body;
    const { vnp_TxnRef } = req.body;

    const vnp_TmnCode = 'AKUXBK4Y'; // Mã website của bạn tại VNPAY
    const vnp_HashSecret = 'RDWVJ77BC9LYZHVYJIVPRS1BBIJT2RKP'; // Chuỗi bí mật
    const vnp_Api = 'https://sandbox.vnpayment.vn/merchant_webapi/api/transaction'; // API kiểm tra trạng thái giao dịch

    const secretKey = vnp_HashSecret;
    const tmnCode = vnp_TmnCode;
    const transactionType = '02';
    const command = 'querydr';
    const createDate = new Date().toISOString().replace(/[-:]/g, '').slice(0, 15);

    let vnp_Params = {
        vnp_Version: '2.1.0',
        vnp_Command: command,
        vnp_TmnCode: tmnCode,
        // vnp_TxnRef: orderId,
        vnp_TxnRef: vnp_TxnRef,

        vnp_OrderInfo: 'Kiem tra giao dich',
        vnp_TransactionDate: createDate,
        vnp_TransactionType: transactionType,
    };

    vnp_Params = sortObject(vnp_Params);

    const signData = querystring.stringify(vnp_Params, { encode: false });
    const hmac = crypto.createHmac('sha512', secretKey);
    const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');

    vnp_Params['vnp_SecureHash'] = signed;

    try {
        const response = await axios.get(vnp_Api, { params: vnp_Params });
        return res.status(200).json(response.data);
    } catch (error) {
        return res.status(500).json({
            statusCode: 500,
            message: 'lỗi server',
        });
    }
});
// xử lý thanh toán momo
app.post('/payment_momo', async (req, res) => {
    //https://developers.momo.vn/#/docs/en/aiov2/?id=payment-method
    //parameters
    var accessKey = 'F8BBA842ECF85';
    var secretKey = 'K951B6PE1waDMi640xX08PD3vg6EkVlz';
    var orderInfo = 'pay with MoMo';
    var partnerCode = 'MOMO';
    var redirectUrl = 'http://localhost:4000/successfulTransaction';
    var ipnUrl = 'https://559c-42-118-214-200.ngrok-free.app/callback';
    var requestType = 'payWithMethod';
    const { totalPrice } = req.body;
    var amount = totalPrice.toString();
    var orderId = partnerCode + new Date().getTime();
    var requestId = orderId;
    var extraData = '';
    var orderGroupId = '';
    var autoCapture = true;
    var lang = 'vi';

    //before sign HMAC SHA256 with format
    //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
    var rawSignature =
        'accessKey=' +
        accessKey +
        '&amount=' +
        amount +
        '&extraData=' +
        extraData +
        '&ipnUrl=' +
        ipnUrl +
        '&orderId=' +
        orderId +
        '&orderInfo=' +
        orderInfo +
        '&partnerCode=' +
        partnerCode +
        '&redirectUrl=' +
        redirectUrl +
        '&requestId=' +
        requestId +
        '&requestType=' +
        requestType;
    //puts raw signature
    console.log('--------------------RAW SIGNATURE----------------');
    console.log(rawSignature);
    //signature
    const crypto = require('crypto');
    var signature = crypto.createHmac('sha256', secretKey).update(rawSignature).digest('hex');
    console.log('--------------------SIGNATURE----------------');
    console.log(signature);

    //json object send to MoMo endpoint
    const requestBody = JSON.stringify({
        partnerCode: partnerCode,
        partnerName: 'Test',
        storeId: 'MomoTestStore',
        requestId: requestId,
        amount: amount,
        orderId: orderId,
        orderInfo: orderInfo,
        redirectUrl: redirectUrl,
        ipnUrl: ipnUrl,
        lang: lang,
        requestType: requestType,
        autoCapture: autoCapture,
        extraData: extraData,
        orderGroupId: orderGroupId,
        signature: signature,
    });

    // options for axios
    const options = {
        method: 'POST',
        url: 'https://test-payment.momo.vn/v2/gateway/api/create',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(requestBody),
        },
        data: requestBody,
    };

    let result;
    try {
        result = await axios(options);
        return res.status(200).json(result.data);
    } catch (error) {
        return res.status(500).json({
            statusCode: 500,
            message: 'lỗi server',
        });
    }
});

app.post('/callback', async (req, res) => {
    console.log('callback:: ');
    console.log(req.body);
    callbackReceived = true;
    return res.status(200).json({
        statusCode: 200,
        message: 'success',
    });
});

app.post('/check-status-transaction', async (req, res) => {
    const { orderId } = req.body;

    // const signature = accessKey=$accessKey&orderId=$orderId&partnerCode=$partnerCode
    // &requestId=$requestId
    var secretKey = 'K951B6PE1waDMi640xX08PD3vg6EkVlz';
    var accessKey = 'F8BBA842ECF85';
    const rawSignature = `accessKey=${accessKey}&orderId=${orderId}&partnerCode=MOMO&requestId=${orderId}`;

    const signature = crypto.createHmac('sha256', secretKey).update(rawSignature).digest('hex');

    const requestBody = JSON.stringify({
        partnerCode: 'MOMO',
        requestId: orderId,
        orderId: orderId,
        signature: signature,
        lang: 'vi',
    });

    // options for axios
    const options = {
        method: 'POST',
        url: 'https://test-payment.momo.vn/v2/gateway/api/query',
        headers: {
            'Content-Type': 'application/json',
        },
        data: requestBody,
    };

    const result = await axios(options);

    return res.status(200).json(result.data);
});

app.listen(port, () => console.log(`Listening to port ${port}`));
