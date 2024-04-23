const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const formBox2 = document.getElementById('form-box2');
const formBox = document.getElementById('form-box');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const conSenha = document.getElementById('conSenha');
const endereco = document.getElementById('endereco');
const anoInput = document.getElementById('ano');
const horaInput = document.getElementById('hora');
const tel = document.getElementById('telefone');
const output = document.getElementById('output');
const campoTexto = document.getElementById('campoTexto');
const form = document.getElementById('form');
const res = document.getElementById('res');

var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (nomeInput.value === "") {
        alert('Por favor, preencha o nome.');
        return;
    }
    
    if (emailInput.value === "" || !emailValidacao(emailInput.value)) {
        alert('Por favor, insira um email válido!');
        return;
    }
    
    if (!senhaValidacao(senhaInput.value, 8, 20)) {
        alert('A senha precisa ter no mínimo 8 e no máximo 20 dígitos.');
        return;
    }

    if (conSenha.value != senhaInput.value) {
        alert('As senhas precisam ser as mesmas.');
        return;
    }

    if (endereco.value === "") {
        alert('Por favor, preencha o endereço.');
        return;
    }

    if (anoInput.value === "") {
        alert('Por favor, preencha o dia da consulta.')
        return;
    }

    if (horaInput.value === "") {
        alert('Por favor, preencha o horário da consulta.')
        return;
    }

    if (tel.value === "" || !telValidacao(tel.value)) {
        alert('Por favor, insira um número de telefone válido');
        return;
    }
    
    show();
});

function emailValidacao(email) {
    const emailRegex = new RegExp (
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}

function senhaValidacao(password, minDigits, maxDigits) {
    if (password.length >= minDigits && password.length <= maxDigits) {
        return true;
    }

    return false;
}

function telValidacao(telefone) {
    const telRegex = new RegExp (
        /^([0-9]{2})[0-9]{9}$/
    );

    if (telRegex.test(telefone)) {
        return true;
    }

    return false;
}

function show() {
    var ano = anoInput.value.slice(0, 4);
    var mes = anoInput.value.slice(6, 7);
    var dia = anoInput.value.slice(8, 10);
    
    res.innerHTML = `Nome: ${nomeInput.value}<br>`,
    res.innerHTML += `E-mail: ${emailInput.value}<br>`,
    res.innerHTML += `Senha: ${senhaInput.value}<br>`,
    res.innerHTML += `Endereço: ${endereco.value}<br>`,
    res.innerHTML += `Consulta: ${dia} de ${meses[mes - 1]} de ${ano} às ${horaInput.value}<br>`,
    res.innerHTML += `Celular: ${tel.value}`;
    
    formBox.style.display = "none";
    output.style.display = "flex";
    btn2.style.display = "flex";
}