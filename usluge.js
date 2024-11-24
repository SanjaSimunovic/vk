var books = [
    { name: "Jadi mladoga Vertera", author: "Johan Volfgang Gete", price: 890 },
    { name: "Ana Karenjina", author: "Lav Nikolajevic Tolstoj", price: 1300 },
    { name: "Mrtve duse", author: "Nikolaj Vasiljevic Gogolj", price: 999 },
    { name: "Evgenije Onjegin", author: "Aleksandar Puskin", price: 699 },
    { name: "Proces", author: "Franc Kafka", price: 749 },
    { name: "Slika Dorijana Greja", author: "Oskar Vajld", price: 899 }
];

var table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "100%";

var headerRow = document.createElement("tr");
["Naziv", "Autor", "Cena"].forEach(function(headerText) {
    var headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerCell.style.border = "1px solid #ddd";
    headerCell.style.padding = "8px";
    headerRow.appendChild(headerCell);
});
table.appendChild(headerRow);

books.forEach(function(book) {
    var row = document.createElement("tr");

    ["name", "author", "price"].forEach(function(prop) {
        var cell = document.createElement("td");
        cell.textContent = book[prop];
        cell.style.border = "1px solid #ddd";
        cell.style.padding = "8px";
        row.appendChild(cell);
    });

    table.appendChild(row);
});

document.body.appendChild(table);