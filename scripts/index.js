let arrowDown = document.querySelectorAll('.arrowDown')
arrowDown.forEach(arrow=>{
    arrow.addEventListener('click', (e)=>{
        let parent =  e.target.parentNode;
        parent.classList.toggle('cardActive')
    })
})