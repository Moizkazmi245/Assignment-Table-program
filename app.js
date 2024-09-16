function generateTable() {
    const number = document.getElementById('number').value;
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = "";

    if (number) {
        let tableHTML = ""; 

        for (let i = 1; i <= 10; i++) {
            tableHTML += number + " x " + i + " = " + (number * i) + "<br>";  
        }

        tableContainer.innerHTML = tableHTML;  
    } else {
        tableContainer.innerHTML = "<p>Please enter a valid number</p>";
    }
}