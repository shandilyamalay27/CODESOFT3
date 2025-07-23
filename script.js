const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        
        if (buttonText === 'AC') {
            display.value = '';
        } else if (buttonText === '⌫') {
            display.value = display.value.toString().slice(0, -1);
        } else if (buttonText === '=') {
            try {
                const expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
                display.value = eval(expression);
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += buttonText;
        }
    });
});
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (/[0-9\.\+\-\*\/]/.test(key)) {
        display.value += key;
    } else if (key === 'Enter') {
        try {
            const expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
            display.value = eval(expression);
        } catch (error) {
            display.value = 'Error';
        }
    } else if (key === 'Backspace') {
        display.value = display.value.toString().slice(0, -1);
    } else if (key === 'Escape') {
        display.value = '';
    }
});