//selected cart display in cart table
const table = document.getElementById("table");

function createElement(selectTarget, numberOfCart) {
  const tr = document.createElement("tr");
  tr.setAttribute("id", "dataTr");
  //add no
  const td = document.createElement("td");
  td.innerText = numberOfCart;
  tr.appendChild(td);
  //add img
  const td1 = document.createElement("td");
  const selectImg = selectTarget.children[0].children[0].src;
  const img = document.createElement("img");
  img.setAttribute("src", selectImg);
  td1.appendChild(img);
  tr.appendChild(td1);

  //add name
  const td2 = document.createElement("td");
  const selectName =
    selectTarget.children[1].children[0].children[0].innerText;
  td2.append(selectName);
  tr.appendChild(td2);
  // quantity
  const td3 = document.createElement("td");
  const helperDiv = document.createElement("div");
  const negative = document.createElement("button");
  negative.innerText = "-";
  negative.setAttribute("id", "neg");

  const input = document.createElement("input");
  input.min = "1";
  input.value = "1";
  input.type = "number";
  input.setAttribute("class", "inp");

  const positive = document.createElement("button");
  positive.innerText = "+";
  positive.setAttribute("id", "pos");

  //decrement
  negative.onclick = function (e) {
    if (Number(input.value) > 1) {
      input.value = parseInt(input.value, 10) - 1;
      calculationWithDecrement(e);
    }
  };

  //increment
  positive.onclick = function (e) {
    input.value = parseInt(input.value, 10) + 1;
    calculateWithIncrement(e);
  };

  //append quantity child
  helperDiv.appendChild(negative);
  helperDiv.appendChild(input);
  helperDiv.appendChild(positive);
  td3.appendChild(helperDiv);
  tr.appendChild(td3);

  //price
  const td4 = document.createElement("td");
  const selectPrice =
    selectTarget.children[1].children[2].children[0].children[0].innerText;
  const span = document.createElement("span");
  span.innerText = selectPrice;
  td4.innerText = "$";
  td4.appendChild(span);
  tr.appendChild(td4);

  //delete
  const td5 = document.createElement("td");
  const selectDelete = document.createElement("button");
  const logo = document.createElement("i");
  logo.setAttribute("class", "fa-solid");
  logo.classList.add("fa-square-xmark");
  selectDelete.appendChild(logo);
  selectDelete.setAttribute("class", "btn");
  //button click activity
  logo.onclick = function (e) {
    itemDelete(e);
  };

  td5.appendChild(selectDelete);
  tr.appendChild(td5);

  table.appendChild(tr);
}
