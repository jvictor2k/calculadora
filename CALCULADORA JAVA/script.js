
var input = document.getElementById("val1");
var input2 = document.getElementById("val2");
var feito = false;
var operador = document.getElementById("operador");
var stringValor1 = "";
var stringValor2 = "";
var adicao = document.getElementById("+");
var subtracao = document.getElementById("-");
var divisao = document.getElementById("/");
var mult = document.getElementById("*");
var equal = document.getElementById("=");
var resultado = "";
var btnClean = document.getElementById("clean")
var resultadoConta = "";



var numero1 = document.getElementById("1").addEventListener("click", function(){
    stringValor1 = stringValor1 + "1";

    if(feito == false){
        input.value = stringValor1;
    }else{
        stringValor2 = stringValor2 + "1";
        input2.value = stringValor2;
    }
    
})

var numero2 = document.getElementById("2").addEventListener("click", function(){
    stringValor1 = stringValor1 + "2";

    if(feito == false){
        input.value = stringValor1;
    }else{
        stringValor2 = stringValor2 + "2";
        input2.value = stringValor2;
    }
})

var numero3 = document.getElementById("3").addEventListener("click", function(){
    stringValor1 = stringValor1 + "3";
    
    if(feito == false){
        input.value = stringValor1;
    }else{
        stringValor2 = stringValor2 + "3";
        input2.value = stringValor2;
    }
})

var numero4 = document.getElementById("4").addEventListener("click", function(){
    stringValor1 = stringValor1 + "4";
    
    if(feito == false){
        input.value = stringValor1;
    }else{
        stringValor2 = stringValor2 + "4";
        input2.value = stringValor2;
    }
})

var numero5 = document.getElementById("5").addEventListener("click", function(){
    stringValor1 = stringValor1 + "5";
    

    if(feito == false){
        input.value = stringValor1;
    }else{
        stringValor2 = stringValor2 + "5";
        input2.value = stringValor2;
    }
})

var numero6 = document.getElementById("6").addEventListener("click", function(){
    stringValor1 = stringValor1 + "6";
    
    if(feito == false){
        input.value = stringValor1;
    }else{
        stringValor2 = stringValor2 + "6";
        input2.value = stringValor2;
    }
})

var numero7 = document.getElementById("7").addEventListener("click", function(){
    stringValor1 = stringValor1 + "7";
    
    if(feito == false){
        input.value = stringValor1;
    }else{
        stringValor2 = stringValor2 + "7";
        input2.value = stringValor2;
    }
})

var numero8 = document.getElementById("8").addEventListener("click", function(){
    stringValor1 = stringValor1 + "8";
    if(feito == false){
        input.value = stringValor1;
    }else{
        stringValor2 = stringValor2 + "8";
        input2.value = stringValor2;
    }
})

var numero9 = document.getElementById("9").addEventListener("click", function(){
    stringValor1 = stringValor1 + "9";
    
    if(feito == false){
        input.value = stringValor1;
    }else{
        stringValor2 = stringValor2 + "9";
        input2.value = stringValor2;
    }
})

var ponto = document.getElementById(".").addEventListener("click", function(){
    stringValor1 = stringValor1 + ".";
    
    if(feito == false){
        input.value = stringValor1;
    }else{
        stringValor2 = stringValor2 + ".";
        input2.value = stringValor2;
    }
})




equal.addEventListener("click", function(){
    var valor1 = parseInt(input.value);
    var valor2 = parseInt(input2.value);

    if(operador.innerHTML == "+"){
        resultado = valor1 + valor2;
    }else if(operador.innerHTML == "-"){
        resultado = valor1 - valor2;
    }else if(operador.innerHTML == "*"){
        resultado = valor1 * valor2;
    }else if(operador.innerHTML == "/"){
        resultado = valor1 / valor2;
    }

    resultadoConta = document.getElementById("resultado");
    
    
    resultadoConta.value = resultado.toString();

})

btnClean.addEventListener("click", function(){
    input.value = "";
    stringValor1 = "";
    stringValor2 = "";
    operador.innerHTML = "";
    input2.value = "";
    feito = false;
    resultadoConta.value = "";
})

adicao.addEventListener("click", function(){
    operador.innerHTML = "+";
    document.getElementById("val2").focus();
    feito = true;
})

subtracao.addEventListener("click", function(){
    operador.innerHTML = "-";
    document.getElementById("val2").focus();
    feito = true;
})

mult.addEventListener("click", function(){
    operador.innerHTML = "*";
    document.getElementById("val2").focus();
    feito = true;
})

divisao.addEventListener("click", function(){
    operador.innerHTML = "/";
    document.getElementById("val2").focus();
    feito = true;
})









