/**
 * Arrow Function
 */

/**
 * Traditional Function
 */

// Declaration
function sum (a, b) {
    return a + b;
}

// Calling the Function
console.log(sum(4,7));

const sumArrow = (a, b) => a + b;

// Real life scenario: 
const users = [
    { 'name' : 'Alice', active: true },
    { 'name' : 'Bob', active: false },
];

const activeUsers = users.filter((user) => user.active);

console.log(activeUsers);

/**
 * Map 
 */
console.log('------Map-------')
console.log('------Iterate using For Loop-------')
for (let index = 0; index < users.length; index++) {
    const user = users[index];
    console.log(user);
}

console.log('------Map-------')
const userMap = users.map(user => console.log(user));


const pricesUsd = [10, 20, 30];
console.log(`USD Price List: ${pricesUsd}`);
const exchangeRate = 117.37;
const pricesBdt = pricesUsd.map(price => price * exchangeRate);
console.log(`BDT Price List: ${pricesBdt}`);


/**
 * Reduce
 */
console.log('------Reduce Demo-------')
let total = 0;
for (let index = 0; index < pricesUsd.length; index++) {
    total += pricesUsd[index];
}
console.log(total);

const totalWithReduce = pricesUsd.reduce((sum, amount) => sum + amount, 0)
console.log(totalWithReduce);


/**
 * Spread Operator
 */
console.log('------Spread Operator Demo-------')
const electronics = ['Laptop', 'Phone'];
const accessories = ['Charger', 'Headphone'];

let allProducts = [...electronics, ...accessories];
console.log(allProducts);


/**
 * Rest Operator
 */
console.log('------Rest Operator Demo-------')
function sumMany(...numbers) {
    console.log(numbers);
}

console.log(sumMany(1,2,3));

/**
 * Asyncronous Programming
 */
console.log('------Asyncronous Programming Demo-------')
// Promise 
// Async/Await 

const loadUserData = () => {
    setTimeout(() => {
        console.log('Log after 3 seconds');
    }, 3000);
}

loadUserData();

console.log('I am in present time');