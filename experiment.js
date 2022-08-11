// problem solving 1
function radianToDegree(radian) {
    var pi = Math.PI;
    let degree = radian * (180 / Math.PI);
    return degree.toFixed(2)
}
// formula
console.log(radianToDegree(10));
console.log(radianToDegree(25));
console.log(radianToDegree(199));

// problem solving 2
let sentence = "app.js";
console.log(isJavaScriptFile(sentence))
function isJavaScriptFile(fileName) {
    if (sentence.endsWith('.js')) {
        return true
    } else {
        return false
    }
}

// problem solving 3

function oilPrice(desel, petrol, octen) {
    // price of oils
    const deselprice = 114
    const petrolprice = 130
    const octenprice = 135
    // multiplications
    let price1 = desel * deselprice
    let price2 = petrol * petrolprice
    let price3 = octen * octenprice
    // total price
    const totalprice = price1 + price2 + price3
    return totalprice
}
// formula
let firstprice = [1, 1, 1]
console.log(oilPrice(1, 1, 1))

let secondprice = [30, 20, 10]
console.log(oilPrice(30, 20, 10))

let thirdprice = [1, 0, 2]
console.log(oilPrice(1, 0, 2))

let foutrhprice = [0, 2, 3]
console.log(oilPrice(0, 2, 3))

// problem solving 4
function publicBusFare(passangers) {
    if (typeof passangers != 'number') {
        return "Input a Numeric Type parameter"
    }
    // variables
    let publicbuspessanger;
    let micropessangers;
    let anothermicro;
    //calculating  formula
    if (passangers >= 50) {
        let bus = parseInt(passangers / 50);
        micropessangers = passangers - (50 * bus);
        if (micropessangers > 11) {
            anothermicro = parseInt(micropessangers / 11);
            publicbuspessanger = micropessangers - (11 * anothermicro);
        } else {
            publicbuspessanger = micropessangers;
        }
    }
    //calculating formula
    else {
        micropessangers = passangers;
        if (micropessangers >= 11) {
            anothermicro = parseInt(micropessangers / 11);
            publicbuspessanger = micropessangers - (11 * anothermicro);
        } else {
            publicbuspessanger = micropessangers;
        }
    }
    return publicbuspessanger * 250;
}

// problem solving 5

// objects
let friend1 = {
    name: 'abul',
    friend: 'babul'
}

let friend2 = {
    name: 'babul',
    friend: 'abul'
}

// formula

console.log(isBestFriend(friend1, friend2))
function isBestFriend(friend1, friend2) {
    if (friend1.name == friend2.friend && friend1.friend == friend2.name) {
        return true
    } else {
        return false
    }
}