//total price side
const totalPriceShow = document.getElementById("totalPriceShow");
const subTotal = document.getElementById("subTotal");

//product item
const addToCart = document.querySelectorAll("#addToCart");
const headerCartCount = document.getElementById("headerCartCount");

//this part for increment the cart count
for (let x of addToCart) {
  x.addEventListener("click", function (e) {
    //header counting
    let numberOfCart = Number(headerCartCount.innerText);
    numberOfCart++;
    headerCartCount.innerText = numberOfCart;

    //Do not accept same item multiple time
    if (e.target.hasAttributes("disabled")) {
      e.target.setAttribute("disabled", true);
    }
    const selectTarget = e.target.parentNode.parentNode.parentNode;
    //create element according click
    createElement(selectTarget, numberOfCart);
    //calculate initial money
    calculateInitialMoney(selectTarget);
  });
}

//calculate initial money
var initialTotal = 0;
function calculateInitialMoney(selectTarget) {
  initialMoney = Number(
    selectTarget.children[1].children[2].children[0].children[0].innerText
  );
  initialTotal += initialMoney;
  totalPriceShow.innerText = initialTotal;
  subTotal.innerText = initialTotal;
}

//display cart page
const cart_click = document.getElementById("cart_click");
const homepage = document.getElementById("homepage");
const cartHolder = document.getElementById("cartHolder");
cart_click.addEventListener("click", function () {
  homepage.classList.add("hidden");
  cartHolder.classList.remove("hidden");
});
function homeActive(){
  homepage.classList.remove("hidden");
  cartHolder.classList.add("hidden");
}
