document.getElementById('sum').addEventListener("click", yhteen);
document.getElementById('sub').addEventListener("click", vahennys);
document.getElementById('multi').addEventListener("click", kerto);
document.getElementById('div').addEventListener("click", jako);

const ekaluku=document.getElementById('num1');
const tokaluku=document.getElementById('num2');
const p = document.getElementById('vastaus');

function yhteen(){
p.innerText =  parseInt(ekaluku.value) + parseInt(tokaluku.value);

}

function vahennys(){
    p.innerText = ekaluku.value - tokaluku.value;

}

function kerto(){
    p.innerText = ekaluku.value * tokaluku.value;

}

function jako(){
    p.innerText = ekaluku.value / tokaluku.value;

}