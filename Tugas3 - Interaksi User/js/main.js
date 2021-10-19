let scene, camera, renderer;
let Point_benar;
let Point_Salah;
let Point_Now;
let click = [];
let comp_color = [];
    
let createObject = function() 
{
    let randomPosition = function(from, to) 
    {
        let x = Math.random() * (to - from);
        return x + from;
    }
    let geoSphere = new THREE.SphereGeometry(Math.random() * 30 + 10, 20, 20);
    let colorsArray = [
        0x63b598, 0xce7d78, 0xea9e70, 0xf0ffc0, 0x2986cc, 0x6a329f
    ];

    let colour = colorsArray[Math.floor(randomPosition(0, 6))]
    let emissive = colour + 10;
    
    let material = new THREE.MeshPhongMaterial({color: colour});
    let sphereTab = new THREE.Mesh(geoSphere, material);
    
    sphereTab.position.x = randomPosition(-500, 500);
    sphereTab.position.y = randomPosition(-500, 500);
    sphereTab.position.z = randomPosition(-500, 500);
    scene.add(sphereTab);
};

Point_benar = 10;
Point_Salah = -10;
Point_Now = 0;

let Point_Total = document.getElementById("poin");
let onDocumentClick = function(e) 
{
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;
    mouse.z = 0.5;

    rayCast.setFromCamera(mouse, camera);

    let intersects = rayCast.intersectObjects(scene.children, false);

    if(intersects.length == 0){
        return;
    } 
    else 
    {   
        click.push(intersects);
        console.log(intersects);
        console.log(comp_color);
        console.log(click);
        comp_color.push(intersects[0].object.material.color.getHex());
        if(click.length > 1 ) 
        {
            if(click[0][0].object.uuid === click[1][0].object.uuid){
                click[0][0].object.material.emissive.setHex(comp_color[0]);
            } 
            else if(comp_color[0] == (comp_color[1])) {
                
                click.forEach(object => {
                    scene.remove(object[0].object);
                    renderer.renderLists.dispose();
                });
                Point_Now += Point_benar;
                Point_Total.innerHTML = Point_Now;
            }
            else 
            {
                Point_Now += Point_Salah;
                Point_Total.innerHTML = Point_Now;
            }
            click = [];
            comp_color = [];
        }
    } 
};

// set up the environment - 
// initiallize scene, camera, objects and renderer
let init = function() {
    // 1. create scene
    // ...
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFFFFFF);
    
    // 2. create camera   
    // ...
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1000;
    
    // 3. create light          
    // ...
    var light = new THREE.AmbientLight(0xFFFFFF)
    light.position.set(0, 0, 0);
    scene.add(light);

    // var light = new THREE.AmbientLight(0xFFFFFF, 0.1)
    // light.position.set(0, 0, 0);
    // scene.add(light);

    // Create object more than one, with loop
    for(let i = 1; i <= 100; i++){
        createObject();
    }
            
    // 4. create the renderer     
    // ...
    raycaster = new THREE.Raycaster();
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.sortObjects = false;
    renderer.setClearColor(0xFFFFFF, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer = new THREE.WebGLRenderer();   
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);
    document.addEventListener("click", onDocumentClick, false);  

    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true;

    rayCast = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    mouse.x = -1;
    mouse.y = -1;
    
};

function onWindowResize() 
{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}

function onmousemove(event) 
{
    mouse.x = -10000000;
    mouse.y = -10000000;
}

// main animation loop - calls 50-60 in a second.
let mainLoop = function() 
{
    renderer.render(scene, camera);
    controls.update();        
    window.requestAnimationFrame(mainLoop);
};

init();
mainLoop();