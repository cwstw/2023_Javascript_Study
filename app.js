const player = {
  name: "sewol",
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.fat = false;
console.log(player);

player.lastName = "kim";
console.log(player);
