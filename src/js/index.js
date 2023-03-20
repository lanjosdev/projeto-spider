/* Objetivo do programa:
Mudar as imagens do carrossel ao clicar em cada botão

PARA E PENSAR EM (LINGUAGEM NATURAL) OS PASSO-A-PASSO QUE SEU PROGRAMA DEVE FAZER P/ ATINGIR O OBJETIVO ESPERADO ;) 

Passos/Algoritmos/Instruções:
 1 - Dar um jeito do JS acessar e interagir com os elementos HTML, no caso os elementos de botoes;
 2 - Dar um jeito do JS identificar o clique do usuario em cada botão do carrossel (evento);
 3 - Desmacar a classe prestabelicida do botão anterior com JS;
 4 - Fazer o JS marcar o botão clicado pelo user com a class .selecionado;
 5 - Esconder a imagem de fundo anterior (para parecer a correspondente que foi clicada);
 6 - Fazer aparecer a imagem de fundo correspondente ao botão clicado.
 */

// 1 - Dar um jeito do JS acessar e interagir com os elementos HTML, no caso os elementos de botoes;
const botoesCarrossel = document.querySelectorAll('.botao'); //lista de botoes com classe "botao"
const imagens = document.querySelectorAll('.imagem'); //lista de imgs com classe "imagem"
const modos = document.querySelectorAll('.icon-redes');


// 2 - Dar um jeito do JS identificar o clique do usuario em cada botão do carrossel (evento);
botoesCarrossel.forEach((botaoClicado, indiceBtClicado) => {

    // function automatizarCarrossel () {
    //     indiceBtClicado ++;

    //     if(indiceBtClicado > imagens.length-1) {
    //         indiceBtClicado = 0;
    //     }        

    //     const botaoSelecionado = document.querySelector('.selecionado'); 
    //     botaoSelecionado.classList.remove('selecionado');

    //     botoesCarrossel[indiceBtClicado].classList.add('selecionado'); 


    //     const imagemAtiva = document.querySelector('.ativa');
    //     imagemAtiva.classList.remove('ativa');

    //     imagens[indiceBtClicado].classList.add('ativa');
    // }
    // setInterval(automatizarCarrossel, 1800);

    //V addEventListener faz elementos escutar eventos(click) que ocorrem na sua pagina com elemento em questão V
    botaoClicado.addEventListener('click', () => {

        // 3 - Desmacar/remover a classe prestabelicida do botão anterior com JS;
        const botaoSelecionado = document.querySelector('.selecionado'); // nessa var vai ter meio q uma lista de elementos com classe "selecionado".
        botaoSelecionado.classList.remove('selecionado');

        // 4 - Fazer o JS marcar/add o botão clicado pelo user com a class .selecionado;
        botaoClicado.classList.add('selecionado'); //var/arg "botaoclicado" esta ainda com o botao q foi clicado com o for sendo assim ele já aproveita e usa a instrução de add uma class qualquer, no caso, 'selecionado'.

        // 5 - Esconder a imagem de fundo anterior, q esta ativa (no caso só remover a class "ativa" do img)
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        
        // 6 - Fazer aparecer a imagem de fundo correspondente ao botão clicado.
        // console.log('Imagem/botao clicada é: ' + indiceBtClicado);
        imagens[indiceBtClicado].classList.add('ativa');

    })  
    
    
})
