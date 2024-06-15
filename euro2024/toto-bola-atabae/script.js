document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById("standingsTable").getElementsByTagName("tbody")[0];

    function sortTable() {
        const rows = Array.from(table.rows);

        rows.sort((a, b) => {
            const pointsA = parseInt(a.cells[2].innerText);
            const pointsB = parseInt(b.cells[2].innerText);
            return pointsB - pointsA;
        });

        rows.forEach((row, index) => {
            table.appendChild(row);
            row.cells[0].innerText = index + 1;
        });
    }

    table.addEventListener("input", function(event) {
        if (event.target.cellIndex === 2) {
            sortTable();
        }
    });

    sortTable();
});
