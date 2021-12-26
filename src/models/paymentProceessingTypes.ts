export type shopType = {
    [key: string]: any;
    id: number,
    title: string,
    success_url: string,
    key: string,
    site: any // waiting for examples of element
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
    sended_sms: any, // waiting for examples of element
    writeoff__code_repeat: any, // waiting for examples of element
    threeds_data: any, // waiting for examples of element
    description: string,
    test_mode: boolean,
    success_url: string,
    fail_url: string,
    can_refund_amount: number,
    payment__means_of_payment: any, // waiting for examples of element
    payment_method: string,
    payout__means_of_payment: any, // waiting for examples of element
    status_str: string,
    fake_number: string,
    writeoff__order: any, // waiting for examples of element
    available_payment_methods: string[],
    parent_for_recurrent: any, // waiting for examples of element
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
    amount: number,
    id_data: idDataType,
    order_currency: string,
    secret_key: string,
    staging?: boolean
}

export type processPaymentResponseType = {
    [key: string]: any;
    threeds_url: string,
    order: orderType
}
