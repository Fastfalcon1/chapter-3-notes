let contacts = {
    bff: 1234567,
    mom: 5555555,
    bro: 9876543
}


console.log(contacts);

console.log(contacts.bff);

console.log(contacts.myself);

contacts.sis = 3456677;
console.log(contacts);

contacts.bff = 111111;
console.log(contacts);

delete contacts.mom;
console.log(contacts);

console.log("bff" in contacts);
console.log("myself" in contacts);



let a = {
    value: 20
};
let b = a;
let c = {
    value:20
};

console.log( a == b);
console.log( a == c);
console.log( a == c);

console.log(a.value == c.value);

let dog = {
    dogName: 'Zelda',
    breed: 'Terrier',
    age: 9,
    size: 'medium',
    barks:true
}
console.log(dog);

let bob = {
    dogName: 'bob',
    breed: 'shihtzu',
    age: 3,
    size: 'small',
    barks:true
}
console.log(bob);

let princess = {
    dogName: 'princess',
    breed: 'pitbull',
    age: 10,
    size: 'large',
    Toddlers: '23'
}
console.log(princess);

let destroyer = {
    dogName: 'destroyer',
    breed: 'pitbull',
    age: 12,
    size: 'large',
    barks:true
}
console.log(destroyer);
let zeus = {
    dogName: 'zeus',
    breed: 'doberman',
    age: 9,
    size: 'medium',
    barks:true
}
console.log(zeus);

