import {PayTerraApiInterface} from "./models/interfaces";
import {processPaymentRequestType, processPaymentResponseType} from "./models/paymentProceessingTypes";
import {commonErrorType} from "./models/errorTypes";
import {orderInfoRequestType, orderInfoResponseType} from "./models/orderInfoTypes";

export declare class PayTerraProcessing implements PayTerraApiInterface {
    processPaymentUrl: string;
    orderInfoUrl: string;
    stagingProcessPaymentUrl: string;
    stagingOrderInfoUrl: string;

    processPaymentRequest(payload: processPaymentRequestType):Promise<processPaymentResponseType | commonErrorType>
    orderInfoRequest(payload: orderInfoRequestType):Promise<orderInfoResponseType | commonErrorType>
}
