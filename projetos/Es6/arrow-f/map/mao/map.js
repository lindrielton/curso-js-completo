const products = [
    {name:"camisa", prince: 10.99, category:"roupaz"},
    {name:"chaleira", prince: 49.99, category:"eletro"},
    {name:"fogão", prince: 100, category:"eletro"},
    {name:"calça", prince: 59.99, category:"roupaz"},
    {name:"camisa", prince: 10.99, category:"roupaz"},
]


products.map((promo) => {
    if(promo.category === 'roupaz'){
        promo.promocao = true;
    }
});


console.log(products);