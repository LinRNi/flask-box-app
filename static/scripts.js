document.addEventListener('DOMContentLoaded', () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(400, 400);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const controls = new THREE.OrbitControls(camera, renderer.domElement);

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    animate();

    const numbers = document.querySelectorAll('.number');
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            // 根據按鈕點擊生成新的正方體或更新現有正方體的位置
            const numberValue = number.innerText;
            // 假設每個按鈕對應特定位置，根據需要進行處理
            console.log(`Number ${numberValue} clicked`);
        });
    });

    document.querySelector('.control:nth-child(11)').addEventListener('click', () => {
        console.log('Save image clicked');
    });
});
