function calculationWithDecrement(e) {
  let targetMoney = Number(
    e.target.parentNode.parentNode.parentNode.children[4].children[0].innerText
  );
  let total = Number(totalPriceShow.innerText);
  let clickSubTotal = Number(subTotal.innerText);
  totalPriceShow.innerText = total - targetMoney;
  subTotal.innerText = clickSubTotal - targetMoney;
}

function calculateWithIncrement(e) {
  let targetMoney = Number(
    e.target.parentNode.parentNode.parentNode.children[4].children[0].innerText
  );
  let total = Number(totalPriceShow.innerText);
  let clickSubTotal = Number(subTotal.innerText);
  totalPriceShow.innerText = total + targetMoney;
  subTotal.innerText = clickSubTotal + targetMoney;
}

//after clicking delete this function work
const discount = document.getElementById('discount');
const discountShow = document.getElementById('discountShow');
const promoFull = document.getElementById("promoFull");
function itemDelete(e) {
  const currentTr = e.target.parentNode.parentNode.parentNode;
  //take the next sibling
  let nextSibling = currentTr.nextElementSibling;
  while (nextSibling) {
    //update No
    let no = nextSibling.children[0];
    no.innerText = Number(no.innerText) - 1;
    nextSibling = nextSibling.nextElementSibling;
  }
  //current item input
  const currentInput = currentTr.children[3].children[0].children[1].value;
  //current money
  const currentMoney = Number(currentTr.children[4].children[0].innerText);
  //last total and subtotal
  let total = Number(totalPriceShow.innerText);
  let clickSubTotal = Number(subTotal.innerText);

  //header Count will update
  headerCartCount.innerText = Number(headerCartCount.innerText) - 1;

  //Now remove current money from the total
  if (Number(headerCartCount.innerText) >= 1) {
    totalPriceShow.innerText = total - currentInput * currentMoney;
    subTotal.innerText = clickSubTotal - currentInput * currentMoney;
  } else {
    totalPriceShow.innerText = "000";
    subTotal.innerText = "000";
    discountShow.innerText="000";
    discount.classList.add("hidden");
    promoFull.classList.remove("hidden");
    initialTotal = 0;
  }
  //to remove disable from selected
  const imgCheckers = document.querySelectorAll("#imgChecker");
  for (let imgChecker of imgCheckers) {
    if (imgChecker.src == currentTr.children[1].children[0].src) {
      const selectedItem =
        imgChecker.parentNode.parentNode.children[1].children[2].children[1];
      selectedItem.removeAttribute("disabled");
    }
  }

  //remove selected item
  table.removeChild(currentTr);
}

//Apply coupon activity
const inputPromo = document.getElementById("inputPromo");
const promoSection = document.getElementById("promoSection");
inputPromo.onfocus = function () {
  promoSection.classList.remove("hidden");
};

document.addEventListener("click", function (e) {
  const promoFull = document.getElementById("promoFull");
  clickTarget = e.target;
  while (clickTarget) {
    if (clickTarget == promoFull) {
      return;
    }
    clickTarget = clickTarget.parentNode;
  }
  promoSection.classList.add("hidden");
});

//click on cuppon update it to input fild
const cupponLis = document.querySelectorAll("#cupponLi");
for (let cupon of cupponLis) {
  cupon.addEventListener("click", function (e) {
    const cuponValue = e.target.innerText;
    inputPromo.value = cuponValue;
    promoSection.classList.add("hidden");
  });
}


//discount process
const promoActive = document.getElementById('promoActive');
promoActive.addEventListener('click' , function(){
  manageDiscount();
});

function manageDiscount(){
  let total = Number(totalPriceShow.innerText);
  if(inputPromo.value == "YeaHoo!"){
    let totalDis = (30/100) * total;
    subTotal.innerText = total - totalDis;
    discountShow.innerText = totalDis;
    discount.classList.remove('hidden');
    promoFull.classList.add("hidden");
  }
  else  if(inputPromo.value == "CouponLover"){
    let totalDis = (20/100) * total;
    subTotal.innerText = total - totalDis;
    discountShow.innerText = totalDis;
    discount.classList.remove('hidden');
    promoFull.classList.add("hidden");
  }
  else{
    alert("You Provide a wrong coupon");
  }
}