function convertTemperature() {
    const numInput = document.getElementById("num");
    const select = document.getElementById("select");
    const result = document.getElementById("result");

    const temperature = parseFloat(numInput.value);
    const unit = select.value;

    if (unit === "Celsius") {
        const fahrenheit = (temperature * 9 / 5) + 32;
        result.textContent = `${temperature} Celsius is equal to ${fahrenheit} Fahrenheit.`;
    } else if (unit === "Fahrenheit") {
        const celsius = (temperature - 32) * 5 / 9;
        result.textContent = `${temperature} Fahrenheit is equal to ${celsius} Celsius.`;
    }
}

// Attach the convertTemperature function to the button click event
const convertButton = document.getElementById("convertButton");
convertButton.addEventListener("click", convertTemperature);