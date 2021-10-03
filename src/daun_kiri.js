function main2(){

    var canvas = document.getElementById("myCanvas2");
    var gl = canvas.getContext('webgl');
    var vertices2 = [

        -0.68, -0.03 ,1.0, 0.0, 1.0, 
        -0.71, -0.03 ,0.0, 1.0, 0.0, 
        -0.74, -0.03 ,0.0, 1.0, 0.0, 
        -0.77, -0.04 ,0.0, 1.0, 0.0, 
        -0.78, -0.05 ,0.0, 1.0, 0.0, 
        -0.81, -0.06,0.0, 1.0, 0.0, 
        -0.83, -0.08 ,0.0, 1.0, 0.0, 
        -0.86, -0.1 ,0.0, 1.0, 0.0, 
        -0.89, -0.14 ,0.0, 1.0, 0.0, 
        -0.91, -0.18 ,0.0, 1.0, 0.0, 
        -0.92, -0.18 ,0.0, 1.0, 0.0, 
        -0.92, -0.19 ,0.0, 1.0, 0.0, 
        -0.92, -0.18 ,0.0, 1.0, 0.0, 
        -0.9, -0.18 ,0.0, 1.0, 0.0, 
        -0.89, -0.18 ,0.0, 1.0, 0.0, 
        -0.88, -0.19 ,0.0, 1.0, 0.0, 
        -0.87, -0.2 ,0.0, 1.0, 0.0, 
        -0.86, -0.21 ,0.0, 1.0, 0.0, 
        -0.85, -0.21 ,0.0, 1.0, 0.0, 
        -0.84, -0.22 ,0.0, 1.0, 0.0, 
        -0.83, -0.23 ,0.0, 1.0, 0.0, 
        -0.84, -0.23 ,0.0, 1.0, 0.0, 
        -0.85, -0.22 ,0.0, 1.0, 0.0, 
        -0.87, -0.22 ,0.0, 1.0, 0.0, 
        -0.89, -0.2,0.0, 1.0, 0.0, 
        -0.9, -0.2,0.0, 1.0, 0.0, 
        -0.91, -0.19 ,0.0, 1.0, 0.0, 
        -0.92, -0.19 ,0.0, 1.0, 0.0, 
        -0.91, -0.19 ,0.0, 1.0, 0.0, 
        -0.9, -0.2,0.0, 1.0, 0.0, 
        -0.89, -0.2,0.0, 1.0, 0.0, 
        -0.87, -0.22 ,0.0, 1.0, 0.0, 
        -0.85, -0.22 ,0.0, 1.0, 0.0, 
        -0.84, -0.23 ,0.0, 1.0, 0.0, 
        -0.83, -0.23 ,0.0, 1.0, 0.0, 

        -0.82, -0.24 ,0.0, 1.0, 0.0, 
        -0.81, -0.25 ,0.0, 1.0, 0.0,
        -0.8, -0.25,0.0, 1.0, 0.0, 
        -0.79, -0.25 ,0.0, 1.0, 0.0, 
        -0.78, -0.25 ,0.0, 1.0, 0.0, 
        -0.75, -0.23 ,0.0, 1.0, 0.0, 
        -0.72, -0.21 ,0.0, 1.0, 0.0, 
        -0.66, -0.18 ,0.0, 1.0, 0.0, 
        -0.62, -0.18 ,0.0, 1.0, 0.0, 
        -0.69, -0.19 ,0.0, 1.0, 0.0, 
        -0.56, -0.17 ,0.0, 1.0, 0.0,
        -0.51, -0.17 ,0.0, 1.0, 0.0, 
        -0.48, -0.18 ,0.0, 1.0, 0.0,
        -0.42, -0.18 ,0.0, 1.0, 0.0, 
        -0.38, -0.18 ,0.0, 1.0, 0.0, 
        -0.33, -0.18 ,0.0, 1.0, 0.0, 
        -0.29, -0.16 ,0.0, 1.0, 0.0, 
        -0.23, -0.14,0.0, 1.0, 0.0, 
        -0.31, -0.17 ,0.0, 1.0, 0.0, 
        -0.35, -0.18 ,0.0, 1.0, 0.0, 
        -0.26, -0.15 ,0.0, 1.0, 0.0, 
        -0.2, -0.12 ,0.0, 1.0, 0.0, 
        -0.18, -0.11 ,0.0, 1.0, 0.0,
        -0.15, -0.08 ,0.0, 1.0, 0.0, 
        -0.14, -0.05 ,0.0, 1.0, 0.0, 
        -0.12, -0.03 ,0.0, 1.0, 0.0, 
        -0.18, 0.01,0.0, 1.0, 0.0, 
        -0.22, 0.03 ,0.0, 1.0, 0.0, 
        -0.24, 0.05 ,0.0, 1.0, 0.0, 
        -0.26, 0.07 ,0.0, 1.0, 0.0, 
        -0.28, 0.08 ,0.0, 1.0, 0.0, 
        -0.29, 0.09 ,0.0, 1.0, 0.0, 
        -0.31, 0.1 ,0.0, 1.0, 0.0, 
        -0.35, 0.12 ,0.0, 1.0, 0.0, 
        -0.36, 0.13 ,0.0, 1.0, 0.0, 
        -0.38, 0.14 ,0.0, 1.0, 0.0, 
        -0.4, 0.15 ,0.0, 1.0, 0.0, 
        -0.42, 0.15 ,0.0, 1.0, 0.0, 
        -0.43, 0.15 ,0.0, 1.0, 0.0, 
        -0.46, 0.15 ,0.0, 1.0, 0.0, 
        -0.48, 0.16 ,0.0, 1.0, 0.0, 
        -0.5, 0.16 ,0.0, 1.0, 0.0, 
        -0.52, 0.15 ,0.0, 1.0, 0.0, 
        -0.54, 0.15 ,0.0, 1.0, 0.0, 
        -0.56, 0.16 ,0.0, 1.0, 0.0, 
        -0.58, 0.16 ,0.0, 1.0, 0.0, 
        -0.59, 0.16 ,0.0, 1.0, 0.0, 
        -0.61, 0.16 ,0.0, 1.0, 0.0, 
        -0.63, 0.16 ,0.0, 1.0, 0.0, 
        -0.65, 0.16 ,0.0, 1.0, 0.0, 
        -0.67, 0.15,0.0, 1.0, 0.0, 
        -0.69, 0.14 ,0.0, 1.0, 0.0, 
        -0.71, 0.14 ,0.0, 1.0, 0.0, 
        -0.73, 0.13 ,0.0, 1.0, 0.0, 
        -0.75, 0.12 ,0.0, 1.0, 0.0, 
        -0.76, 0.12 ,0.0, 1.0, 0.0, 
        -0.77, 0.1 ,0.0, 1.0, 0.0, 
        -0.79, 0.09 ,0.0, 1.0, 0.0, 
        -0.79, 0.08 ,0.0, 1.0, 0.0, 
        -0.8, 0.07 ,0.0, 1.0, 0.0, 
        -0.81, 0.05 ,0.0, 1.0, 0.0, 
        -0.81, 0.03 ,0.0, 1.0, 0.0, 
        -0.81, 0.01 ,0.0, 1.0, 0.0, 
        -0.8, 0,0.0, 1.0, 0.0, 
        -0.79, -0.01 ,0.0, 1.0, 0.0, 
        -0.78, -0.01,0.0, 1.0, 0.0, 
        -0.77, -0.02 ,0.0, 1.0, 0.0, 
        -0.76, -0.02 ,0.0, 1.0, 0.0, 
        -0.74, -0.02 ,0.0, 1.0, 0.0, 
        -0.72, -0.03 ,0.0, 1.0, 0.0, 
        -0.69, -0.03 ,0.0, 1.0, 0.0, 
        -0.65, -0.02 ,0.0, 1.0, 0.0,
        -0.6, -0.01 ,0.0, 1.0, 0.0, 
        -0.57, -0.01 ,0.0, 1.0, 0.0, 
        -0.54, 0,0.0, 1.0, 0.0, 
        -0.47, 0 ,0.0, 1.0, 0.0, 
        -0.37, 0.01 ,0.0, 1.0, 0.0, 
        -0.28, 0 ,0.0, 1.0, 0.0, 
        -0.64, 0.01 ,0.0, 1.0, 0.0, 
        -0.69, 0.03 ,0.0, 1.0, 0.0, 
        -0.72, 0.04 ,0.0, 1.0, 0.0, 
        -0.63, -0.03 ,0.0, 1.0, 0.0, 
        -0.65, -0.05,0.0, 1.0, 0.0
    ];
    
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices2), gl.STATIC_DRAW);


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
            gl_Position = translasi * vec4(aPosition, 0.0, 1.0);
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
    var speed = speedRaw / 60;
    var dy = 0;
    var uDy = gl.getUniformLocation(shaderProgram, 'dy');
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 118);
}


