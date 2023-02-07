const passwordLengthInput = document.querySelector('#password-length');
const includeNumbersInput = document.querySelector('#include-numbers');
const includeSymbolsInput = document.querySelector('#include-symbols');
const includeLettersInput = document.querySelector('#include-letters');
const passwordDisplay = document.querySelector('#password');
const form = document.querySelector('form');

const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:\'",.<>/?\\';

form.addEventListener('submit', e => {
  e.preventDefault();

  let password = '';
  let passwordPool = '';
  
  if (includeLettersInput.checked) {
    passwordPool += letters;
  }
  
  if (includeNumbersInput.checked) {
    passwordPool += numbers;
  }
  
  if (includeSymbolsInput.checked) {
    passwordPool += symbols;
  }
  
  for (let i = 0; i < passwordLengthInput.value; i++) {
    password += passwordPool.charAt(Math.floor(Math.random() * passwordPool.length));
  }
  
  passwordDisplay.textContent = password;
});


const copyToClipboardButton = document.querySelector('#copy-to-clipboard');

copyToClipboardButton.addEventListener('click', e => {
  const password = passwordDisplay.textContent;
  const tempInput = document.createElement('input');
  tempInput.value = password;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
});
