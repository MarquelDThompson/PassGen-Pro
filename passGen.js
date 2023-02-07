// Select the password length input field, include number, symbol, and letter inputs, password display field, and form
const passwordLengthInput = document.querySelector('#password-length');
const includeNumbersInput = document.querySelector('#include-numbers');
const includeSymbolsInput = document.querySelector('#include-symbols');
const includeLettersInput = document.querySelector('#include-letters');
const passwordDisplay = document.querySelector('#password');
const form = document.querySelector('form');

// Define the letters, numbers, and symbols that can be used for the password
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:\'",.<>/?\\';

// Add event listener to the form to generate the password on submit
form.addEventListener('submit', e => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Initialize an empty password and password pool string
  let password = '';
  let passwordPool = '';
  
  // If the included letters input is checked, add letters to the password pool
  if (includeLettersInput.checked) {
    passwordPool += letters;
  }
  
  // If the included numbers input is checked, add numbers to the password pool
  if (includeNumbersInput.checked) {
    passwordPool += numbers;
  }
  
  // If the included symbols input is checked, add symbols to the password pool
  if (includeSymbolsInput.checked) {
    passwordPool += symbols;
  }
  
  // Loop over the length of the password as specified by the password length input
  for (let i = 0; i < passwordLengthInput.value; i++) {
    // Add a random character from the password pool to the password
    password += passwordPool.charAt(Math.floor(Math.random() * passwordPool.length));
  }
  
  // Set the text content of the password display to the generated password
  passwordDisplay.textContent = password;
});

// Select the copy to clipboard button
const copyToClipboardButton = document.querySelector('#copy-to-clipboard');

// Add event listener to the copy to clipboard button to copy the password to the clipboard
copyToClipboardButton.addEventListener('click', e => {
  // Get the text content of the password display
  const password = passwordDisplay.textContent;
  
  // Create a temporary input field
  const tempInput = document.createElement('input');
  
  // Set the value of the temporary input field to the password
  tempInput.value = password;
  
  // Add the temporary input field to the body
  document.body.appendChild(tempInput);
  
  // Select the text in the temporary input field
  tempInput.select();
  
  // Copy the selected text to the clipboard
  document.execCommand('copy');
  
  // Remove the temporary input field from the body
  document.body.removeChild(tempInput);
});
