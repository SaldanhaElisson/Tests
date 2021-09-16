// fazer o calculo para tranforma em decimal
function binToNumber(numBi){

    let plusNumbers = 0;
    const toNumber = invertArray(numBi).map((numbi, index)=> {
        // console.log(index)
        return Number(Math.pow(2, index) * Number(numbi))
    }).reduce((acumulador, currentValue) => acumulador+=currentValue)
    
    console.log(toNumber)
    
}


// invertar o numer binario
function invertArray(arrayNumbers){
    const numberArray = String(arrayNumbers).split("")
    const indexArray = numberArray.length
    const invertNumber = []
    for(let i = indexArray - 1; 0 <= i; i-- ){
        invertNumber.push(numberArray[i])
    }

     return invertNumber
}

binToNumber("0011") //precisar enviar o valor como string