document.addEventListener('DOMContentLoaded', () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    const gridHelper = new THREE.GridHelper(9, 3, 0x000000, 0x000000);
    gridHelper.position.set(0, -1, 0);
    scene.add(gridHelper);

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    camera.position.z = 5;

    const controls = new THREE.OrbitControls(camera, renderer.domElement);

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    animate();

    const numbers = document.querySelectorAll('.number');
    numbers.forEach((number, index) => {
        number.addEventListener('click', () => {
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff });
            const cube = new THREE.Mesh(geometry, material);
            const position = getPositionByIndex(index + 1);
            cube.position.set(position.x, position.y, position.z);
            scene.add(cube);
        });
    });

    document.querySelector('.control:nth-child(11)').addEventListener('click', () => {
        console.log('Save image clicked');
    });

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    function getPositionByIndex(index) {
        const positions = [
            { x: -1, y: 0, z: 1 },
            { x: 0, y: 0, z: 1 },
            { x: 1, y: 0, z: 1 },
            { x: -1, y: 0, z: 0 },
            { x: 0, y: 0, z: 0 },
            { x: 1, y: 0, z: 0 },
            { x: -1, y: 0, z: -1 },
            { x: 0, y: 0, z: -1 },
            { x: 1, y: 0, z: -1 }
        ];
        return positions[index - 1];
    }
});
