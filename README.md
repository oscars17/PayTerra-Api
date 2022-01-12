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

Запрос на получение айди транзакции
```
const payload = {
    staging: boolean, <- опционально, делать ли запрос на стейдж
    card_data: {
        card_number: string,
        card_month: string,
        card_year: string
    },
    shop_key: string
}
instance.transactionIdRequest(payload)
```

Ответ на получение данных по заказу

```
{
    "transaction_id": string
}
```
Ошибки имеют вид 
```
    {
        "message": string,
        field name string: [string]
    }
```