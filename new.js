function swapCase(str) {
    return str.split('').map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        }
        return char.toUpperCase();
    }).join('');
}
console.log(swapCase("aBcD"));
console.log(swapCase("jAvaScRIPt"));
console.log(swapCase("iTBAcAdemY"));  
