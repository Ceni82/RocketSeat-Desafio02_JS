/*

1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert("Hello World!") 

-------------------------------------------------------------
2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let a = 2;
let b = 2;
let c = a + b;
alert ( `a soma das variaveias 'a' e 'b' é: ${ c } ` )

-------------------------------------------------------------
3. Crie um script que declare uma variável e verifique se o seu valor é um número.
Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
>> Para saber o tipo de dado você pode usar o operador typeof<<

var value = 2;

if (typeof value === "number"){
    alert('is a number!')
}
else {
    alert('Not a number')
};

------------------------------------------------------------------
4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, 
exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

var value = "gato";

if (typeof value === "string"){
    alert('is a String!')
}
else {
    alert('Not a String')
};

-------------------------------------------------------------------
5. Crie um script que declare uma variável e verifique se o seu valor é um booleano.
Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".


var value = true;

if (typeof value === "boolean"){
    alert('is a boolean!')
}
else {
    alert('Not a Boolean')
};

--------------------------------------------------------------
6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

var value1 = 3;
var value2 = 5;

var total = value1 - value2;

console.log(total); 
---------------------------------------------------------------
7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas;

var value1 = 3;
var value2 = 5;

var total = value1 * value2;

console.log(total);
--------------------------------------------------------------
8.Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

var value1 = 3;
var value2 = 5;

var total = value1 / value2;

console.log(total);
----------------------------------------------------------------
9. Crie um script que declare uma variável e verifique se o seu valor é um número par.
 Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".1 

var value = 3;

if (value % 2 == 0){
    console.log("É um número par");
} else {console.log("Não é um número par")}

--------------------------------------------------------------------
10.Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. 
Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
*/
var value = prompt("Digite um numero:");

if (value % 2 == 0){
    alert("Não é um número ímpar");
} else {alert("É um número ímpar")}