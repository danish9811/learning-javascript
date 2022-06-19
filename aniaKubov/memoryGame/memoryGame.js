const cardArray = [{
    name: 'blank',
    img: 'images/blank.png'
}, {
    name: 'cheeseburger',
    img: 'images/cheeseburder.png'
}, {
    name: 'fries',
    img: 'images/fries.png'
}, {
    name: 'hotdog',
    img: 'images/hotdog.png'
}, {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
}, {
    name: 'milkshake',
    img: 'images/milkshake.png'
}, {
    name: 'pizza',
    img: 'images/pizza.png'
}, {
    name: 'white',
    img: 'images/white.png'
}, {
    name: 'fries',
    img: 'images/fries.png'
}, {
    name: 'white',
    img: 'images/white.png'
}, {
    name: 'hotdog',
    img: 'images/hotdog.png'
}, {
    name: 'milkshake',
    img: 'images/milkshake.png'
},
]

// shorter way of shuffling the array
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)
        // console.log(card, i)
    }
}

createBoard()
