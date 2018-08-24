let num = null;
let p = false;
let lop = null;
const input = document.getElementById('num-input');

const backspaceButton = document.getElementById('backspace');
backspaceButton.onclick = () => {
    if (input.value.length === 1) {
        input.value = '0';
    } else {
        input.value = input.value.slice(0, -1);
        num = 0;
    }
};

const enterNumber = (n) => {
    if (input.value === "0") {
        input.value = n;
    } else {
        if (p) {
            num = parseFloat(input.value);
            input.value = n;
            p = false
        } else {
            input.value = input.value + n;
        }
    }
};

const dispatchOperation = (operation) => {
    if (lop) {
        if (!p) {
            num = processOperation(lop, num, parseFloat(input.value));
            input.value = num;
        }
    }
    p = true;
    lop = operation;
};


const numButtons = document.getElementsByClassName('num-button');
for (let i = 0; i < numButtons.length; i++) {
    const button = numButtons[i];
    const num = button.textContent;
    button.onclick = () => {
        enterNumber(num)
    }
}


const tochka = document.getElementById('tochka');
tochka.onclick = () => {
    const n = input.value.length;
    const p = input.value.length;
    for (let i = 0; i < input.value.length; i++) {
        if (input.value[i] === '.') {
            return
        }
    }
    input.value('.')
};


const dokButtons = document.getElementsByClassName('dok-button');
[].forEach.call(dokButtons, (button) => {
    button.onclick = () => {
        dispatchOperation(button.textContent);
    }
});


const processOperation = (operation, argument1, argument2) => {
    switch (operation) {
        case '+':
            return argument1 + argument2;
        case '-':
            return argument1 - argument2;
        case '*':
            return argument1 * argument2;
        case '/':
            return argument1 / argument2;
    }
};







