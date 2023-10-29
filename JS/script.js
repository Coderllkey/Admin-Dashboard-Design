

let asideBtn = document.querySelector('.aside-btn');
let aside = document.querySelector('.aside');
let cover = document.querySelector('.cover');
let listGP = document.querySelectorAll('.list-group-item');

asideBtn.addEventListener('click', ( ) => {
    aside.classList.add('show');
    cover.classList.add('offcanvas-backdrop');
    cover.classList.add('show');
    cover.classList.add('fade');
});

cover.addEventListener('click', ()=>{
    aside.classList.remove('show');
    cover.classList.remove('offcanvas-backdrop');
    cover.classList.remove('show');
    cover.classList.remove('fade');
});

for (const x in listGP) {
 let list = listGP[x];
 list.addEventListener('click', ()=>{
    list.classList.add('active');
 })
}


//chart js

//datatable
new DataTable('#example');
