let nameBox = document.querySelector("#name");
let emailBox = document.querySelector("#email");
let phoneBox = document.querySelector("#phone");
let deliveryBox = document.querySelector("#delivery");
let orderButton = document.querySelector(".button");

const CONFIRMATION_LINK = "confirm.html";
orderButton.href = "#";

function isFormDone() {
  return ![
    nameBox.value.length > 0,
    emailBox.value.length > 0,
    phoneBox.value.length > 0,
    deliveryBox.value.length > 0
  ].includes(false);
}

function updateButton() {
  if (isFormDone()) {
    orderButton.href = CONFIRMATION_LINK;
  } else {
    orderButton.href = "#";
  }
}

nameBox.addEventListener("input", updateButton);
emailBox.addEventListener("input", updateButton);
phoneBox.addEventListener("input", updateButton);
deliveryBox.addEventListener("input", updateButton);