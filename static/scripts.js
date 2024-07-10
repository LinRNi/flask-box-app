document.querySelectorAll('.number-button').forEach(button => {
    button.addEventListener('click', function() {
        const number = this.getAttribute('data-number');
        const cell = document.querySelector(`.cell[data-cell="${number}"]`);
        if (!cell.querySelector('.cube')) {
            const cube = document.createElement('div');
            cube.classList.add('cube');
            cell.appendChild(cube);
        }
    });
});
