const conversionRates = {
    m: { m: 1, km: 0.001, cm: 100, mm: 1000, in: 39.37, ft: 3.2808, yd: 1.0936, mi: 0.00062137 },
    km: { m: 1000, km: 1, cm: 100000, mm: 1e6, in: 39370.1, ft: 3280.84, yd: 1093.61, mi: 0.621371 },
    cm: { m: 0.01, km: 1e-5, cm: 1, mm: 10, in: 0.3937, ft: 0.032808, yd: 0.010936, mi: 6.2137e-6 },
    mm: { m: 0.001, km: 1e-6, cm: 0.1, mm: 1, in: 0.03937, ft: 0.0032808, yd: 0.0010936, mi: 6.2137e-7 },
    
    in: { in: 1, ft: 1/12, yd: 1/36, mi: 1/63360, m: 0.0254, km: 2.54e-5, cm: 2.54, mm: 25.4 },
    ft: { in: 12, ft: 1, yd: 1/3, mi: 1/5280, m: 0.3048, km: 0.0003048, cm: 30.48, mm: 304.8 },
    yd: { in: 36, ft: 3, yd: 1, mi: 1/1760, m: 0.9144, km: 0.0009144, cm: 91.44, mm: 914.4 },
    mi: { in: 63360, ft: 5280, yd: 1760, mi: 1, m: 1609.34, km: 1.60934, cm: 160934, mm: 1.609e6 },
};

const convert = () => {
    const input = parseFloat(document.getElementById('inputValue').value); 
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const result = document.getElementById('result');

    if (isNaN(input)) {
        result.textContent = 'Please enter a valid number.';
        return;
    }
    const converted = input * conversionRates[fromUnit][toUnit];
    const formattedResult = Number.isInteger(converted) ? converted : converted.toFixed(2);
    result.textContent = `Converted: ${formattedResult} ${toUnit}`;
    result.style.color = "";
    animateCar(formattedResult);
};

function animateCar(distance) {
    let car = document.getElementById('car');
    let converter = document.querySelector('.converter');
    let maxCarTravel = converter.clientWidth - car.clientWidth - 130;
    let maxDistance = 1000;
    let carDistance = Math.min((distance / maxDistance) * maxCarTravel, maxCarTravel); 
    car.style.left = `${carDistance}px`;
}
const button = document.getElementById('convertButton');
button.addEventListener('click', convert);
