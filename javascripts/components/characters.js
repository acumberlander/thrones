import {printToDom} from "../helpers/util.js";

console.log("characters.js working");

const characters = [
    {id: "character1", name: "John Snow", house: "Stark", imageUrl: "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553"},
    {id: "character2", name: "a", house: "Targaryen", imageUrl: "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553"},
    {id: "character3", name: "b", house: "Lannister", imageUrl: "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553"},
    {id: "character4", name: "c", house: "Lannister", imageUrl: "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553"}
];
console.log(characters);

const characterClick = (e) => {
    const characterId = e.target.closest('.character-card').id;
    const currentCharacter = characters.find(x => {
        return x.id === characterId
});
    console.log(currentCharacter);
    
}

const createEvents = () => {
    const characterCards = document.getElementsByClassName("character-card");
    for(let i=0; i<characterCards.length; i++) {
        characterCards[i].addEventListener('click', characterClick);
    }
}

const charactersBuilder = () => {
    let domString = "";
    characters.forEach((character) => {
        domString += `<div class= "col-2 character-card" id="${character.id}">`;
        domString += `<div class="card">`;
        domString += `<img class="card-img-top" src="${character.imageUrl}" alt="${character.name}">`
        domString += `<div class="card-body">`
        domString += `<h5 class="card-title">${character.name}</h5>`
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
    });
    printToDom(domString);
    createEvents();
}

export {charactersBuilder};