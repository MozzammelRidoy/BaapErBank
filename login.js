    //Step-1: add click event handler with the submit button

    document.getElementById('btn-submit').addEventListener('click', function(){
    //Step-2: get the email adress inside the emain input field. 
    //always remember to use .value to get text from and  input field.
    const emainField = document.getElementById('user-email');
    const email = emainField.value;

    //Step-3 get Password. 
    //3.a: set id on the html element. 
    //3.b: Get the element. 
    //3.c: get the value form text from and input field.

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email , password)


    //DANGER:  Do not Verify email or password on the client side. 

    //Step-4: verify email and password.

    if(email === 'bank@mail.com' && password === 'abc123'){
       window.location.href = 'bank.html';
    }
    else{
       alert('Tomar Baap er Bank Email Password To tumi janar Kotha.')
    }


})