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
if (drink == "yes"){
    let size = readLine.question("what size? a small is $1.00, a medium is $1.75, and a large is $2.25")
    if (size == "small"){
        orderdrink = 1
        total.push(1.00)
        order.push("small drink")
    }

    if (size == "medium"){
        orderdrink = 1
        total.push(1.75)
        order.push("medium drink")
    }

    if (size == "large"){
        orderdrink = 1
        total.push(2.25)
        order.push("large drink")
    }
    console.log(`ok a ${sandwich} sandwich and a ${size} drink.` )
}

if (drink == "no"){
    orderdrink = 1
    console.log(`no? ok so a ${sandwich} sandwich` )
}

let fries = readLine.question("do you want french fries?:")

if (fries == "yes"){
    let friesSize = readLine.question("what friesSize? small is $1.00, medium is $1.50, and a medium is $2.00")
    if (friesSize == "small") {
        let megasize = readLine.question("since you got small fries, do you wanna megasize your fries?:")
        if (megasize == "yes") {
            orderfries = 1
            total.push(2.00)
            order.push("mega size fries")
        }
        if(megasize =="no"){
            orderfries = 1
            console.log(`ok your loss`)
        }
    }
    if (friesSize == "small"){
        orderfires = 1
        total.push(1.00)
        order.push("small fries")
    }
    if (friesSize == "medium"){
        orderfires = 1
        total.push(1.50)
        order.push("medium fries")
    }
    if (friesSize == "large"){
        orderfires = 1
        total.push(2.00)
        order.push("large fries")
    }
    console.log(`so you will be having a ${friesSize} fry`)
}

if (fries == "no"){
    orderfries = 1
    console.log(`ok then...`)
}

let ketchupPacket = readLine.question("do you want any ketchup packets? they're on a special for $.25 each:")
if (ketchupPacket == "yes"){
    let many = readLine.question("how many?")
    if (many == "1"){
        orderketchupPacket= 1
        total.push(0.25)
        order.push("1 ketchupPacket")
    }
    if (many == "2"){
        orderketchupPacket = 2
        total.push(0.50)
        order.push("2 ketchupPacket")
    }
    console.log(`ok ${many} Ketchup Packets` )
}
if (ketchupPacket == "no"){
    orderketchupPacket = 1
    console.log('ok then...')
}
let mustard = readLine.question(" would you like some mustard?:")
if(mustard =="yes"){
    let quantity = readLine.question("how many?:")
    if (quantity == "1"){
        ordermustard = 1
        total.push(0.50)
        order.push("1 mustard packet")
    }
    if (quantity == "2"){
        ordermustard = 2
        total.push(1.00)
        order.push("2 mustard packets")
    }
    console.log(`ok so ${quantity} mustard packets`)
}
if (mustard =="no"){
    ordermustard = 1
    console.log('ummmm ok.....')
}
let hotsauce = readLine.question(" would you like some hotsauce?:")
if(hotsauce =="yes"){
    let amount = readLine.question("how many?:")
    if (amount == "1"){
        orderhotsauce = 1
        total.push(0.50)
        order.push("1 hotsauce packet")
    }
    if (amount == "2"){
        orderhotsauce = 2
        total.push(1.00)
        order.push("2 hotsauce packets")
    }
    console.log(`ok so ${amount} hotsauce packets`)
}
if (hotsauce =="no"){
    orderhotsauce = 1
    console.log('ummmm ok.....')
}
let totalprice = 0;
for(let i = 0; i < total.length; i++) {
    totalprice += total[i]
}
if (ordersandwich + orderdrink + orderfries + orderketchupPacket + ordermustard + orderhotsauce === 6) {
    total = totalprice - 1

}
totalprice = totalprice + (totalprice * 0.07);
totalprice = totalprice.toFixed(2);

console.log(`Your order is a ${order}`)
console.log(`Your total is then, ${totalprice}!`)