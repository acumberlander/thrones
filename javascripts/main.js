import { charactersBuilder } from "./components/characters.js";
import {getCharacters} from "./data/charactersData.js"

const initializeApp = () => {
    // charactersBuilder();
    getCharacters();
    // console.log("What's up");
    
}

initializeApp();