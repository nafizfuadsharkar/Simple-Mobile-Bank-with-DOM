const validPin = 1234;
const transactionData = [];
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
function setInnerText(value) {
  const availableBalanceElement = (document.getElementById(
    "available-balance"
  ).innerText = value);
  return availableBalanceElement;
}
// function to handle toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
// function to handle button design
function handleButton(id) {
  const fomBtns = document.getElementsByClassName("form-btn");
  for (const btn of fomBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// add money features
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const bank = getInputValue("bank");
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

    const data = {
      name: "Add Money",
      date: new Date().toLocaleDateString(),
    };
    transactionData.push(data);
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

    // amount validation
    if (amount <= 0 || amount > availableBalance) {
      alert("Invalid Amount");
      return;
    }

    // update the balance
    const totalNewAvailableBalance = availableBalance - amount;

    setInnerText(totalNewAvailableBalance);

    const data = {
      name: "Cash Out",
      date: new Date().toLocaleDateString(),
    };
    transactionData.push(data);
  });

// transaction list
document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    transactionContainer.innerText = "";
    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `
      <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
          <div class="flex items-center">
            <div class="bg-[#f4f5f7]  p-3 rounded-full">
              <img src="./assets/wallet1.png" class="mx-auto" alt="">
            </div>
            <div class="ml-3">
              <h1>${data.name}</h1>
              <p>${data.date}</p>
            </div>
          </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    `;
      transactionContainer.appendChild(div);
    }
  });

//   toggoling features

document.getElementById("add-money").addEventListener("click", function () {
  // const forms = document.getElementsByClassName("form");
  // for (const form of forms) {
  //   form.style.display = "none";
  // }
  // document.getElementById("add-money-parent").style.display = "block";
  handleToggle("add-money-parent");
  handleButton("add-money");
});
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    //   const forms = document.getElementsByClassName("form");
    // for (const form of forms) {
    //   form.style.display = "none";
    // }
    // document.getElementById("cash-out-parent").style.display = "block";
    handleToggle("cash-out-parent");
    handleButton("cash-out-button");
  });

document
  .getElementById("transfer-button")
  .addEventListener("click", function (event) {
    // const forms = document.getElementsByClassName("form");
    // for (const form of forms) {
    //   form.style.display = "none";
    // }
    // document.getElementById("transfer-money-parent").style.display = "block";
    handleToggle("transfer-money-parent");
    handleButton("transfer-button");
  });
document
  .getElementById("bonus-button")
  .addEventListener("click", function (event) {
    // const forms = document.getElementsByClassName("form");
    // for (const form of forms) {
    //   form.style.display = "none";
    // }
    // document.getElementById("get-bonus-parent").style.display = "block";
    handleToggle("get-bonus-parent");
    handleButton("bonus-button");
  });
document
  .getElementById("pay-bill-button")
  .addEventListener("click", function (event) {
    handleToggle("pay-bill-parent");
    handleButton("pay-bill-button");
  });
document
  .getElementById("transaction-button")
  .addEventListener("click", function (event) {
    handleToggle("transaction-parent");
    handleButton("transaction-button");
  });
