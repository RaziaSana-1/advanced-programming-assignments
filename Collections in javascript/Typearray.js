// typearray are divided into buffers and viws there is no any methods
// there are various types of views, representing the most common numeric types
        // int8array-value range [-128, 127]
        // Uint8array-value range [0, 255], 
        // int16array-value range [-32768, 32767]
        // Uint16array-value range [0, 65535]
        // float32array-value range [1.2E-38, 3.4E38]
let tarray = new Int8Array(8);
tarray[0] = -80;
tarray[1] = 55;
console.log(tarray);

let uarray = new Uint8Array(8);
uarray[0] = 40;
console.log(uarray);

let sarray = new Int16Array(16);
sarray[1] = 6000;
console.log(sarray);

let varray = new Uint16Array(16);
varray[3] = 50000;
console.log(varray);


let zarray = new Float32Array(32);
zarray[5] = 2.5;
console.log(zarray);

