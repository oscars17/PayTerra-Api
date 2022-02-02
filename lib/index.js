'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/** Class representing an entry point for PayTerra requests. */
var PayTerraJsPay = /** @class */ (function () {
    function PayTerraJsPay() {
        /*
        stagingProcessPaymentUrl = 'https://staging.payterra.biz/rest/js_pay/simple/';
        stagingOrderInfoUrl = 'https://staging.payterra.biz/rest/js_pay/orderinfo/';
        processPaymentUrl = 'https://staging.payterra.biz/rest/js_pay/simple/';
        orderInfoUrl = 'https://staging.payterra.biz/rest/js_pay/orderinfo/';
        */
        this.registerCardUrl = 'https://payterra.biz/rest/js_pay/registercard/';
        this.stagingRegisterCardUrl = 'https://staging.payterra.biz/rest/js_pay/registercard/';
    }
    /**
     * Method for url redirecting
     * @param(url) - url for redirect
     */
    /*
    private static goTo(url:string):void {
      window.open(url, "_self");
    }
    */
    /**
     * Method for error generating
     * @param e - error obj
     * @return {commonErrorType} - returns error object
     */
    PayTerraJsPay.errorGenerator = function (e) {
        var errorData = {};
        if (axios__default["default"].isAxiosError(e) && e.response) {
            errorData = e.response.data;
        }
        else {
            console.log(e);
            errorData = { message: "Unknown error", data: ["Unknown error"] };
        }
        return errorData;
    };
    /**
       * Method for payment processing.
       * @param {processPaymentRequestType} payload - request payload.
       * @return {processPaymentResponseType} response - response data.
     */
    /*
    async processPaymentRequest(payload: processPaymentRequestType)
        : Promise<processPaymentResponseType | commonErrorType> {
      let responseData = {} as processPaymentResponseType | commonErrorType;
      const requestUrl = payload.staging === true
          ? this.stagingProcessPaymentUrl
          : this.processPaymentUrl;
      delete payload.staging
      const redirect = payload.redirect
      delete payload.redirect
      await axios.post<processPaymentResponseType>(
          requestUrl, payload)
          .then((r) =>
              redirect === true
                  ? PayTerraJsPay.goTo(r.data.threeds_url)
                  : responseData = r.data)
          .catch((e) => responseData = PayTerraJsPay.errorGenerator(e))
      return Object.keys(responseData).length !== 0 ?
          responseData :
          {message: "Wrong secret key", data: "Wrong secret key"} as commonErrorType;
    }
    */
    /**
       * Method for getting order info.
       * @param {orderInfoRequestType} payload - request payload.
       * @return {orderInfoResponseType} response - response data.
     */
    /* async orderInfoRequest(payload: orderInfoRequestType)
        : Promise<orderInfoResponseType | commonErrorType> {
      let responseData = {} as orderInfoResponseType | commonErrorType;
      const requestUrl = payload.staging === true
          ? this.stagingOrderInfoUrl
          : this.orderInfoUrl;
      delete payload.staging
      await axios.post<orderInfoResponseType>(
          requestUrl, payload)
          .then((r) => responseData = r.data)
          .catch((e) => responseData = PayTerraJsPay.errorGenerator(e));
      return Object.keys(responseData).length !== 0 ?
          responseData :
          {message: "Wrong secret key", data: "Wrong secret key"} as commonErrorType;
    }
    */
    /**
     * Method for getting token
     * @param {registerCardRequestType} payload - request payload.
     * @return {registerCardRequestType} response - response data.
     */
    PayTerraJsPay.prototype.transactionIdRequest = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var responseData, requestUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        responseData = {};
                        requestUrl = payload.staging === true
                            ? this.stagingRegisterCardUrl
                            : this.registerCardUrl;
                        delete payload.staging;
                        return [4 /*yield*/, axios__default["default"].post(requestUrl, payload)
                                .then(function (r) { return responseData = r.data; })
                                .catch(function (e) { return responseData = PayTerraJsPay.errorGenerator(e); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, Object.keys(responseData).length !== 0
                                ? responseData
                                : { message: "Wrong secret key", data: ["Wrong secret key"] }];
                }
            });
        });
    };
    return PayTerraJsPay;
}());

exports.PayTerraJsPay = PayTerraJsPay;
