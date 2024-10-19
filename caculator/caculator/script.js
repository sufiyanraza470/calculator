// Get all the buttons and the input display
const buttons = document.querySelectorAll('button');
const input = document.getElementById('input');

let inputValue = ''; // This will hold the current input value

// Add event listeners to all the buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;

        // Clear everything when "AC" is pressed
        if (buttonText === 'AC') {
            inputValue = '';
            input.placeholder = '0';
        }
        // If "=" is pressed, perform the calculation
        else if (buttonText === '=') {
            try {
                // Evaluate the expression and show result
                inputValue = eval(inputValue);
                input.placeholder = inputValue;
            } catch (error) {
                // If an error occurs (invalid input), show "Error"
                input.placeholder = 'Error';
                inputValue = '';
            }
        }
        // Append numbers and operators to the input value
        else {
            // Prevent multiple operators (e.g., "++", "--")
            const lastChar = inputValue.slice(-1);
            if (['+', '-', '*', '/'].includes(buttonText) && ['+', '-', '*', '/'].includes(lastChar)) {
                return; // Do nothing if two operators are pressed in a row
            }

            // Handle percentage
            if (buttonText === '%') {
                inputValue = (parseFloat(inputValue) / 100).toString();
                input.placeholder = inputValue;
                return;
            }

            inputValue += buttonText;
            input.placeholder = inputValue;
        }
    });
});