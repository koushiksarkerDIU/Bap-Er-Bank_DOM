// step 1 : add event handler to the deposite button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2 : get the deposite amount from the deposite input field
    // for input field use .value to the value inside the input field
    const depositeField = document.getElementById('deposite-field');
    const newDepositAmountString = depositeField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // clear the deposite field
    depositeField.value = '';

    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid number');
        return;
    }
    // step 3 : get the current deposite total
    // for non-input use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 4 : add numbers to set the total deposit
    const carrentDepositeTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = carrentDepositeTotal;

    // step 5 : get balance carrent total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step 6 : calculate current total balance
    const carrentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = carrentBalanceTotal;




})