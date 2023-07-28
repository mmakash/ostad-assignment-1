// problem 3
function multiplicationTable(number){
    for(let i = 1; i <= 10; i++){
        const result = i * number;
        console.log(`${number} * ${i} = ${result}`);
    }
}
multiplicationTable(5);