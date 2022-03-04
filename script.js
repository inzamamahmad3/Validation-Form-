const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById("email")
const password = document.getElementById("password")
function showError(input, message){
    //Get the parent element of input field is 
   const formControl =  input.parentElement
   formControl.className = 'form-control error'
   const small = formControl.querySelector('small')
   small.innerText = message
}

// Function to update class for success
function showSuccess(input){
    const formControl =  input.parentElement
    formControl.className = 'form-control success'

}



// create event listener for submit

form.addEventListener('submit', function(e){
    e.preventDefault();
    // check user name input is empty
    if(username.value === ''){
        showError(username, 'User Name is Required!')
    }
    else{
        showSuccess(username)
    }

    if(email.value === ''){
        showError(email, 'Email is Required!')
    }
    else{
        showSuccess(email)
    }


    if(password.value === ''){
        showError(password, 'Password is Required!')
    }
    else{
        showSuccess(password)
    }
});
const text = document.querySelector('.submit')
const form = document.querySelector('.form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    text.innerHTML = "Submitted"
    text.style.backgroundColor = 'green'

})
