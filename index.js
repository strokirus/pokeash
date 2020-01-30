const readline = require('readline');
const { performance } = require('perf_hooks');
const { catchAll } = require('./pokemon.js');
const INTERFACE = {
    input: process.stdin,
    output: process.stdout,
    terminal: false,
};

const rl = readline.createInterface(INTERFACE);

rl.on('line', async function (line) {
    const v1 = performance.now();
    const result = catchAll(line);
    const v2 = performance.now();
    console.log(`${result} in ${v2 - v1}ms`);
});