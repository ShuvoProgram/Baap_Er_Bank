// step-1: add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function(){
    // step-2: get the deposit amount from the deposit input field
    // For input field use .value to the the value inside the input field
    const depositField = document.getElementById("deposit-field");
    const newDepositInputString = depositField.value;
    const newDepositInput = parseFloat(newDepositInputString);
    // step-7: clear the deposit field
    depositField.value = '';
    if(isNaN(newDepositInput) || Math.sign(newDepositInput) === -1 ){
        alert("Please Enter a valid Number");
        return;
    }
    // step-3: get the current deposit total
    // for non-input(element other than input, textarea) use innerText to get the text
    const displayDeposit = document.getElementById("deposit-display");
    const previousDepositTotalString = displayDeposit.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step-4: add numbers to set the total deposit
    const currentDepositTotal = newDepositInput + previousDepositTotal;
    // set the deposit total
    displayDeposit.innerText = currentDepositTotal;
    // step-5: get ballance current total
    const balance = document.getElementById("total-amount");
    const balanceValueString = balance.innerText;
    const previousBalanceTotal = parseFloat(balanceValueString);
    // step-6: calculate current total balance
    const currentBalance = previousBalanceTotal + newDepositInput;
    // set the balance total
    balance.innerText = currentBalance;

})