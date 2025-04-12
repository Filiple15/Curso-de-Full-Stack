const numeroJS = document.getElementById("numero")
const mensagemJS = document.getElementById("mensagem")
const mostrarResultadoJS = document.getElementById("mostrarResultados")
 
function MostrarResultado()
{
    // Declarar e incializar a variavel numero
   
    var numeroInteiro = 0;
   
    // Declarar i incializar a variavel mensagem
    var mensagemClc = "";
   
    // Declarar i incializar a variavel resto
    var resto = 0;
   
    // coletar o valor inteiro digitado 
    const partes = numeroJS.valuem.split(/[.,]/)
    if ((partes[1]) && (partes[1] != "") || isNaN (numeroJS.value))
    {
        mensagemClc = "O numero informado esta invalido. Verifique se o numero é inteiro!!";
    }
    else
    {
         // Coletar o valor digitado no input box id numero
    numeroInteiro = numeroJS.value;
   
    //  Dividir o numero por 2 e obter o resto
    resto = numeroInteiro % 2;
   
    // Gerar a mensagem com base no conteudo do resto
    if (resto == 0)
    {
        mensagemClc = "O numero informado é PAR";
    }
    else
    {
        mensagemClc = "O numero informado é IMPAR";
    }

    }
}

function filtrarEntrada()
{
    var keycode = event.wich || event.keycode;
    
    if (keycode === 69 || keycode === 101)
        event.preventDefault();
}

function Handlepaste()
{
    var clipboarData = event.clipboarData || window.clipboarData;
    var pasteData = clipboarData.getData("Text").toUpperCase();
    
    if (pasteData.indexDF("E") > -1)
        event.stopPropagation();
        event.preventDefault();
        
}

mensagemJS.innerText = mensagemClc;
mostrarResultadoJS.addEventListener('click', MostrarResultado)
 