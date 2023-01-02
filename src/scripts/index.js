
function renderCards(array){

    const ul = document.querySelector(".pokemon_list")

    ul.innerText = ''
    console.log(array)
    array.forEach(element => {
        const card = createCard(element)
        console.log(card)
        ul.appendChild(card)
    });
}

function createCard({name}){
    const li = document.createElement('li')
    const image = document.createElement('img')
    image.src = './src/assets/1 2.svg'

    const p = document.createElement('p')
    p.innerText = name

    li.append(image, p)

    return li
}