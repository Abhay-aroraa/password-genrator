const passwordoutput = document.getElementById("pass");
const lengthinput = document.getElementById("Password-length");
const upper = document.getElementById("uppercase");
const lower = document.getElementById("lowercase");
const num = document.getElementById("number");
const symbol = document.getElementById("Include-symbols");
const btn = document.getElementById("id6");

const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getRandomSymbols = () => {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

const passGenerator = () => {
    const length = parseInt(lengthinput.value);
    if (isNaN(length) || length < 8 || length > 32) {
        alert('Please enter a valid password length between 8 and 32 characters.');
        return;
    }

    let password = '';
    const characterFun = [];

    if (lower.checked) {
        characterFun.push(getRandomLower);
    }
    if (upper.checked) {
        characterFun.push(getRandomUpper);
    }
    if (num.checked) {
        characterFun.push(getRandomNumber);
    }
    if (symbol.checked) {
        characterFun.push(getRandomSymbols);
    }
    if (characterFun.length === 0) {
        alert('Please choose at least one type of character.');
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomFun = characterFun[Math.floor(Math.random() * characterFun.length)];
        password += randomFun();
    }

    passwordoutput.textContent = password;
};

btn.addEventListener('click', passGenerator);
