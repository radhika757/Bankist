// "use strict";

// let arr = ['a','b', 22, 'c', 'd', 'e'];
// let slicArr = arr.slice(2,5);
// console.log(slicArr);
// // to get last element of any array
// console.log(arr.slice(-1));
// // splice method
// console.log(arr.splice(-1));
// console.log(arr); //['a', 'b', 22, 'c', 'd']

// let arr2 = [22, 12, 2, 10, 11, 7];
// console.log(arr2.reverse());

// let newA = arr.concat(arr2);
// console.log(newA);

// console.log(arr2.join(':'));

// console.log(arr2[0]);
// console.log(arr2.at(1));

// const momemnts = [-220, 200, 480, -120, 445, 500, 100, -300];

// for( const moment of momemnts){
//     if(moment > 0){
//         console.log(`You deposited ${moment}`);
//     } else{
//         console.log(`You withdrew ${Math.abs(moment)}`);
//     }
// }
"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 200, -550, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Radhika Rajashekara Rao",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';


  movements.forEach(function (mov, i) {
const type = mov > 0 ? 'deposit' : 'withdrawal';
// changing css class type according to the value: here {type}
    const html = `
    <div class="movements__row">  
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;
// insert adjacent html method to add this html to the webpage 
containerMovements.insertAdjacentHTML('afterbegin', html);

  });
};
displayMovements(account1.movements);

// function for creating a new username.
// const createUserName = function(user){
//   const username = user
//   .split(' ')
//   .map(function(name){
//     return name.charAt(0);
//   })
//   .join('');
// return username; 
// };


// Now we want to compute a username for each of the account holders 
const createUserName = function(accs){
// modifying the existing accounts array 
accs.forEach(function (acc) {
  acc.username = acc.owner
  .split(' ')
  .map(function(name){
    return name.charAt(0);
  })
  .join('');
});
// return username;  we will not return because what we are not creating any new to return the value.
};
createUserName(accounts);

// Movements 
const movements = [200, 450, -400, 3000, -650, -130, 70, 200, -550, 1300];


// Getting deposits 
const deposit = movements.filter(function (mov){
  return mov > 0 ;
});

// Setting withdrawals 
const withdrawals = movements.filter(function (mov){
  return mov < 0;
});

console.log(withdrawals);
// Converting this movements into dollars using .map()

const euroToUsd = 1.2;
const usdMovements = movements.map(function(val){
  return val * euroToUsd;
})
console.log(usdMovements);


// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);




