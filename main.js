/*Aqui foi criado uma função que reserva os sons das teclas, 
o parametro passado indica oq deve ser colocado dentro dessas função
*/
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        console.log('Foda mano, mas não achamos nenhum elemento, ou voce colocou um elemento invalido');
    }
}


/* Aqui foi criado uma referencia e uma lista, que guarda as teclas do html */
const listaDeTeclas = document.querySelectorAll('.tecla');



/* O objetivo aqui é conseguir fazer com que cada tecla tenha seu respectivo 
som tocado quando selecionado, o for indica que vai constinuar funcionando 
enquanto o valor for menor que algo, então ao informar a quantidade de teclas 
como nosso valor maximo, ele funcionara, para cada tecla, aqui tambem foi colocado 
o contador e mudando ele para que ele se tranforme cada vez que uma tecla for clicada */
for (contador = 0; contador < listaDeTeclas.length; contador++){

    /*Nessa primeira const eu criei uma referencia que pega as teclas e associa com o contador(numeros) */
    const tecla = listaDeTeclas[contador];

    /* Na Segunda eu criei uma referencia que pega a lista de teclas e seleciona a classe correta(tecla_som) */
    const instrumento = tecla.classList[1];

    /* na terceira eu criei uma referencia que pega a classe de tecla e associa com a id do audio escrito 
    no html(#som_) */
    const idAudio = `#som_${instrumento}`;


    /* Por ultimo disse, que quando eu clicar na tecla ele deve tocar o som reservado */
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    /* O que isso gera é enquanto meu contador for menor que meu numero de teclas 
    ele vai buscar uma tecla na lista, associar com um numero e com um audio 
    e vai tocar o audio quando eu clicar, o loop se encerra quando acabarem teclas */

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
 
    tecla.onkeyup = function () {

        tecla.classList.remove ('ativa');
    }

}
