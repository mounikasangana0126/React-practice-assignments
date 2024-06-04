function addRow() {
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = id;
    cell2.innerHTML = name;
    cell3.innerHTML = age;
    cell4.innerHTML = email;
    cell5.innerHTML = phone;

    // Clear the form fields after adding the row
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}
