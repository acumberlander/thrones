import {printToDom} from "../helpers/util.js";

console.log("characters.js working");

const characters = [
    {name: "John Snow", house: "Stark", imageUrl: "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553"},
    {name: "Daenerys Targaryen", house: "Targaryen", imageUrl: "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553"},
    {name: "Cersei Lannister", house: "Lannister", imageUrl: "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553"},
    {name: "Tyrion Lannister", house: "Lannister", imageUrl: "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553"}
];
console.log(characters);

const charactersBuilder = () => {
    let domString = "";
    characters.forEach((character) => {
        domString += `<div class= "col-2 character">`;
        domString += `<div class="card">`;
        domString += `<img class="card-img-top" src="${character.imageUrl}" alt="${character.name}">`
        domString += `<div class="card-body">`
        domString += `<h5 class="card-title">${character.name}</h5>`
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
    });
    printToDom(domString);
}

export {charactersBuilder};