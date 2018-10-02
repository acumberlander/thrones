import {printToDom} from "../helpers/util.js";

console.log("characters.js working");

const characters = [
    {name: "John Snow", house: "Stark", imageUrl: "blahblah"},
    {name: "Daenerys Targaryen", house: "Targaryen", imageUrl: "blahblah"},
    {name: "Cersei Lannister", house: "Lannister", imageUrl: "blahblah"},
    {name: "Tyrion Lannister", house: "Lannister", imageUrl: "blahblah"}
];
console.log(characters);

const charactersBuilder = () => {
    let domString = "";
    characters.forEach((character) => {
        domString += `<h4>${character.name}</h4>`;
        domString += `<h4>${character.house}</h4>`;
        domString += `<h4>${character.imageUrl}</h4>`;
    });
    printToDom(domString);
}

export {charactersBuilder};