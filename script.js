// login button er kaj
document
  .getElementById("loginButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // eta dile form ta bar bar reload nibena
    const mobileNumber = 12345678910;
    const pinNumber = 1234;
    const mobileNumberValue = document.getElementById("mobile-number").value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById("pin-number").value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    if (
      mobileNumberValueConverted === mobileNumber &&
      pinNumberValueConverted === pinNumber
    ) {
      // onno page e niye jabo
      window.location.href = "./home.html";
    }else{
        alert("Invalid Number or Pin")
    }
  });
