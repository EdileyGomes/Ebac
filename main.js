//declarando variáveis
let num1 = document.getElementById("numA");
let num2 = document.getElementById("numB");
let num1V = num1.value;
let num2V = num2.value;
let mensagem = document.getElementById("mensagem-sucesso");
let error = document.getElementById("mensagem-erro");
const form = document.getElementById("formulario");


// Validando o formulário
form.addEventListener("submit", function(e) {
    e.preventDefault()
    num1V = parseFloat(num1.value);
    num2V = parseFloat(num2.value);
    if (isNaN(num1V) || isNaN(num2V)) {
        mensagem.innerHTML = "Por favor, insira números válidos!!";
    } else if (num1V < num2V) {
        mensagem.innerHTML = `O Número ${num1V}, é menor que o número ${num2V}. Parabéns...`;
    } else if (num1V === num2V) {
        mensagem.innerHTML = `O Número ${num1V}, é igual ao número ${num2V}.`;
        document.querySelector("#numA").style = "border: red 2px solid";
        document.querySelector("#numB").style = "border: red 2px solid";
        error.innerHTML = "Os números são iguais. Por favor, insira números diferentes.";
        error.style.color = 'red'
        error.style.margin = '10px'
    } else {
        mensagem.innerHTML = `O Número ${num1V}, é maior que o número ${num2V}... Logo, está inválido`;
    }
})

