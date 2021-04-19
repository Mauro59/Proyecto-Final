const buttom_menu = document.querySelector('.buttom-menu')
const menu = document.querySelector('.menu-navegation')

console.log(menu)
console.log(buttom_menu)

buttom_menu.addEventListener('click', ()=>{
    menu.classList.toggle('spread')
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
        && e.target != menu && e.target != buttom_menu){
            menu.classList.toggle('spread')
    }
})