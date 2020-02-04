const readline = require('readline');
/* 
    This part is necessary if we want track time performance.
    const { performance } = require('perf_hooks');
*/
const { catchPokemons } = require('./pokemon.js');
const INTERFACE = {
    input: process.stdin,
    output: process.stdout,
    terminal: false,
};

const rl = readline.createInterface(INTERFACE);

/**
 * Function to read file and compute movements
 * @param line Line of file
 */
rl.on('line', function (line) {
    /*
        This part is necessary if we want track time performance.
        const v1 = performance.now();
        const result = catchPokemons(line);
        const v2 = performance.now();
        console.log(`${result} in ${v2 - v1}ms`);
    */

   const result = catchPokemons(line);
   console.log(`${result}`);
});