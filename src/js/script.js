/* Objetivo do programa:
Mudar as imagens do carrossel ao clicar em cada botão

PARA E PENSAR EM (LINGUAGEM NATURAL) OS PASSO-A-PASSO QUE SEU PROGRAMA DEVE FAZER P/ ATINGIR O OBJETIVO ESPERADO ;) 

Passos/Algoritmos/Instruções:
 1 - Dar um jeito do JS acessar e interagir com os elementos HTML, no caso ICONS e BOTOES;
 2 - Dar um jeito do JS identificar o clique do usuario (evento);
 3 - Indetificar qual ICON esta clicado;
 4 - Se for ICON 1 = BGPETER senão BGMILES;

 5 - Desmacar a classe prestabelicida do botão+img anterior com JS;
 6 - Fazer o JS marcar o botão clicado pelo user com a class .selecionado;
 7 - Fazer o JS marcar o img .selecionado de fundo correspondente ao botão clicado.
 */

// 1 - Dar um jeito do JS acessar e interagir com os elementos HTML, no caso ICONS e BOTOES;
const modos = document.querySelectorAll('.icon-redes');
const points = document.querySelectorAll('.botao');

const bgs = document.querySelectorAll('.bg-carrossel');
const titulos = document.querySelectorAll('.logo-titulo');
const descriptions = document.querySelectorAll('.descricao');

var imagens = document.querySelectorAll('.imgPeter');

modos.forEach((modoClicado, indiceModo) => {
    //V addEventListener faz elementos escutar eventos(click) que ocorrem na sua pagina com elemento em questão V

    modoClicado.addEventListener('click', () => {
        // 3 - Desmacar/remover a classe prestabelicida do botão anterior com JS;
        const modoSelecionado = document.querySelector('.selecionadu');
        modoSelecionado.classList.remove('selecionadu');
        modoClicado.classList.add('selecionadu');
        ///////////////////////////////////////////////
        if(indiceModo == 1) {
            imagens = document.querySelectorAll('.imgMiles'); 
        } else {
            imagens = document.querySelectorAll('.imgPeter');
        }  
        ///////////////////////////////////////////////

        const bgAtiva = document.querySelector('.ativabg');
        bgAtiva.classList.remove('ativabg');
        bgs[indiceModo].classList.add('ativabg');

        const tituloAtiva = document.querySelector('.ativaH');
        tituloAtiva.classList.remove('ativaH');
        titulos[indiceModo].classList.add('ativaH');

        const descAtiva = document.querySelector('.ativaD');
        descAtiva.classList.remove('ativaD');
        descriptions[indiceModo].classList.add('ativaD');
        //até aqui ok ==============================================================================================   
    })         
})

let indice = 0;
function automatizarCarrossel () {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');

    modos.forEach((modoClicado) => {
                   modoClicado.addEventListener('click', () => {
                        indice = 0;
                   })         
                })

    // imagens.forEach((modoClicado) => {
    //     modoClicado.addEventListener('click', () => {
    //         indice = 0;
    //     })         
    // })
    indice++;
    if(indice > imagens.length-1) {
        indice = 0;
    }
    
    // imagens.forEach((idx) => {
    //     const imagemAtiva = document.querySelector('.ativa');
    //     imagemAtiva.classList.remove('ativa');
    // })
    

    imagens[indice].classList.add('ativa');
}
setInterval(automatizarCarrossel, 2500);



// imagens.forEach((indice) => {
//     function automatizarCarrossel () {

//         modos.forEach((modoClicado) => {
//             modoClicado.addEventListener('click', () => {
//                 indice = 0;
//             })         
//         })

//         indice ++;

//         if(indice > imagens.length-1) {
//             indice = 0;
//         }        

//         const botaoSelecionado = document.querySelector('.selecionado'); 
//         botaoSelecionado.classList.remove('selecionado');

//         const imagemAtiva = document.querySelector('.ativa');
//         imagemAtiva.classList.remove('ativa');

//         imagens[indice].classList.add('ativa');
//     }
//     setInterval(automatizarCarrossel, 2000);

    //============================================================================
        
    // botaoClicado.addEventListener('click', () => {
    //     const botaoSelecionado = document.querySelector('.selecionado'); 
    //     botaoSelecionado.classList.remove('selecionado');
    //     botaoClicado.classList.add('selecionado'); //var/arg "botao" esta ainda com o botao q foi clicado com o for sendo assim ele já aproveita e usa a instrução de add uma class qualquer, no caso, 'selecionado'.

    //     // 5 - Esconder a imagem de fundo anterior, q esta ativa (no caso só remover a class "ativa" do img)
    //     const imagemAtiva = document.querySelector('.ativa');
    //     imagemAtiva.classList.remove('ativa');
        
    //     // 6 - Fazer aparecer a imagem de fundo correspondente ao botão clicado.
    //     // console.log('Imagem/botao clicada é: ' + indiceBtClicado);
    //     imagens[indiceBtClicado].classList.add('ativa');
    // })     
//})