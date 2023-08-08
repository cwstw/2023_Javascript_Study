let images = [];
for (i = 0; i < 5; i++) {
  images.push(`0${i}.jpg`);
}

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.classList.add("img-fluid");
bgImage.src = `img/${randomImage}`;

document.body.appendChild(bgImage);
