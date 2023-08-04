const clock = document.querySelector("h2#clock");

// function sayHello() {
//   console.log("Hello!");
// }

// setInterval(sayHello, 5000);
// setTimeout(sayHello, 3000);

// const date = new Date();
// console.log(date.getDate()); //일
// console.log(date.getDay()); //요일, 일요일이 0
// console.log(date.getFullYear()); //전체연도
// console.log(date.getHours()); //시
// console.log(date.getMinutes()); //분
// console.log(date.getSeconds()); //초

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  //console.log(`${hours} : ${minutes} : ${seconds}`);
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getClock();
setInterval(getClock, 1000);

//~#5.3
