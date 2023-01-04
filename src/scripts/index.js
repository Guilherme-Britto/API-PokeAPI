
function renderCards(array){

    console.log(array)
    const ul = document.querySelector(".pokemon_list")

    ul.innerText = ''

    array.forEach(element => {

        const card = createCard(element)
        // console.log(card)
        ul.appendChild(card)
    });
}

function createCard({name, url, id}){
    const li = document.createElement('li')
    const image = document.createElement('img')

    if(!id){
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url.slice(34, -1)}.png`
    }
    else{
        image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    }


    const p = document.createElement('p')
    p.innerText = name

    li.append(image, p)

    return li
}