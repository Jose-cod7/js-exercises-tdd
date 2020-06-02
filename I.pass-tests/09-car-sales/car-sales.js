function sales(carSold) {
    const totalSales = {};
    console.log(totalSales);
    carSold.forEach((car) => {
        const acumulador = totalSales[car.make] ? totalSales[car.make] : 0;
        console.log(acumulador);
        totalSales[car.make] = car.price + acumulador;
        console.log(car.make);
    });
    console.log(totalSales);
    return totalSales;
}
module.exports = sales;