// const player = {
//   name: "sewol",
//   points: 10,
//   fat: true,
// };

// console.log(player);
// console.log(player.name);
// console.log(player["name"]);

// player.fat = false;
// console.log(player);

// player.lastName = "kim";
// console.log(player);
// ~2.6

// function sayHello(myName, age) {
//   console.log("Hello! my name is " + myName + ". I'm " + age);
// }

// sayHello("sewol", 27);
// sayHello("yuna", 30);
// sayHello("loki", 1054);

// function plus(a, b) {
//   console.log(a + b);
// }

// plus(1, 2);
// plus(3, 2);
// plus(5, 5);

// function devide(a, b) {
//   console.log(a / b);
// }

// devide(5, 1);
// devide(5, 12);
// devide(5, 3);

// const player = {
//   name: "sewol",
//   sayHello: function (personName) {
//     console.log("hello! " + personName + ", nice to meet you!");
//   },
// };

// console.log(player.name);
// player.sayHello("lynn");

// const calculator = {
//   add: function (a, b) {
//     console.log(a + b);
//   },
//   minus: function (a, b) {
//     console.log(a - b);
//   },
//   divide: function (a, b) {
//     console.log(a / b);
//   },
//   multi: function (a, b) {
//     console.log(a * b);
//   },
//   pow: function (a, b) {
//     console.log(a ** b);
//   },
// };

// calculator.add(5, 2);
// calculator.divide(5, 2);
// calculator.minus(5, 2);
// calculator.multi(5, 2);
// calculator.pow(5, 2);

// const age = 96;

// function calculatorKrAge(age) {
//   return age + 2;
// }

// const krAge = calculatorKrAge(age);

// console.log(krAge);

const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age <= 0) {
  console.log("Please write a real positive number");
} else if (age < 18) {
  console.log("You are too young!");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink.");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise.");
} else if (age === 100) {
  console.log("wow you are wise");
} else if (age > 80) {
  console.log("You can do whatever you want.");
}
