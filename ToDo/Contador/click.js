const span = document.getElementById('span');
let contador = 0;

const container = document.querySelector('.container')

container.addEventListener('click', (e)=>{
    //console.log (e.target);
    //console.log (e.target.classList.contains('btn-info'));
    if(e.target.classList.contains('btn-info')){
        contador++
        span.textContent = contador
    };
    if(e.target.classList.contains('btn-danger')){
        contador--
        span.textContent = contador
    };
    e.stopPropagation();
});










/*  const btnAumentar = document.querySelector('.btn-info');

    btnAumentar.addEventListener("click", () => {
    console.log ("diste click en btnAumentar")
    contador++
    span.textContent = contador
});


const btnDisminuir = document.querySelector('.btn-danger')

btnDisminuir.addEventListener("click", () => {
    console.log ("diste click en btnDisminuir")
    contador--
    span.textContent = contador
});*/



