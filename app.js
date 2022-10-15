const billAmt = document.querySelector("#bill-Amt");
const billAmtBtn = document.querySelector("#billBtn");

const givAmt = document.querySelector("#giv-Amt");
const checkButton = document.querySelector("#giv-AmtBtn");


const errorMessage = document.querySelector("#err-message");

const givAmtDisplay = document.querySelector("#giv-amt-display");
const outputTable = document.querySelector("#outputTable");

const tabValues = document.querySelectorAll(".tab-values");


const notes = [2000, 500, 100, 20, 10, 5, 1];

function checkBillAmount() {
  hideContent(); // error message needs to removed after user enters correct value

  if (Number(billAmt.value) > 0) {
    billAmtBtn.style.display = "none";
    givAmtDisplay.style.display = "block";
  } else {
    showMessage("Invalid Bill Amount! Enter a valid Bill Amount");
  }
};

function checkGivenAmount() {
  console.log("clicked")
  console.log("naveen")
  
  hideContent();
  if (Number(billAmt.value) > 0 && Number(givAmt.value) > 0) {
    if (Number(givAmt.value) >= Number(billAmt.value)) {
      const amountToBeReturned = Number(givAmt.value) - Number(billAmt.value);
      if (amountToBeReturned < 1) {
        console.log(amountToBeReturned)
        showMessage("No amount should be returned");
        outputTable.style.display = "none";
      } else {
          console.log(amountToBeReturned)
        calcDenomination(amountToBeReturned);
      }
    } else {
      showMessage("Cash amount should be more than or equal to the bill amount");
    }
  } else {
    showMessage("Invalid input! Enter valid Bill Amount & Cash Given to continue");
  }
}
  function calcDenomination(amount) {
      outputTable.style.display = "block";
    for (let i = 0; i < notes.length; i++) {
      tabValues[i].innerText = Math.floor(amount / notes[i]);
      amount %= notes[i];
    }
    
  };

  // function clearNoOfNotes() {
  //   for (let notes of tabValues) {
  //     notes.innerText = "";
  //   }
  // }

  function showMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
    errorMessage.style.color = "red";
    outputTable.style.display = "none";
  };

  function hideContent() {
    errorMessage.style.display = "none";
    outputTable.style.display = "none";
  };

  billAmtBtn.addEventListener("click", checkBillAmount);
  checkButton.addEventListener("click", checkGivenAmount);