let arrowDown = document.querySelectorAll('.arrowDown')
if(arrowDown){
    arrowDown.forEach(arrow=>{
        arrow.addEventListener('click', (e)=>{
            let parent =  e.target.parentNode;
            parent.classList.toggle('cardActive')
        })
    })
}

//menu hamb

let btnMenu = document.getElementById('iconosMenu');
let bars = document.getElementById('bars');
let cruz = document.getElementById('cruz');
let navegador = document.getElementById('navegador')
btnMenu.addEventListener('click', ()=>{
    navegador.classList.toggle('menuActive')
    if(navegador.classList.contains('menuActive')){
        cruz.classList.add('iconActive');
        bars.classList.remove('iconActive');
    }else{
        bars.classList.add('iconActive');
        cruz.classList.remove('iconActive');
    }
})
