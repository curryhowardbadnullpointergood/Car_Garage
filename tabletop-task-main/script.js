document.addEventListener('DOMContentLoaded', function() {
    const getInfoButton = document.getElementById('getInfoButton');
    const registrationNumberInput = document.getElementById('registrationNumber');
    const resultDiv = document.getElementById('result');

    getInfoButton.addEventListener('click', getVehicleInfo);

    async function getVehicleInfo() {
        const registrationNumber = registrationNumberInput.value.trim();

        if (!registrationNumber) {
            resultDiv.textContent = "Please enter a registration number.";
            return;
        }

        const apiUrl = 'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles';
        const apiKey = 'mG1zaRgSH21lGk5mHwqgV6Y4oGkm8UpX5VNbfHoN'; // **SECURITY WARNING: Do not hardcode API keys in production!**

        const data = JSON.stringify({ registrationNumber: registrationNumber });

        const config = {
            method: 'post',
            headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json',
            },
            body: data,
        };

        resultDiv.textContent = "Loading..."; // Indicate loading

        try {
            const response = await fetch(apiUrl, config);

            if (!response.ok) {
                const message = `Error: ${response.status} - ${response.statusText}`;
                resultDiv.textContent = message;
                return;
            }

            const responseData = await response.json();
            resultDiv.textContent = JSON.stringify(responseData, null, 2); // Display formatted JSON

        } catch (error) {
            console.error("Error fetching data:", error);
            resultDiv.textContent = "An error occurred while fetching data.";
        }
    }
});