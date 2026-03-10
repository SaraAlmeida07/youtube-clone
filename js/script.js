const botaoTresPontos = document.getElementById('abrir-mdp');
const modal = document.getElementById('modal-pontinhos');
const btnInscricao = document.getElementById('botao-inscricao');
const statusSalvo = localStorage.getItem('statusInscricao');


//Modal Três pontinhos//
botaoTresPontos.addEventListener('click', function () {
    modal.style.display = 'flex';
    console.log("O modal abriu!");
});

modal.addEventListener('click', function () {
    modal.style.display = 'none';
    console.log("O modal fechou!");
});

btnInscricao.addEventListener('click', function () {
    if (btnInscricao.innerText === "Subscribe") {

        btnInscricao.innerText = "Subscribed";
        btnInscricao.style.backgroundColor = "#303030";
        btnInscricao.style.color = "#ffffff";
        localStorage.setItem('statusInscricao', 'inscrito');

    } else {

        btnInscricao.innerText = "Subscribe";
        btnInscricao.style.backgroundColor = "#ffffff"; // Volta para o branco original
        btnInscricao.style.color = "#0f0f0f";
        localStorage.setItem('statusInscricao', 'nao-inscrito');
    }
});

if (statusSalvo === 'inscrito') {
    btnInscricao.innerText = "Subscribed";
    btnInscricao.style.backgroundColor = "#303030";
    btnInscricao.style.color = "#ffffff";
}