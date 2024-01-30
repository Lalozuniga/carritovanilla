const cards = document.getElementById('cards');
const items = document.getElementById('items');
const footer = document.getElementById('footer');
const templateCard = document.getElementById('template-cards').content;
const fragment = document.createDocumentFragment();

let carrito = {}

//eventos de mi sitio web
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

//funciones del website
const fetchData = async () => {
    const res = await fetch('./db/productos.json')
    const data = await res.json()
    pintarCards(data)
    //console.log('@@@@@ productos => ', data)
}

const pintarCards = productos => {
    productos.forEach(item =>{
        templateCard.querySelector('h5').textContent = item.titulo
        templateCard.querySelector('p').textContent = item.precio
        templateCard.querySelector('button').dataset.id = item.id
        templateCard.querySelector('img').setAttribute('src', item.urlProducto)

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}