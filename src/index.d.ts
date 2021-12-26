import {PayTerraProcessingInterface} from "./models/interfaces";
import {processPaymentRequestType, processPaymentResponseType} from "./models/paymentProceessingTypes";
import {commonErrorType} from "./models/errorTypes";
import {orderInfoRequestType, orderInfoResponseType} from "./models/orderInfoTypes";

export declare class PayTerraProcessing implements PayTerraProcessingInterface {
    processPaymentUrl: string;
    orderInfoUrl: string;

    processPaymentRequest(payload: processPaymentRequestType):Promise<processPaymentResponseType | commonErrorType>
    orderInfoRequest(payload: orderInfoRequestType):Promise<orderInfoResponseType | commonErrorType>
}
