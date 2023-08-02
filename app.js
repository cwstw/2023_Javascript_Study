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

//
//

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

// const age = parseInt(prompt("How old are you?"));

// if (isNaN(age) || age <= 0) {
//   console.log("Please write a real positive number");
// } else if (age < 18) {
//   console.log("You are too young!");
// } else if (age >= 18 && age <= 50) {
//   console.log("You can drink.");
// } else if (age > 50 && age <= 80) {
//   console.log("You should exercise.");
// } else if (age === 100) {
//   console.log("wow you are wise");
// } else if (age > 80) {
//   console.log("You can do whatever you want.");
// }
// ~#2.16

//
//

// const title = document.getElementById("title");
// console.log(title);
// console.dir(title);

// title.innerText = "Got you!";

// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);

// const h1 = document.querySelector(".hello h1");
// console.log(h1);

// function handleTitleClick() {
//   console.log("title was clicked!");
//   h1.style.color = "blue";
// }

// function handleMouseEnter() {
//   h1.innerText = "mouse is here!";
// }

// function handleMouseLeave() {
//   h1.innerText = "mouse is gone!";
// }

// // title.addEventListener("click", handleTitleClick);
// h1.onclick = handleTitleClick;
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }

// window.addEventListener("resize", handleWindowResize);

// function handleWindowCopy() {
//   alert("copier!");
// }
// window.addEventListener("copy", handleWindowCopy);

// function handleWindowOffline() {
//   alert("SOS no WIFI!");
// }

// function handleWindowOnline() {
//   alert("All Good!");
// }
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("offline", handleWindowOnline);

// function handleTitleClick() {
//   // console.log(h1.style.color);
//   // h1.style.color = "blue";
//   // console.log(h1.style.color);

//   //정리되지 않은 코드
//   // if (h1.style.color == "blue") {
//   //   h1.style.color = "tomato";
//   // } else {
//   //   h1.style.color = "blue";
//   // }

//   ///정리된 코드
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor == "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }

// const h1 = document.querySelector(".hello h1");
// console.log(h1);

// function handleTitleClick() {
//클래스 네임 사용
// if (h1.className === "active") {
//   h1.className = "";
// } else {
//   h1.className = "active";
// }

//클래스 리스트 사용
// const ActiveClass = "active";
// if (h1.classList.contains(ActiveClass)) {
//   h1.classList.remove(ActiveClass);
// } else {
//   h1.classList.add(ActiveClass);
// }

//토글사용
// h1.classList.toggle("active");
// }

// h1.addEventListener("click", handleTitleClick);
//~#3.8

//
//

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  // if (value === "") {
  //   alert("Please write your name!");
  // } else if (value.length > 15) {
  //   alert("Your name is too long!");
  // }
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(username);

  localStorage.setItem(USERNAME_KEY, username);
  //greeting.innerText = `Hello, ${username}`;
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greetings
  paintGreetings(savedUsername);
}

// function handleLinkClick(event) {
//   event.preventDefault();
//   console.dir(event);
//   //alert("clicked!");
// }

// const link = document.querySelector("a");
// link.addEventListener("click", handleLinkClick);
