const imagenes = document.querySelectorAll('.img-gallery')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const buttom_menu1 = document.querySelector('.buttom-menu');

console.log('imagenes')
console.log('imageneslight')
console.log('contenedorLight')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', () =>{
        aparecerImagen(imagen.getAttribute('src'))
        
    })
})

contenedorLight.addEventListener('click', (e) =>{
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImagen')
    buttom_menu1.style.opacity = '1'
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImagen')
    buttom_menu1.style.opacity = '0'
}