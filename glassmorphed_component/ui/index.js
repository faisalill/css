let bg_circle = document.querySelector('.bg_circle');
let list = document.querySelectorAll('ul li');
function moveIndicator (e){
    bg_circle.style.left = e.offsetLeft+'px';
    bg_circle.style.width = e.offsetWidth + 'px';
}
list.forEach(link=> {
    link.addEventListener('mousemove', (e)=>{
        moveIndicator(e.target)
    })
})