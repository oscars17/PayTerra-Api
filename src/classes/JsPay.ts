import {PayTerraJsPayInterface} from '../models/interfaces';
import {
  processPaymentRequestType,
  processPaymentResponseType} from '../models/paymentProceessingTypes';
import axios from 'axios';
import {
  orderInfoRequestType,
  orderInfoResponseType} from '../models/orderInfoTypes';
import {commonErrorType} from "../models/errorTypes";


/** Class representing an entry point for PayTerra requests. */
export class PayTerraJsPay implements PayTerraJsPayInterface {
  stagingProcessPaymentUrl = 'https://staging.payterra.biz/rest/js_pay/simple/';
  stagingOrderInfoUrl = 'https://staging.payterra.biz/rest/js_pay/orderinfo/';
  processPaymentUrl = 'https://staging.payterra.biz/rest/js_pay/simple/';
  orderInfoUrl = 'https://staging.payterra.biz/rest/js_pay/orderinfo/';

  /**
   *
   * @param e - error obj
   * @return {commonErrorType} - returns error object
   */
  _errorGenerator(e): commonErrorType {
    let errorData = {} as commonErrorType;
    if (axios.isAxiosError(e) && e.response) {
          errorData = e.response.data as commonErrorType;
    } else {
      errorData = {message: "Unknown error", data: "Unknown error"}
    }
    return errorData;
  }

  /**
     * Method for payment processing.
     * @param {processPaymentRequestType} payload - request payload.
     * @return {processPaymentResponseType} response - response data.
   */
  async processPaymentRequest(payload: processPaymentRequestType)
      : Promise<processPaymentResponseType | commonErrorType> {
    let responseData = {} as processPaymentResponseType | commonErrorType;
    const requestUrl = payload.staging ? this.stagingProcessPaymentUrl : this.processPaymentUrl;
    delete payload.staging
    await axios.post<processPaymentResponseType>(
        requestUrl, payload)
        .then((r) => responseData = r.data)
        .catch((e) => this._errorGenerator(e))
    return Object.keys(responseData).length !== 0 ?
        responseData :
        {message: "Wrong secret key", data: "Wrong secret key"} as commonErrorType;
  }

  /**
     * Method for getting order info.
     * @param {orderInfoRequestType} payload - request payload.
     * @return {orderInfoResponseType} response - response data.
   */
  async orderInfoRequest(payload: orderInfoRequestType)
      : Promise<orderInfoResponseType | commonErrorType> {
    let responseData = {} as orderInfoResponseType | commonErrorType;
    const requestUrl = payload.staging ? this.stagingOrderInfoUrl : this.orderInfoUrl;
    delete payload.staging
    await axios.post<orderInfoResponseType>(
        requestUrl, payload)
        .then((r) => {responseData = r.data; console.log(r)}).catch((e) => this._errorGenerator(e));
    return Object.keys(responseData).length !== 0 ?
        responseData :
        {message: "Wrong secret key", data: "Wrong secret key"} as commonErrorType;
  }
}
