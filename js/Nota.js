/*Variável que indica se a próxima nota será urgente (true) ou não urgente (false)*/
var urgente = false;

/*Função chamada quando o usuário escolhe "Urgente" ou "Não urgente"*/
/* Ela muda o valor da variável 'urgente' conforme o botão clicado*/
function urgencia(valor) {
    urgente = valor;
}

/*Função da nota*/
function nota() {

    var campo = document.getElementById("nota"); /*Pega o campo de texto onde o usuário digita a nota*/


    /*Pega o texto digitado e remove espaços extras no início e no fim*/
    var texto = campo.value.trim();

    /*Se o campo estiver vazio, mostra um alert*/
    if (texto == "") {
        alert("Digite uma nota!");
        return;
    }

    
    var nova = document.createElement("div");/*Cria uma nova <div> para representar a nota*/
    nova.className = "nota";/* Adiciona a classe CSS "nota" à nova div (para estilização)*/

    nova.innerHTML = texto + ' <button onclick="removerNota(this)">X</button>';
    /*Define o conteúdo da nota (texto digitado + botão "X" para remover)*/
    /* O "this" no botão serve para identificar qual nota será removida*/

    if (urgente) { 
    /*Se a nota for marcada como urgente (urgente == true)*/
        
        var bloco = document.getElementById("urgente");/* Pega o bloco de notas urgentes*/
        bloco.style.display = "block";/* Faz o bloco aparecer na tela (caso estivesse oculto)*/

        bloco.appendChild(nova);/*Adiciona a nova nota dentro do bloco de urgentes*/
    } else {

        var bloco = document.getElementById("naoUrgente");/*Pega o bloco de notas não urgentes*/

        bloco.style.display = "block";/*Faz o bloco aparecer na tela (caso estivesse oculto)*/


        bloco.appendChild(nova);/*Adiciona a nova nota dentro do bloco de não urgentes*/
    }

    campo.value = "";/*Limpa o campo de texto depois de adicionar a nota*/
}

/* Função que remove uma nota botão "X" é clicado*/
function removerNota(botao) {

    var bloco = botao.parentElement.parentElement;    /*O bloco é o elemento pai do pai do botão (a seção de urgentes ou não urgentes)*/


    /* Remove a <div> da nota (o pai do botão)*/
    botao.parentElement.remove();

    if (bloco.querySelectorAll(".nota").length === 0) {/*Se o bloco não tiver mais notas, ele é escondido novamente*/
        bloco.style.display = "none";
    }
}

/*Função que apaga todas as notas*/
function excluirTudo() {
    /*Pega os blocos das notas urgentes e não urgentes*/
    var blocoUrg = document.getElementById("urgente");
    var blocoNao = document.getElementById("naoUrgente");

    /*Remove todas as notas e deixa apenas o título de cada bloco*/
    blocoUrg.innerHTML = "<h3>Urgentes</h3>";
    blocoNao.innerHTML = "<h3>Não Urgentes</h3>";

    /*Esconde os blocos novamente*/
    blocoUrg.style.display = "none";
    blocoNao.style.display = "none";
}
