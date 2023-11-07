// step no 1 : add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function(){



    // step no 2: get the deposit amount form the deposit input field
    //For input field use .value to the value inside the input field.
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value ;
    // console.log(typeof newDepositAmountString); // type check. 
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(typeof newDepositAmount); //type check 


    //step 7: diposite value null or clear
    depositField.value = '';


    if(isNaN(newDepositAmount)){
        alert('Tomar Tk Tmi Rakho. Joma Hoyni');
        return;
    }
    
    

  



    //step 3: get the current deposit total.
    //for non-input(element other than input, textarea) use innnerText to get the text.
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText; //input hole value... text hole innerText. 
    // console.log(typeof previousDepositTotalString); // type check
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(typeof previousDepositTotal); // type check



    //Step 4: Add number to set the total deposit.
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;


    //Step 5: get ballance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);




    //step 6: calculate current total balance.
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;















})