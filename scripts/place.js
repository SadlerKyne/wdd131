document.addEventListener('DOMContentLoaded', function() {
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = "Last Modified: " + document.lastModified;
    }

    const temperatureDisplayElement = document.getElementById('temperature');
    const windSpeedDisplayElement = document.getElementById('windspeed');
    const windChillDisplayElement = document.getElementById('windchill');

    if (windChillDisplayElement) {
        windChillDisplayElement.textContent = "N/A";

        let temperatureValue = NaN;
        if (temperatureDisplayElement && temperatureDisplayElement.textContent) {
            temperatureValue = parseFloat(temperatureDisplayElement.textContent);
        }

        let windSpeedValue = NaN;
        if (windSpeedDisplayElement && windSpeedDisplayElement.textContent) {
            windSpeedValue = parseFloat(windSpeedDisplayElement.textContent);
        }

        function calculateWindChill(tempF, speedMph) {
            return 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speedMph, 0.16)) + (0.4275 * tempF * Math.pow(speedMph, 0.16));
        }

        const tempIsValidNumber = !isNaN(temperatureValue);
        const speedIsValidNumber = !isNaN(windSpeedValue);

        if (tempIsValidNumber && speedIsValidNumber && temperatureValue <= 50 && windSpeedValue > 3) {
            const calculatedWindChill = calculateWindChill(temperatureValue, windSpeedValue);
            windChillDisplayElement.textContent = calculatedWindChill.toFixed(0) + "°F";
        }
    }
});