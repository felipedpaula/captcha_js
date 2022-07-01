// Declarações ----------------------------------------------------
let num1;
let num2;

let elementN1 = document.querySelector('.num1');
let elementN2 = document.querySelector('.num2');

let btnChallenge = document.querySelector('.btn-challenge');
let operation = document.querySelector('.numbers');

let btnResponder = document.querySelector('.btn-responder');

// Prepara o desafio ----------------------------------------------
function getChanllenge() {
    num1 = Math.round(Math.random() * (1 - 9) + 9);
    num2 = Math.round(Math.random() * (1 - 9) + 9);
    
    elementN1.innerHTML = num1;
    elementN2.innerHTML = num2;

    btnChallenge.innerHTML = 'Atualizar';
    operation.style.display = 'flex';
    btnResponder.style.display = 'flex';
}

// Checa a resposta e envia o formulário caso esteja correto ------
function checkAnswer() {
    let userResp = document.querySelector('#userResp').value;
    let resp = parseInt(elementN1.innerHTML) + parseInt(elementN2.innerHTML);

    if(userResp == resp) {
        
        // envia a requisição
        alert('mensagem enviada com sucesso!');

    } else {
        alert('Resposta errada! Tente novamente');
        getChanllenge();
    }
}