
//verirficar se é um numero binario
function validaty(num){
   const verificaty = /2|3|4|5|6|7|8|9/
   const regExpreLetter = /[a-z]/i
   return verificaty.test(num) || regExpreLetter.test(num)
}


// fazer o calculo para tranforma em decimal
function binToNumber(numBi){

    console.log(typeof(numBi))
    const toNumber = numBi.map((numbi, index)=> {
        // console.log(index)
        return Number(Math.pow(2, index) * Number(numbi))
    }).reduce((acumulador, currentValue) => acumulador+=currentValue)
    
    return toNumber
}


// invertar o numero binario
function invertArray(arrayNumbers){
    console.log(arrayNumbers)
   return arrayNumbers.split("").reverse()
}

//enviar mesagem para tela
function Innertext(text){
    const divtext = document.querySelector('.number-output')
    divtext.innerHTML = ""

    divtext.innerHTML = `<p>${text}</p>`
}


function start(num){
    if(validaty(num)){
        Innertext('somente numeros binarios')
        return
    }
    let binaryNumber = invertArray(num)
  
    binaryNumber = binToNumber(binaryNumber)
    Innertext(`O numero é ${binaryNumber}`)
}


document.getElementById('become').addEventListener('click', ()=>{
    const valueInput = document.getElementById('bin').value
    start(valueInput)
})

 //precisar enviar o valor como string


 // logica

 // verificar se na palavra tem os numero 2,3,4,5,6,7,8,9 ou letras com expressões regulares
 // inverter o numero
 // Se tiver enviar uma mesagem de erro
 // Se não tiver transforma para numero decimal
 // enviar para a tela 
