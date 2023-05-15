const readLine = require ('readline-sync');

let total = [];

let order = [];

let sandwich = readLine.question("what sandwich you want? we got chicken $5.25, beef $6.25, and tofu for $5.75:")

console.log(`you have chosen a ${sandwich}`);

if (sandwich == "chicken"){
    ordersandwich = 1
    total.push(5.25)
    order.push("chicken sandwich")
}

if (sandwich == "beef"){
    ordersandwich = 1
    total.push(6.25)
    order.push("beef sandwich")
}

if (sandwich == "tofu"){
    ordersandwich = 1
    total.push(5.75)
    order.push("tofu sandwich")
}

let drink = readLine.question("do you want a drink to quench your thirst?:")
if(drink =="yes"){
    let size = readLine.question("what size? a small is $1.00, a medium is $1.75, and a large is $2.25")
    if (drink == "small"){
        orderdrink = 1
        total.push(1.00)
        order.push("small drink")
    }

    if (drink == "medium"){
        orderdrink = 1
        total.push(1.75)
        order.push("medium drink")
    }

    if (drink == "large"){
        orderdrink = 1
        total.push(2.25)
        order.push("large drink")
    }
    console.log(`ok a ${sandwich} sandwich and a ${drink} drink.` )
}

if (drink = "no"){
    orderdrink = 1
    console.log(`no? ok so a ${sandwich} sandwich` )
}

let fries = readLine.question("do you want french fries?:")

if (fries ="yes"){
    let size =readLine.question("what size? small is $1.00, medium is $1.50, and a medium is $2.00")
    console.log(`ok so a ${size} fry.` )
}
