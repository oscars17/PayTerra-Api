import {PayTerraJsPayInterface} from "./models/interfaces";
import {
    processPaymentRequestType,
    processPaymentResponseType,
    registerCardRequestType, registerCardResponseType
} from "./models/paymentProceessingTypes";
import {commonErrorType} from "./models/errorTypes";
import {orderInfoRequestType, orderInfoResponseType} from "./models/orderInfoTypes";

export class PayTerraJsPay implements PayTerraJsPayInterface {
    /*
    processPaymentUrl: string;
    orderInfoUrl: string;
    stagingProcessPaymentUrl: string;
    stagingOrderInfoUrl: string;
     */
    registerCardUrl: string;
    stagingRegisterCardUrl: string;

    /*
    processPaymentRequest(payload: processPaymentRequestType):Promise<processPaymentResponseType | commonErrorType>
    orderInfoRequest(payload: orderInfoRequestType):Promise<orderInfoResponseType | commonErrorType>
    */
    transactionIdRequest(payload: registerCardRequestType): Promise<registerCardResponseType | commonErrorType>;
}