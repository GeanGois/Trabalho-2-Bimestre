// Exerecicio 01 -------------------------------------------------------------
let inputLadoA = document.querySelector("#inputLadoA");
let inputLadoB = document.querySelector("#inputLadoB");
let inputLadoC = document.querySelector("#inputLadoC");
let btVerificarTriangulo = document.querySelector("#btVerificarTriangulo");
let h3ResultadoTriangulo = document.querySelector("#h3ResultadoTriangulo");

function verificarTriangulo(){
    let ladoA = Number(inputLadoA.value);
    let ladoB = Number(inputLadoB.value);
    let ladoC = Number(inputLadoC.value);

    if( ladoA < ladoB + ladoC && 
        ladoB < ladoA + ladoC && 
        ladoC < ladoA + ladoB){
        h3ResultadoTriangulo.innerHTML = "Os lados formam um triangulo.";
    }
    else{
        h3ResultadoTriangulo.innerHTML = "Os lados nao formam um triangulo.";
    }
    if(ladoA === ladoB && ladoB === ladoC){
        h3ResultadoTriangulo.innerHTML += "<br> Triangulo equilatero.";
    }   
    else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        h3ResultadoTriangulo.innerHTML += "<br> Triangulo isosceles.";
    }       
    else{
        h3ResultadoTriangulo.innerHTML += "<br> Triangulo escaleno.";
    }   
}

btVerificarTriangulo.onclick = function(){
    verificarTriangulo();
}
// Exerecicio 01 -------------------------------------------------------------


// Exerecicio 02 -------------------------------------------------------------
let inputAltura = document.querySelector("#inputAltura");
let inputPeso = document.querySelector("#inputPeso");
let btCalcular = document.querySelector("#btCalcular");
let h3ResultadoIMC = document.querySelector("#h3ResultadoIMC");

function calcularIMC(){

    let altura = Number(inputAltura.value);
    let peso = Number(inputPeso.value); 

    let imc = peso / (altura * altura);

    let classificacao = ""; 

    if(imc < 18.5){
        classificacao = "Abaixo do peso";
    }    
    else if(imc >= 18.5 && imc < 25){
        classificacao = "Peso normal";
    }   
    else if(imc >= 25 && imc < 30){
        classificacao = "Sobrepeso";
    }   
    else if(imc >= 30 && imc < 35){
        classificacao = "Obesidade grau 1";
    }
    else if(imc >= 35 && imc < 40){
        classificacao = "Obesidade grau 2";
    }
    else{
        classificacao = "Obesidade grau 3";
    }   

    h3ResultadoIMC.innerHTML = "Seu IMC: " + imc.toFixed(2) + "<br>" + "Sua classificacao: " + classificacao;
}   

btCalcular.onclick = function(){
    calcularIMC();
}   
// Exerecicio 02 -------------------------------------------------------------


// Exerecicio 03 -------------------------------------------------------------
let inputAnoDoCarro = document.querySelector("#inputAnoDoCarro");
let inputValorDoCarro = document.querySelector("#inputValorDoCarro");
let btCalcularImposto = document.querySelector("#btCalcularImposto");
let h3ResultadoImposto = document.querySelector("#h3ResultadoImposto");

function calcularImposto(){
    let anoDoCarro = Number(inputAnoDoCarro.value);
    let valorDoCarro = Number(inputValorDoCarro.value); 
    
    let imposto = 0;

    if(anoDoCarro < 1990){
        imposto = valorDoCarro * 0.01;
    }
    else{
        imposto = valorDoCarro * 0.015;
    }
    h3ResultadoImposto.innerHTML = "Imposto a ser pago: R$ " + imposto.toFixed(2);  
}

btCalcularImposto.onclick = function(){
    calcularImposto();
}
// Exerecicio 03 -------------------------------------------------------------


// Exerecicio 04 -------------------------------------------------------------
let inputSalarioAtual = document.querySelector("#inputSalarioAtual");
let inputCargo = document.querySelector("#inputCargo");
let btCalcularAumento = document.querySelector("#btCalcularAumento");
let h3ResultadoSalario = document.querySelector("#h3ResultadoSalario");   

function calcularAumento(){
    let salarioAtual = Number(inputSalarioAtual.value);
    let cargo = inputCargo.value;

    let aumento = "";

    if(cargo === "gerente"){
        aumento = salarioAtual * 0.1;
    }
    else if(cargo === "engenheiro"){
        aumento = salarioAtual * 0.2;
    }   
    else if(cargo === "tecnico"){
        aumento = salarioAtual * 0.3;
    }
    else{
        aumento = salarioAtual * 0.4;
    }

    h3ResultadoSalario.innerHTML = 
        "Aumento: R$ " + aumento.toFixed(2) + "<br>"+ 
        "Salario com aumento: R$ " + (salarioAtual + aumento).toFixed(2);
}

btCalcularAumento.onclick = function(){
    calcularAumento();
}   
// Exerecicio 04 -------------------------------------------------------------

// Exerecicio 05 -------------------------------------------------------------
let inputSaldoMedio = document.querySelector("#inputSaldoMedio");
let btCalcularCredito = document.querySelector("#btCalcularCredito");
let h3ResultadoCredito = document.querySelector("#h3ResultadoCredito");

function calcularCredito(){
    let saldoMedio = Number(inputSaldoMedio.value);
    let percentualCredito = 0;
    
    if(saldoMedio <= 200){
        percentualCredito = 0;
    }
    else if(saldoMedio <= 400){
        percentualCredito = 20;
    }
    else if(saldoMedio <= 600){
        percentualCredito = 30;
    }
    else{
        percentualCredito = 40;
    }
    
    let credito = saldoMedio * (percentualCredito / 100);

    h3ResultadoCredito.innerHTML = 
        "Percentual de crédito: " + percentualCredito + "%<br>" + 
        "Crédito aprovado: R$ " + credito.toFixed(2);
}

btCalcularCredito.onclick = function(){
    calcularCredito();
}           
// Exerecicio 05 -------------------------------------------------------------

// Exerecicio 06 -------------------------------------------------------------
let inputCodigoLanche = document.querySelector("#inputCodigoLanche");
let inputQuantidadeLanche = document.querySelector("#inputQuantidadeLanche");
let btCalcularLanche = document.querySelector("#btCalcularLanche");
let h3ResultadoLanche = document.querySelector("#h3ResultadoLanche");

function calcularLanche(){
    let codigoLanche = Number(inputCodigoLanche.value);
    let quantidadeLanche = Number(inputQuantidadeLanche.value);

    let valor = "";

    if(codigoLanche === 1){
        valor = 11;
    }
    else if(codigoLanche === 2){
        valor = 8.5;       
    }
    else if(codigoLanche === 3){
        valor = 8;       
    }
    else if(codigoLanche === 4){
        valor = 9;       
    }
    else if(codigoLanche === 5){
        valor = 10;       
    }
    else if(codigoLanche === 6){
        valor = 4.5;       
    }

    let total = valor * quantidadeLanche;

    h3ResultadoLanche.innerHTML = "Total a pagar: R$ " + total.toFixed(2);
}

btCalcularLanche.onclick = function(){
    calcularLanche();
}           
// Exerecicio 06 -------------------------------------------------------------

