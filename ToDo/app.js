const lista = document.getElementById("lista");


const arrayLista = ['item 1', 'item 2', 'item 3'] 

const template = document.querySelector('#template-li').content;

const fragment = document.createDocumentFragment();

arrayLista.forEach(item=>{
//    template.querySelector(".list span .text-danger").textContent = item;
    template.querySelector("span").textContent = item;
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
})

lista.appendChild(fragment);