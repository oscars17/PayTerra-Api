Установка библиотеки
```
npm install payterra-js-pay
yarn add payterra-js-pay
```
Подлючение библиотеки 
```
    import {PayTerraJsPay} from "payterra-js-pay";
    const jsPayInstance = new PayTerraJsPay();
```

Запрос на проведение платежа с карточными данными
```
const payload = {
    amount: number,
    id_data: {
        cc: string,
        cvv: string,
        expire: string,
        owner: string
    },
    order_currency: string,
    secret_key: string,
    //на текущий момент доступны запросы только на staging
    staging?: boolean 
    // редирект на 3ds (threeds_url) в респонсе
    redirect?: boolean 
}
instance.processPaymentRequest(payload)
```
Ответ на проведение платежа с карточными данными
```
    {
    "threeds_url": string,
        "order": {
            "id": number,
            "payment_currency": string,
            "payment_currency_code": string,
            "payment": number,
            "amount": number,
            "shop": {
                "id": number,
                "title": string,
                "success_url": string,
                "key": string,
                "site": string или null
            },
            "shop__title": string,
            "wallet": number,
            "wallet__remote_id": string,
            "token": string,
            "remote_id": string,
            "type": string,
            "status": string,
            "substatuses": string or null,
            "created_date": string,
            "is_active": boolean,
            "pan_mask": string,
            "pan_bin": string,
            "sended_sms": boolean или null,
            "writeoff__code_repeat": number или null,
            "threeds_data":{
                "action":string,
                "method":string,
                "params":{
                    "MD":string,
                    "PaReq":string,
                    "TermUrl":string
                } или null,
            "description": string,
            "test_mode": boolean,
            "success_url": string,
            "fail_url":string,
            "can_refund_amount": number,
            "payment__means_of_payment": string или null,
            "payment_method": string,
            "payout__means_of_payment": string или null,
            "status_str": string,
            "fake_number": string,
            "writeoff__order": string или null,
            "available_payment_methods": string[],
            "parent_for_recurrent": boolean или null,
            "paymentgate_success_url": string,
            "paymentgate_error_url": string
    }
```



Запрос на получение данных по заказу

```
const payload = {
    secret_key : "a07b1c9546b54b9596b7f5c4da4f7b33",
    order_token : "4b462fce-9b96-4022-9a27-df5d3182c91e",
    //на текущий момент доступны запросы только на staging
    staging?: boolean
}
instance.orderInfoRequest(payload)
```

Ответ на получение данных по заказу

```
    'payment_currency': string
    'amount': number
    'shop': string
    'card_token': string
    'card_brand': string
    'pan_bin': string
    'pan_mask_short': string
    'wallet': string
    'token': string
    'number': string
    'status': string
    'created_date': string
    'pan_mask': string
    'payment_type': string
    'payment_account': string
    'binding_token': string
    'payment_account_detail': string или null
    'error_code': string
    'error_message': string
```