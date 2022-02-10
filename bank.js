const depositButton = document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // !update Deposit Total
    const depositTotal = document.getElementById("deposit-total");

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    const balanceTotal = document.getElementById("balance-total");

    //!Balance Total
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    //! Clear input
    depositInput.value = "";
  });

const withdrawButton = document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-amount");
    const withdrawAmount = withdrawInput.value;
    console.log(withdrawAmount);
    const withdrawTotal = document.getElementById("withdraw-total");
    withdrawTotal.innerText = `$${withdrawAmount}`;
  });
