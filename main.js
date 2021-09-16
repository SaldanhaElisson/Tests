document.getElementById('become').addEventListener('click', ()=>{
    validaty("210101")
})

function validaty(num){
    let falseOrTrue;
    String(num).split("").filter((num)=>{
       
})
Innertext(falseOrTrue)
}

validaty("123")


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

function Innertext(text){
    const divtext = document.querySelector('.number-output')
    console.log(divtext)

    divtext.innerHTML = `<p>${text}</p>`
    
}



 //precisar enviar o valor como string

