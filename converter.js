function convertTemperature() {
    // Get user input
    let temperatureInput = document.getElementById('temperatureInput').value.trim();
    let conversionType = document.getElementById('conversionType').value;
    
    // Validate input is a number
    if (isNaN(temperatureInput)) {
      alert('Please enter a valid number for temperature.');
      return;
    }
    
    // Convert temperature based on selected type
    let temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let unit;
    
    switch(conversionType) {
      case 'celsius':
        convertedTemperature = (temperature - 32) * (5 / 9);
        unit = 'Celsius';
        break;
      case 'fahrenheit':
        convertedTemperature = (temperature * 9 / 5) + 32;
        unit = 'Fahrenheit';
        break;
      case 'kelvin':
        convertedTemperature = temperature + 273.15;
        unit = 'Kelvin';
        break;
      default:
        break;
    }
    
    // Display converted temperature
    document.getElementById('convertedTemperature').textContent = convertedTemperature.toFixed(2) + ' ' + unit;
  }
  