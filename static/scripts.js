document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("boxCanvas");
    const context = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 600;

    let boxes = [];

    function drawInitialView() {
        context.fillStyle = "#f0f0f0";
        context.fillRect(0, 0, canvas.width, canvas.height);
        drawBoxes();
    }

    function drawBoxes() {
        for (const box of boxes) {
            context.fillStyle = box.color;
            context.fillRect(box.x, box.y, box.size, box.size);
        }
    }

    function updateTable() {
        const table = document.getElementById("boxTable");
        // Clear existing rows
        table.innerHTML = `
            <tr>
                <th>行</th>
                <th>列</th>
            </tr>
        `;
        // Add new rows for each box
        boxes.forEach((box, index) => {
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.innerHTML = Math.floor(box.y / box.size);
            cell2.innerHTML = Math.floor(box.x / box.size);
        });
    }

    document.getElementById("addBox").addEventListener("click", function() {
        const size = 50;
        const x = Math.floor(Math.random() * (canvas.width - size) / size) * size;
        const y = Math.floor(Math.random() * (canvas.height - size) / size) * size;
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        boxes.push({ x, y, size, color });
        drawInitialView();
        updateTable();
    });

    document.getElementById("resetView").addEventListener("click", function() {
        boxes = [];
        drawInitialView();
        updateTable();
    });

    document.getElementById("saveImage").addEventListener("click", function() {
        const link = document.createElement('a');
        link.download = 'canvas.png';
        link.href = canvas.toDataURL();
        link.click();
    });

    drawInitialView();
});
