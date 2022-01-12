import {PayTerraJsPayInterface} from '../models/interfaces';
import {
  processPaymentRequestType,
  processPaymentResponseType, registerCardRequestType, registerCardResponseType
} from '../models/paymentProceessingTypes';
import axios from 'axios';
import {
  orderInfoRequestType,
  orderInfoResponseType} from '../models/orderInfoTypes';
import {commonErrorType} from "../models/errorTypes";


/** Class representing an entry point for PayTerra requests. */
export class PayTerraJsPay implements PayTerraJsPayInterface {
  /*
  stagingProcessPaymentUrl = 'https://staging.payterra.biz/rest/js_pay/simple/';
  stagingOrderInfoUrl = 'https://staging.payterra.biz/rest/js_pay/orderinfo/';
  processPaymentUrl = 'https://staging.payterra.biz/rest/js_pay/simple/';
  orderInfoUrl = 'https://staging.payterra.biz/rest/js_pay/orderinfo/';
  */
  registerCardUrl = 'https://staging.payterra.biz/rest/js_pay/registercard/';
  stagingRegisterCardUrl = 'https://staging.payterra.biz/rest/js_pay/registercard/';

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
  private static errorGenerator(e): commonErrorType {
    let errorData = {} as commonErrorType;
    if (axios.isAxiosError(e) && e.response) {
          errorData = e.response.data as commonErrorType;
    } else {
      console.log(e)
      errorData = {message: "Unknown error", data: "Unknown error"}
    }
    return errorData;
  }

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
  async registerCardRequest(payload: registerCardRequestType): Promise<registerCardResponseType | commonErrorType> {
    let responseData = {} as registerCardResponseType | commonErrorType;
    const requestUrl = payload.staging === true
        ? this.stagingRegisterCardUrl
        : this.registerCardUrl;
    delete payload.staging
    await axios.post<registerCardResponseType>(
        requestUrl, payload)
        .then((r) => responseData = r.data)
        .catch((e) => responseData = PayTerraJsPay.errorGenerator(e));
    return Object.keys(responseData).length !== 0
        ? responseData
        : {message: "Wrong secret key", data: "Wrong secret key"} as commonErrorType;
  }
}
