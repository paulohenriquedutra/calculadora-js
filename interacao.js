const nums = document.querySelectorAll(".nums")
const operador = document.querySelectorAll(".operador")
const igual = document.querySelector("#igual")
const apagar = document.querySelector("#apagar")
const visor = document.querySelector("#outputSoma")
let calculado = false
let operadorValor = ""
let numValor = ""
let numsValor = []
let expressao = ""
let resultado = ""
// colocar botao para VIRGULA
operador.forEach(op => {
    op.addEventListener("click", () =>{
        visor.innerHTML= ""
        operadorValor = op.innerHTML
        expressao += numValor
        numsValor.push(numValor)
        numValor= ""
        visor.innerHTML= expressao
        if (resultado != ""){
            expressao += operadorValor
            visor.innerHTML = expressao
            resultado = ""
        }
        else{
            expressao += operadorValor
            visor.innerHTML = ""
            visor.innerHTML = expressao
        }
    })
});
nums.forEach(n =>{
    n.addEventListener("click",() =>{
        if (resultado != "" || resultado === 0){
            numValor = ""
            visor.innerHTML = "0"
            numValor += n.innerHTML 
            visor.innerHTML = expressao + numValor
            resultado = ""
        }
        else{
            numValor += n.innerHTML 
            visor.innerHTML = expressao + numValor
        }
    }) 
})

igual.addEventListener("click", () =>{
    numsValor.push(numValor)
    numsValor = numsValor.map(Number)
    resultado = calculadora(operadorValor, ...numsValor)
    visor.innerHTML= resultado
    expressao = ""
    numsValor = []
    operadorValor = null
    numValor = resultado
})
apagar.addEventListener("click", () =>{
    numValor = ""
    if (operadorValor != null){
        visor.innerHTML= ""
        visor.innerHTML= expressao + "0"
        console.log("passou no if")
    }
    else{
        visor.innerHTML= "0"
        console.log("passou no else")
    }
})