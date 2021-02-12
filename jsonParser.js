const response = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
        }
    },
    "stock": {
        "stocks": {
            "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}

// Первое задание
console.log(`1) Наименование товаара: ${response.displayedName.displayedName.value}`);

// Второе и третье задание
let storesWithProductInStock = [];
let storeWithMaxProductsInStock = "";
let maxProductsInStock = 0;

for (const [store, productsInStockString] of Object.entries(response.stock.stocks["34"])) {
    const productsInStock = Number(productsInStockString);
    if (productsInStock != 0) {
        storesWithProductInStock.push(store);
    }
    if (productsInStock > maxProductsInStock) {
        maxProductsInStock = productsInStock;
        storeWithMaxProductsInStock = store;
    }
}

console.log("Второе задание")
console.log(storesWithProductInStock);

// Третье задание вывод в консоль
console.log("Третье задание")
console.log(`Номер магазина: ${storeWithMaxProductsInStock}, Количество товара: ${maxProductsInStock}`);

