function insert_Row() {
    // Get reference to the table by its ID
    var table = document.getElementById("sampleTable");

    // Create a new row
    var newRow = table.insertRow(0); // Insert at the top (index 0)

    // Create and insert the left cell
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = "New Cell1";

    // Create and insert the right cell
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = "New Cell2";
}
