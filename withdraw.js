//step 1: ceate even handler..
document.getElementById('btn-withdraw').addEventListener('click', function(){


    // step 2: get the withdraw amount from the withdraw input field. 
    const withdrawField = document.getElementById('withraw-field');
    const newWithdrawFieldString = withdrawField.value ;
    const newWitdrawField = parseFloat(newWithdrawFieldString);

     //step 7:
     withdrawField.value = '';

     if(isNaN(newWitdrawField)){
         alert('Tomar Baap er Bank e eto Tk Nai');
         return;
     }
     


    //step 3: 

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);



    //step 5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalSting = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalSting);

    if(newWitdrawField > previousBalanceTotal){
        alert('tomar bafer bank e eto tk nai');
        return
    }
    

    //step 4: 
    const currentWithdrawTotal =  previousWithdrawTotal + newWitdrawField;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    //step 6:
    const currentBalanceTotal = previousBalanceTotal - newWitdrawField;
    balanceTotalElement.innerText = currentBalanceTotal;




})