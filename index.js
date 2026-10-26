const cofre1 = document.getElementById('cofre1')
const cofre2 = document.getElementById('cofre2')
const cofre3 = document.getElementById('cofre3')
const mensagem = document.getElementById('mensagem')
const tentativas = document.getElementById('tentativas')
const vitorias = document.getElementById('vitorias')
const jogarnovamente = document.getElementById('jogarnovamente')
const cofrePremiado = Math.floor(Math.random() * 3) + 1;
let tentativa = 0;
function abrirCofre(numeroEscolhido){
    console.log(numeroEscolhido + ' e ' + cofrePremiado)
    if(numeroEscolhido == cofrePremiado){
        mensagem.textContent = "voçe foi premiado"

    } else {
        tentativa++;
        tentativas.textContent = "suas tentativas: " + tentativa

    }
}

cofre1.addEventListener("click", function() {
    mensagem.textContent = "Você escolheu o numero 1"
    abrirCofre(1)
})



cofre2.addEventListener("click", function() {
    mensagem.textContent = "Você escolheu o numero 2"
    abrirCofre(2)
  

})


cofre3.addEventListener("click", function() {
    mensagem.textContent = "Você escolheu o numero 3"
    abrirCofre(3)
})





/* const buttons = document.querySelectorAll('button');buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const selectedButton = event.target;
        const cofre1 = document.getElementById('cofre1');
        const cofre2 = document.getElementById('cofre2');
        const cofre3 = document.getElementById('cofre3');

        if (selectedButton === cofre1) {
            mensagem.textContent = "voçe abriu o cofre 1";
        } else if (selectedButton === cofre2) {
            mensagem.textContent = "voçe abriu o cofre 2";
        } else if (selectedButton === cofre3) {
            mensagem.textContent = "voçe abriu o cofre 3";
        }

        Math.flor(math.randon) *3) + 1

       

   }); */