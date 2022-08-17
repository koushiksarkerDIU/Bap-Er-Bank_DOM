// step 1 : Add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step 2 : get the email address inside the email input
    //  always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step 3 : GET PASSSWORD
    // 3.a : set id on html element
    // 3.b : get the Element
    // 3.c :get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DANGER : Do not verify email & password on the client side
    // step 4 : verify email & password
    if (email == 'koushik@gmail.com' && password == 'secret') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Invalid email or password')
    }
})

