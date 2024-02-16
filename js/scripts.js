
/*---POO---*/
/* Forma 1: com uma instrução 'var' */
var materialEscolar = {
    /* atributos */
    id : "123",
    nome : "Borracha",
    preco : 0,   /* Separar atributos de metodos com virgula */

    exibir : function(){
        console.log('ID: ' + this.id + ', Nome: ' + this.nome + ', Preco: ' + this.preco);
    }
}; /*---Ponto-e-virgula no final---*/

/*---POO---*/
/* Forma 2: com uma instrução 'function' */
function MaterialEscolar() {
    let id = 123;
    let nome = 'Borracha';
    let preco = '0';

}; /*---Ponto-e-virgula no final---*/

/*---Todo objeto deriva de um prototipo---*/
/*---Vincular a funcao ao prototipo, e nao ao objeto em si ---*/
/*---Metodo acessor---*/
MaterialEscolar.prototype.getID = function () {
    return this.id;
};
/*---Metodo mutador---*/
MaterialEscolar.prototype.setID = function (id) {
    this.id = id;
};

function mostrar(){
    let borracha = new MaterialEscolar();
    borracha.setID(111);
    console.log( borracha.getID() );

    let lapis = new MaterialEscolar();
    lapis.setID(222);
    console.log( lapis.getID() );
}

/* Forma 3: com uma instrução 'function', mas inicializar os atributos */
function MaterialEscolar(id, nome, preco) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;

}; /*---Ponto-e-virgula no final---*/

function mostrarDetalhado(){
    let borracha = new MaterialEscolar(111,'borracha',1.23);
    console.log( borracha.getID() );

    let lapis = new MaterialEscolar(222,'lapis',4.56);
    console.log( lapis.getID() );
}


function exibir(x){ 
    console.log(x);
}

function somar(x,y){ return x+y; }

function listarVetores(){

    let vetor = [ 'PIX', 'Boleto', 'Cartão' ];

    /* Retorna o indice a partir do conteúdo */
    console.log('Posicao do PIX: ' + vetor.indexOf('PIX'));

    /* Vetores podem conter tipos diferentes, inclusive funcoes, e tambem conteúdo vazio (posicoes 5 em diante) */
    let vetor2 = [ 'PIX', 123, true, 1.23, somar, , , ];

    vetor2.forEach( exibir ); /* Faz a chamada da funcao 'exibir' para cada elemento que eh diferente de vazio (undefined) */

    /* Eh possivel invocar a funcao a partir da posicao em que ela se encontra no vetor*/
    console.log(vetor2[4](1,2)); //retorna '3'

} 


function avaliarCompra() {
    let rotuloAvaliacao = document.getElementById('rotuloAvaliacao');

    let x = parseInt(document.getElementById('notas').value);

    rotuloAvaliacao.innerHTML = 'Avaliação da compra: ';
    switch (x) {
        case 0: {
            rotuloAvaliacao.innerHTML += 'Ruim';
            rotuloAvaliacao.style.color = "#ff0000";
            break;
        }
        case 5: {
            rotuloAvaliacao.innerHTML += 'Razoável';
            rotuloAvaliacao.style.color = "#00ff00";
            break;
        }
        default: {
            rotuloAvaliacao.innerHTML += 'Ótimo';
            rotuloAvaliacao.style.color = "#0000ff";
            break;
        }
    }

}

/* TODO2 */
function avaliarSigla() {
    let rotuloSigla = document.getElementById('rotuloSigla');

    let x = document.getElementById('siglas').value;

    rotuloSigla.innerHTML = 'Avaliação da sigla: ';
    switch (x) {
        case 'HTML': {
            rotuloSigla.innerHTML += 'Hypertext Markup Language';
            rotuloSigla.style.color = "#ff0000";
            break;
        }
        case 'CSS': {
            rotuloSigla.innerHTML += 'Cascading Style Sheet';
            rotuloSigla.style.color = "#00ff00";
            break;
        }
        default: {
            rotuloSigla.innerHTML += 'eXtended Markup Language';
            rotuloSigla.style.color = "#0000ff";
            break;
        }
    }

}










var compra = false;
function comprar() {

    let imagem = document.getElementById('carrinho');

    compra = !compra; //Inverte o valor atual que está em memória

    if (compra) {
        imagem.src = 'img/vendas2.png';
    } else {
        imagem.src = 'img/vendas.png';
    }

}