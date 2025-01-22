document.addEventListener('DOMContentLoaded', function() {
    const getInfoButton = document.getElementById('getInfoButton');
    const registrationNumberInput = document.getElementById('registrationNumber');
    const resultDiv = document.getElementById('result');

    getInfoButton.addEventListener('click', async function() {
        const registrationNumber = registrationNumberInput.value.trim();

        if (!registrationNumber) {
            resultDiv.textContent = "Please enter a registration number.";
            return;
        }

        resultDiv.textContent = "Loading...";

        try {
            const response = await fetch('http://localhost:3000/getVehicleInfo', { // Adjust port if needed
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ registrationNumber: registrationNumber })
            });

            if (!response.ok) {
                const message = `Error: ${response.status} - ${response.statusText}`;
                resultDiv.textContent = message;
                return;
            }

            const data = await response.json();
            resultDiv.textContent = JSON.stringify(data, null, 2);

        } catch (error) {
            console.error("Error fetching data:", error);
            resultDiv.textContent = "An error occurred while fetching data.";
        }
    });
});