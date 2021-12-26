export type orderInfoRequestType = {
    [key: string]: any;
    secret_key: string,
    order_token: string,
    staging?: boolean
}

export type orderInfoResponseType = {
    [key: string]: any;
    payment_currency: string,
    amount: number,
    shop: string,
    card_token: string,
    card_brand: string,
    pan_bin: string,
    pan_mask_short: string,
    wallet: string,
    token: string,
    number: string,
    status: string,
    created_date: string,
    pan_mask: string,
    payment_type: string,
    payment_account: any, // waiting for examples of element
    payment_account_detail: any, // waiting for examples of element
    error_code: string,
    error_message: string
}
