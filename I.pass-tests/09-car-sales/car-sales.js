function sales(carsSold) {
    /*var total = 0;
        var i;
        for (i = 0; i >= carsSold.length; i++) {
            total += carsSold[i];
        }*/
    let carSales = carsSold[0].price + carsSold[4].price;
    let carMake = carsSold[0].make;
    console.log(`${carMake} : ${carSales}`);
    return `${carMake} : ${carSales}`;
}
module.exports = sales;