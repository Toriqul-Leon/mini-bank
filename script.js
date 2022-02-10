const submitButton = document
  .getElementById("login-submit")
  .addEventListener("click", function () {
    const mailField = document.getElementById("user-mail");
    const userMail = mailField.value;
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;
    if (userMail == "@gmail" && userPassword == "1234") {
      window.location.href = "bank.html";
    } else {
      console.log("Dur hoo");
    }
  });

