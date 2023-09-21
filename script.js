// array de objetos
let products = [
  { id: 13, name: "Lawn Mower", price: 250, stock: 3 },
  { id: 42, name: "Garden Tool Set", price: 25, stock: 8 },
  { id: 63, name: "Seeds", price: 10, stock: 10 },
  { id: 96, name: "Plants", price: 12, stock: 9 },
];

let message = "Pick an option:\n1 - show products\n2 - Add to cart\n3 - Finish shopping\n0 - Quit";

shop([products]); // shp()

function shop(products) {
  let cart = [];
  let option;

  do {
    option = Number(prompt(message));
    switch (option) {
      case 1:
        alert(showProducts());
        break;
      case 2:
        addToCart(products, cart);
        break;
      case 3:
        finishShopping(cart);
        cart = [];
        break;
      default:
        break;
    }
  } while (option != 0);

  if (option === 0) {
    let answer = prompt("are you sure you want to exit?\n1- Yes\n2- No");
    if (Number(answer) === 1) {
      alert("Thank you for shopping");
    } else if (Number(answer) === 2) {
      shop();
    }
  }
}

// show products function
function showProducts() {
  return products.map(product => product.id + " - " + product.name).join("\n");
}

// sadd to cart function
function addToCart(allProducts, cart) {
  let id = Number(prompt("Select product by id:\n" + showProducts(allProducts)));
  let productFound = products.find(product => product.id === id);

  let addedToCart = cart.find(product => product.id === productFound.id);

  if (productFound.stock > 0) {
    if (addedToCart) {
      addedToCart.quantity++;
      addedToCart.subtotal = addedToCart.quantity * addedToCart.price;
    } else {
      cart.push({
        id: productFound.id,
        name: productFound.name,
        price: productFound.price,
        quantity: 1,
        subtotal: productFound.price,
      });
    }
    productFound.stock--;
    alert("product added to cart");
  } else {
    alert("product not in stock");
  }
}

// finish shopping
function finishShopping(cart) {
  if (cart.length === 0) {
    alert("you should add the product to cart first!");
  } else {
    let total = cart.reduce((acum, product) => acum + product.subtotal, 0);
    alert("Your total is: " + total);
    alert("Thank you for shopping");
  }
}
