export type shopType = {
    [key: string]: any;
    id: number,
    title: string,
    success_url: string,
    key: string,
    site: string | null
}

export type ThreedsDataType = {
    action:string,
    method:string,
    params:{
        MD:string,
        PaReq:string,
        TermUrl:string
    }
}

export type orderType = {
    [key: string]: any;
    id: number,
    payment_currency: string,
    payment_currency_code: string,
    payment: number,
    amount: number,
    shop: shopType,
    shop__title: string,
    wallet: number,
    wallet__remote_id: string,
    token: string,
    type: string,
    status: string,
    substatuses: string,
    created_date: string,
    is_active: boolean,
    pan_mask: string,
    pan_bin: string,
    sended_sms: boolean | null,
    writeoff__code_repeat: number | null,
    threeds_data: ThreedsDataType | null,
    description: string,
    test_mode: boolean,
    success_url: string,
    fail_url: string,
    can_refund_amount: number,
    payment__means_of_payment: string | null,
    payment_method: string,
    payout__means_of_payment: string | null,
    status_str: string,
    fake_number: string,
    writeoff__order: string | null,
    available_payment_methods: string[],
    parent_for_recurrent: boolean | null,
    paymentgate_success_url: string,
    paymentgate_error_url: string
}


export type idDataType = {
    [key: string]: any;
    cc: string,
    cvv: string,
    expire: string,
    owner: string
}

export type processPaymentRequestType = {
    [key: string]: any;
    amount: number;
    id_data: idDataType;
    order_currency: string;
    secret_key: string;
    staging?: boolean;
    redirect?: boolean;
}

export type processPaymentResponseType = {
    [key: string]: any;
    threeds_url: string;
    order: orderType;
}

export type registerCardRequestType = {
    [key: string]: any;
    card_data: {
        card_number: string;
        card_month: string;
        card_year: string;
        cvv: string;
    },
    staging?: boolean;
    shop_key: string;
}

export type registerCardResponseType = {
    [key: string]: any;
    transaction_id: string;
    card_token: string;
}
