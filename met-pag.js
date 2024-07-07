let cardNumInput = document.querySelector('#cardNum');
let emailInput = document.querySelector('#email');
let cityInput = document.querySelector('#city');
let stateInput = document.querySelector('#state');
let zipInput = document.querySelector('#zip');
let cvvInput = document.querySelector('#cvv');

cardNumInput.addEventListener('keyup', () => {
    let cNumber = cardNumInput.value;
    cNumber = cNumber.replace(/\s/g, "");

    if (Number(cNumber)) {
        cNumber = cNumber.match(/.{1,4}/g);
        cNumber = cNumber.join(" ");
        cardNumInput.value = cNumber;
    }
});

emailInput.addEventListener('input', () => {
    let email = emailInput.value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailInput.setCustomValidity("Correo electrónico no válido");
    } else {
        emailInput.setCustomValidity("");
    }
});

cityInput.addEventListener('input', () => {
    cityInput.value = cityInput.value.replace(/[^a-zA-Z\s]/g, '');
});

stateInput.addEventListener('input', () => {
    stateInput.value = stateInput.value.replace(/[^a-zA-Z\s]/g, '');
});

zipInput.addEventListener('input', () => {
    zipInput.value = zipInput.value.replace(/[^0-9]/g, '');
    if (zipInput.value.length > 9) {
        zipInput.value = zipInput.value.slice(0, 9);
    }
});

cvvInput.addEventListener('input', () => {
    cvvInput.value = cvvInput.value.replace(/[^0-9]/g, '');
    if (cvvInput.value.length > 3) {
        cvvInput.value = cvvInput.value.slice(0, 3);
    }
});
