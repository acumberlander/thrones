import { charactersBuilder } from "./components/characters.js";
import {getCharacters} from "./data/charactersData.js"
import {sortEvents} from "./components/characters.js"

const initializeApp = () => {
    // charactersBuilder();
    getCharacters();
    sortEvents();
    // console.log("What's up");
    
}

initializeApp();