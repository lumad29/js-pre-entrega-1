let message =
  "pick your product\n1- Lawn Mower - $250 \n2- Garden Tool Set $20\n3- Pack of seeds $10 \n0- Exit";
let option;
let total = 0;

const LawnMower = 250;
const gardenToolSet = 20;
const seeds = 10;

let shop = function () {
  do {
    option = Number(prompt(message));
    switch (option) {
      case 1:
        alert("Lawn Mower added to cart");
        total += LawnMower;
        alert("your total is $" + total);
        break;
      case 2:
        alert("Garden Tool Set added to cart");
        total += gardenToolSet;
        alert("your total is $" + total);
        break;
      case 3:
        alert("Pack of seeds added to cart");
        total += 10;
        alert("your total is $" + total);
        break;
    }
  } while (option != 0);

  if (option === 0) {
    // alert("are you sure you want to exit?");
    let answer = prompt("are you sure you want to exit?\n1- Yes\n2- No");
    if (Number(answer) === 1) {
      alert("Thank you for shopping");
    } else if (Number(answer) === 2) {
      shop();
    }
  }
};

shop();
