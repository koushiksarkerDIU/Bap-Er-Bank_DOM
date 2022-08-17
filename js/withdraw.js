/* 
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw field
2.5. also make sure to convert the input into a number by using parseFloat
3. get previous withdraw total
4. calculate total withdraw amount
4.5. set total withdraw amount
5.  get the previous total
6. calculate new balance total
7. clear the withdraw field
*/



// step 1 :
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step 2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    const newWithdrawField = parseFloat(newWithdrawFieldString);

    // step 7:
    withdrawField.value = ''
    if (isNaN(newWithdrawField)) {
        alert('Please provide a valid number')
        return;
    }

    // step 3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdraeTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdraeTotalString);

    // step 5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    if (newWithdrawField > previousBalanceTotal) {
        alert('Bap er bank e eto taka nai');
        return;
    }
    // step 4:
    const carrentWithdrawTotal = previousWithdrawTotal + newWithdrawField;
    withdrawTotalElement.innerText = carrentWithdrawTotal;

    // step 6:
    const carrentBalanceTotal = previousBalanceTotal - newWithdrawField;
    balanceTotalElement.innerText = carrentBalanceTotal;

})