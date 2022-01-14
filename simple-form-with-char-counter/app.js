let productNameInputElement = document.querySelector("#product-name");
let remainingCharsElement = document.getElementById("remaining-chars");

let maxAllowedChars = productNameInputElement.maxLength;

function inputFieldListener(event) {
  let inputFieldChars = event.target.value;
  let enteredTextLength = inputFieldChars.length;
  let remainingChars = maxAllowedChars - enteredTextLength;
  remainingCharsElement.innerText = remainingChars;

  //remainingCharsElement.style.color = "rgb(0, 120, 50)";
  if (remainingChars === 0) {
    remainingCharsElement.classList.add("error");
    productNameInputElement.classList.add("error");
  } else if (remainingChars <= 10) {
    remainingCharsElement.classList.add("warning");
    productNameInputElement.classList.add("warning");
    remainingCharsElement.classList.remove("error");
    productNameInputElement.classList.remove("error");
  } else {
    remainingCharsElement.classList.remove("warning");
    productNameInputElement.classList.remove("warning");
  }
}

productNameInputElement.addEventListener("input", inputFieldListener);
