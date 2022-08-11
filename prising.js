function oilPrice(desel, petrol, octen) {
    const deselprice = 114
    const petrolprice = 130
    const octenprice = 135

    let price1 = desel * deselprice
    let price2 = petrol * petrolprice
    let price3 = octen * octenprice

    const totalprice = price1 + price2 + price3
    return totalprice
}
let firstprice = [1, 1, 1]
console.log(oilPrice(1, 1, 1))

let secondprice = [30, 20, 10]
console.log(oilPrice(30, 20, 10))

let thirdprice = [1, 0, 2]
console.log(oilPrice(1, 0, 2))

let foutrhprice = [0, 2, 3]
console.log(oilPrice(0, 2, 3))