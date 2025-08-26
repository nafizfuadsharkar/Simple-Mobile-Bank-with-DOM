const validPin = 1234;

// function to get input values
function getInputValueNumber(id) {
  const inputFieldValueNumber = parseInt(document.getElementById(id).value);
  return inputFieldValueNumber;
}

function getInputValue(id) {
  const inputField = document.getElementById(id).value;
  return inputField;
}

// function to get inner text
function getInnerText(id) {
  const elementValueNumber = parseInt(document.getElementById(id).innerText);
  return elementValueNumber;
}

// function to set inner text 
function setInnerText(value){
  const availableBalanceElement = document.getElementById('available-balance').innerText = value;
  return availableBalanceElement; 
}

// add money features
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const bank = inputField("bank");
    const accountNumber = document.getElementById("account-number").value;
    const amount = getInputValueNumber("add-amount");
    const pin = getInputValueNumber("add-pin");

    const availableBalance = getInnerText("available-balance");
    if (accountNumber.length < 11) {
      alert("Please provide the valid account number");
      return;
    }

    if (pin != validPin) {
      alert("Pin is Incorrect!");
      return;
    }

    // update the balance
    const totalNewAvailableBalance = amount + availableBalance;

    setInnerText(totalNewAvailableBalance);
  });
//   cashout money feature
document
  .getElementById("withdraw-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = getInputValueNumber("withdraw-amount");
    const availableBalance = getInnerText("available-balance");

    // check authentification
    const accountNumber = document.getElementById("agent-number").value;
    if (accountNumber.length < 11) {
      alert("Please provide the valid account number");
      return;
    }
    const pin = parseInt(document.getElementById("cash-pin").value);
    if (pin != validPin) {
      alert("Pin is Incorrect!");
      return;
    }

    // update the balance
    const totalNewAvailableBalance = availableBalance - amount;

    setInnerText(totalNewAvailableBalance);
  });

//   toggoling features

document.getElementById("add-money").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
  });
