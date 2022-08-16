/* 
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2-5. also make sure to convert the input into a number by using parseFloat
3. Get previous withdraw total
4. calculate total withdraw amount 
4-5. set total withdraw amount
5. get the previous balance total
6. calculate new balance total
6-5: set the new balance total
7. clear the input field
*/
// step-1
document.getElementById("btn-withdraw").addEventListener("click", function(){
    // step-2:
    const withdrawField = document.getElementById("withdraw-field");
    const withdrawString = withdrawField.value;
    const newWithdraw = parseFloat(withdrawString);
    // step-7
    withdrawField.value = '';
    if(isNaN(newWithdraw) || Math.sign(newWithdraw) === -1){
        alert("Please Enter a valid Number");
        return;
    }
    // step-3
    const displayWithdrawAmount = document.getElementById("withdraw-display");
    const previousWithdrawAmountString = displayWithdrawAmount.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);
    // step-5
    const balance = document.getElementById("total-amount");
    const balanceValueString = balance.innerText;
    const previousBalance = parseFloat(balanceValueString);

    if (newWithdraw > previousBalance) {
        alert("insufficient Balance");
        return;
    }
    // step-4
    const currentWithdrawBalance = previousWithdrawAmount + newWithdraw;
    displayWithdrawAmount.innerText = currentWithdrawBalance;
    // step-6
    const currentBalanceTotal = previousBalance - newWithdraw;
    balance.innerText = currentBalanceTotal;

})