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

    document.getElementById("addBox").addEventListener("click", function() {
        const size = 50;
        const x = Math.random() * (canvas.width - size);
        const y = Math.random() * (canvas.height - size);
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        boxes.push({ x, y, size, color });
        drawInitialView();
    });

    document.getElementById("resetView").addEventListener("click", function() {
        boxes = [];
        drawInitialView();
    });

    document.getElementById("saveImage").addEventListener("click", function() {
        const link = document.createElement('a');
        link.download = 'canvas.png';
        link.href = canvas.toDataURL();
        link.click();
    });

    drawInitialView();
});
