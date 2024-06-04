document.addEventListener('DOMContentLoaded', () => {
    const tableContainer = document.getElementById('tableContainer');

    // Sample data
    const data = [
        { id: 1, name: "John Doe", age: 25, email: "john.doe@example.com", phone: "123-456-7890" },
        { id: 2, name: "Jane Smith", age: 30, email: "jane.smith@example.com", phone: "234-567-8901" },
        { id: 3, name: "Alice Johnson", age: 22, email: "alice.johnson@example.com", phone: "345-678-9012" },
        { id: 4, name: "Bob Brown", age: 28, email: "bob.brown@example.com", phone: "456-789-0123" },
        { id: 5, name: "Charlie Davis", age: 35, email: "charlie.davis@example.com", phone: "567-890-1234" },
        { id: 6, name: "Diana Evans", age: 24, email: "diana.evans@example.com", phone: "678-901-2345" },
        { id: 7, name: "Evan Frank", age: 27, email: "evan.frank@example.com", phone: "789-012-3456" },
        { id: 8, name: "Fiona Garcia", age: 29, email: "fiona.garcia@example.com", phone: "890-123-4567" },
        { id: 9, name: "George Harris", age: 31, email: "george.harris@example.com", phone: "901-234-5678" },
        { id: 10, name: "Hannah Ivers", age: 26, email: "hannah.ivers@example.com", phone: "012-345-6789" }
    ];

    // Create table element
    const table = document.createElement('table');

    // Create table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ["ID", "Name", "Age", "Email", "Phone No"];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement('tbody');

    data.forEach(item => {
        const row = document.createElement('tr');

        Object.values(item).forEach(text => {
            const cell = document.createElement('td');
            cell.textContent = text;
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
});
