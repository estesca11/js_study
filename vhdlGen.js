//0~16 binary generator
let bin = 1;
for (let i = 0; i < 16; i++) {
    console.log(`WHEN "${bin.toString(2).padStart(16, '0')}" => seg <= "";`);
    bin = bin << 1;
}
