function convert() {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const conversionType = document.getElementById("conversionType").value;
    let convertedTemperature;

    switch (conversionType) {
        case "celsiusToFahrenheit":
            convertedTemperature = (inputTemperature * 9/5) + 32;
            break;
        case "fahrenheitToCelsius":
            convertedTemperature = (inputTemperature - 32) * 5/9;
            break;
        case "celsiusToKelvin":
            convertedTemperature = inputTemperature + 273.15;
            break;
        case "kelvinToCelsius":
            convertedTemperature = inputTemperature - 273.15;
            break;
        default:
            convertedTemperature = inputTemperature;
    }

    document.getElementById("convertedTemperature").value = convertedTemperature.toFixed(2);
}
