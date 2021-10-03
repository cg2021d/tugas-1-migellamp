function main(){
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext('webgl');


    //Definisi verteks pada segitiga
    /**
     * A (0, 0.5) B(0.5, -0.5) D(-0.5, -0.5)
     */

    var vertices = [
        //Ranting Kanan 
        0.53, 0.17, 1, 0, 1,
        0.5, 0.15 , 0.47, 0.32, 0.35,
        //Ranting Kiri
        0.5, 0.15 , 1.0, 1.0, 1.0, 
        0.5, 0.12 , 1.0, 1.0, 1.0, 
        0.5, 0.09 , 1.0, 1.0, 1.0, 
        0.49, 0.05 , 1.0, 1.0, 1.0, 
        0.49, 0.01 , 1.0, 1.0, 1.0, 
        //Ranting Kanan Bawah
        0.48, -0.04 , 1.0, 1.0, 1.0, 
        0.48, -0.08 , 1.0, 1.0, 1.0,  
        0.48, -0.08 , 1.0, 1.0, 1.0, 
        0.48, -0.04 , 1.0, 1.0, 1.0, 
        //Ranting Kiri Bawah 2
        0.48, -0.13 ,1.0, 1.0, 1.0,  
        0.48, -0.17 , 1.0, 1.0, 1.0,  
        0.47, -0.22 , 1.0, 1.0, 1.0, 
        0.47, -0.25 , 1.0, 1.0, 1.0, 
        //Ranting Kanan Bawah 2
        0.47, -0.25 , 1.0, 1.0, 1.0, 
        //Ranting Kiri Bawah 
        0.48, -0.3 , 0.0, 1.0, 0.0, 
        0.47, -0.34 , 0.0, 1.0, 0.0,
        0.46, -0.37 , 0.0, 1.0, 0.0, 
        0.48, -0.39 , 0.0, 1.0, 0.0,
        0.43, -0.36, 0.0, 1.0, 0.0,
        0.43, -0.36, 0.0, 1.0, 0.0, 
        0.42, -0.33, 0.0, 1.0, 0.0, 
        0.39, -0.31, 0.0, 1.0, 0.0, 
        0.36, -0.26, 0.0, 1.0, 0.0, 
        0.33, -0.24,  0.0, 1.0, 0.0,  
        0.28, -0.16,  0.0, 1.0, 0.0, 
        0.26, -0.11,  0.0, 1.0, 0.0,  
        0.24, -0.07,  0.0, 1.0, 0.0, 
        0.24, -0.04,  0.0, 1.0, 0.0, 
        0.23, 0.01,  0.0, 1.0, 0.0, 
        0.27, 0.18, 0.0, 1.0, 0.0,  
        0.28, 0.22,  0.0, 1.0, 0.0, 
        0.29, 0.24,  0.0, 1.0, 0.0, 
        0.29, 0.28,  0.0, 1.0, 0.0, 
        0.29, 0.27,  0.0, 1.0, 0.0,  
        0.3, 0.3, 0.0, 1.0, 0.0, 
        0.31, 0.32, 0.0, 1.0, 0.0, 
        0.33, 0.34, 0.0, 1.0, 0.0, 
        0.35, 0.37, 0.0, 1.0, 0.0, 
        0.36, 0.36, 0.0, 1.0, 0.0, 
        0.39, 0.35, 0.0, 1.0, 0.0, 
        0.42, 0.34, 0.0, 1.0, 0.0, 
        0.44, 0.32, 0.0, 1.0, 0.0, 
        0.47, 0.31, 0.0, 1.0, 0.0, 
        0.48, 0.29, 0.0, 1.0, 0.0, 
        0.49, 0.26, 0.0, 1.0, 0.0, 
        0.48, 0.24, 0.0, 1.0, 0.0, 
        0.5, 0.26, 0.0, 1.0, 0.0, 
        0.57, 0.32, 0.0, 1.0, 0.0, 
        0.6, 0.32, 0.0, 1.0, 0.0, 
        0.64, 0.32, 0.0, 1.0, 0.0, 
        0.67, 0.31, 0.0, 1.0, 0.0, 
        0.7, 0.3, 0.0, 1.0, 0.0, 
        0.71, 0.29, 0.0, 1.0, 0.0, 
        0.71, 0.25, 0.0, 1.0, 0.0, 
        0.71, 0.23, 0.0, 1.0, 0.0, 
        0.71, 0.2, 0.0, 1.0, 0.0, 
        0.71, 0.15, 0.0, 1.0, 0.0, 
        0.72, 0.13, 0.0, 1.0, 0.0, 
        0.72, 0.1, 0.0, 1.0, 0.0, 
        0.73, 0.09, 0.0, 1.0, 0.0, 
        0.73, 0.06, 0.0, 1.0, 0.0, 
        0.73, 0.05, 0.0, 1.0, 0.0, 
        0.73, 0.03, 0.0, 1.0, 0.0, 
        0.73, 0, 0.0, 1.0, 0.0, 
        0.73, -0.03, 0.0, 1.0, 0.0, 
        0.72, -0.08, 0.0, 1.0, 0.0, 
        0.71, -0.11, 0.0, 1.0, 0.0, 
        0.69, -0.14, 0.0, 1.0, 0.0, 
        0.68, -0.16, 0.0, 1.0, 0.0, 
        0.68, -0.17, 0.0, 1.0, 0.0, 
        0.67, -0.19, 0.0, 1.0, 0.0, 
        0.66, -0.22 , 0.0, 1.0, 0.0, 
        0.63, -0.25 , 0.0, 1.0, 0.0, 
        0.61, -0.27 , 0.0, 1.0, 0.0, 
        0.58, -0.3 , 0.0, 1.0, 0.0, 
        0.56, -0.33 , 0.0, 1.0, 0.0, 
        0.52, -0.36 , 0.0, 1.0, 0.0, 
        0.49, -0.38 , 0.0, 1.0, 0.0, 
        0.48, -0.39 , 0.0, 1.0, 0.0, 
        0.43, -0.36, 0.0, 1.0, 0.0, 
        0.46, -0.37 , 0.0, 1.0, 0.0, 
        0.47, -0.34 , 0.0, 1.0, 0.0, 
        0.48, -0.3 , 0.0, 1.0, 0.0, 
        0.47, -0.25 , 0.0, 1.0, 0.0, 
        0.47, -0.22 , 0.0, 1.0, 0.0, 
        0.48, -0.17 , 0.0, 1.0, 0.0, 
        0.48, -0.13 , 0.0, 1.0, 0.0, 
        0.48, -0.08 , 0.0, 1.0, 0.0, 
        0.48, -0.04 , 0.0, 1.0, 0.0, 
        0.49, 0.01 , 0.0, 1.0, 0.0, 
        0.49, 0.05 , 0.0, 1.0, 0.0, 
        0.5, 0.09 , 0.0, 1.0, 0.0, 
        0.5, 0.12 , 0.0, 1.0, 0.0, 
        0.5, 0.15 , 0.0, 1.0, 0.0, 
        0.5, 0.19 , 0.0, 1.0, 0.0, 
        0.49, 0.22 , 0.0, 1.0, 0.0, 
        0.48, 0.24, 0.0, 1.0, 0.0, 
        0.49, 0.22 , 0.0, 1.0, 0.0,
        0.53, 0.17, 0.0, 1.0, 0.0,


    ];
    
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float dx;
        uniform float dy;
        uniform float dz;
        void main(){
            mat4 translasi = mat4(
                1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                dx, dy, dz, 1.0
            );
            gl_Position = translasi * vec4(aPosition, 0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main(){
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 2*Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

    var speedRaw = 1;
    var speed = 0.0194;
    var dy = 0;
    var uDy = gl.getUniformLocation(shaderProgram, 'dy');

    function render(){
        setTimeout(function(){
            if(dy >= 0.6 || dy <= -0.6) speed = -speed;
            dy = dy + speed;
            gl.uniform1f(uDy, dy);
            gl.clear(gl.COLOR_BUFFER_BIT);

            gl.drawArrays(gl.TRIANGLE_FAN, 0, vertices.length);
            render();
        }, 1000/60);
    }
    render();

    
}


