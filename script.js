const burgerBtn = document.querySelector('.burger')
const barsIco =document.querySelector('.fa-bars')
const xIvo = document.querySelector('.fa-times')
const nav = document.querySelector('nav ul')
const buy = document.querySelector('.buys')
const seeMore = document.querySelectorAll('.seemore')
const username = document.querySelector('#name')
const surName = document.querySelector('#surname')
const mail = document.querySelector('#mail')
const pass = document.querySelector('#password')
const date = document.querySelector('#date')
const statuteCheckbox = document.getElementById('statute');
const regulationText = document.querySelector('.labelstatute');
const sendBtn = document.querySelector('.send')
const popup = document.querySelector('.popup')
const amountList = document.querySelectorAll('.number')


const handelNav = () => {
  nav.classList.toggle('active')
  burgerBtn.classList.toggle('active')
  xIvo.classList.toggle('hide')
  barsIco.classList.toggle('hide')
}


function bigButton() {
  this.classList.add('big')
}
function normalButton() {
  this.classList.remove('big')
}

const showMistake = el => {
  el.classList.add('mistake');
};

const clearMistake = el => {
  el.classList.remove('mistake');
};

const checkAmount = el => {
  const value = parseInt(el.value);
  if (value > 0 && !isNaN(value)) {
    clearMistake(el);
  } else {
    showMistake(el);
  }
}

const showError = (input, msg) => {

const formBox = input.parentElement;
const errorMsg = formBox.querySelector('.error-text');

formBox.classList.add('error');
errorMsg.textContent= msg;}

const clearError = input => {
  const formBox = input.parentElement;
  formBox.classList.remove('error');
}

const checkForm = input => {
input.forEach(el => {
  if(el.value === '') {
    showError (el, el.placeholder)
  } else {
    clearError(el)
  }
});}; 

const checkLength = (input, min ) => {
if(input.value.length < min) {
  showError(input, `Musi składać się z min. ${min} znaków`)

}}

const checkMail = mail => {
  
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(mail.value)) 
  { clearError(mail)
  } else
  (showError(mail, `E-mail jest niepoprawny`))}

const checkPass = pass => {
  const letters = /[a-z]/i;
  const numbers = /[0-9]/;
  const special = /[!@#$%^&*()]/;
  const minValue = 9;
  
  if (
    pass.value.length >= minValue &&
    letters.test(pass.value) &&
    numbers.test(pass.value) &&
    special.test(pass.value)
  ) {
    clearError(pass);
    
  } else {
    showError(pass, `Hasło musi zawierać 9 znaków, w tym 1 znak specjalny i 1 cyfrę`);}};

const changeStatute = () => {
  if(statuteCheckbox.checked) {
    clearError(statuteCheckbox);
    
  } else {
showError(statuteCheckbox);
  }
}
const changeRegulationText = () => {
  if (!statuteCheckbox.checked) {
    regulationText.style.color = 'red';
  } else {
    regulationText.style.color = ''; 
}}

const checkErrors = () => {
  const allInputs = document.querySelectorAll('.form-box');
  let errorCount = 0;

  allInputs.forEach(el => {
    if(el.classList.contains('error')){
      errorCount++
    }})

  if(errorCount === 0 && statuteCheckbox.checked) {
    popup.classList.add('show-popup')
  }}
  

burgerBtn.addEventListener('click', handelNav);

document.addEventListener('click', event => {
  amountList.forEach(amount => {
    if (!amount.contains(event.target)) {
      checkAmount(amount);
    }
  });
});

for (const element of seeMore) {
  element.addEventListener('mouseover', bigButton);
  element.addEventListener('mouseout', normalButton);
}
sendBtn.addEventListener('click', e => {
  e.preventDefault();
  checkForm([username, surName, mail, pass, date ]);
  checkLength(username,3);
  checkLength(surName,3);
  checkLength(pass,9);
  checkMail(mail);
  checkPass(pass);
  checkErrors();
  changeRegulationText();
  changeStatute(statuteCheckbox);
});

