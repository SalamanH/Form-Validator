const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

// Message Container Change

function messageContainerChange(msg, clr)
{

    message.textContent = msg;
    message.style.color = clr;
    messageContainer.style.borderColor = clr;
}

function validateForm()
{
    // Using Constraint API
    isValid = form.checkValidity();
    // Style main message for an Error
   if(!isValid)
   {
    messageContainerChange('Please fill out all fields.', 'red');
    return;
   }

    //    Check to see if password matches
    if(password1El.value === password2El.value)
    {
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else
    {
        passwordsMatch = false;
        
        messageContainerChange('Make Sure Passwords Match', 'red');
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    // If form is valid and passwords match
    if (isValid && passwordsMatch)
    {
        messageContainerChange('Successfully Registered!', 'green');
    }
}

function storeFormData()
{
    const user =
    {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };

    // Do Something with user data
    console.log(user);
}
function processFormData(e)
{
    e.preventDefault();
    // Validate Form
    validateForm();
    // submit data if valid
    if (isValid && passwordsMatch)
    {
        storeFormData();
    } 
}


// Event Listeners
form.addEventListener('submit', processFormData);