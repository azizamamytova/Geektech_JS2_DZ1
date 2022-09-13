const phoneInput = document.querySelector('.phoneInput');
const phoneCheck = document.querySelector('.phoneCheck');
const phoneResult = document.querySelector('.phoneResult');

const phoneRegExp =/^0\d{13}$|1\d{13}$/ ;


phoneCheck.addEventListener('click', () => {
    if(phoneRegExp.test(phoneInput.value)) {
        phoneResult.innerText = 'ok';
        phoneResult.style.color = 'green';
    } else {
        phoneResult.innerText= 'not ok';
        phoneResult.style.color = 'red'
    }
});


const block = document.querySelector(".little_block")

