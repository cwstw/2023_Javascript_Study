const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.classList.add("img-fluid");
bgImage.classList.add("backgroud-image");
bgImage.src = `img/${randomImage}`;

document.body.appendChild(bgImage);
