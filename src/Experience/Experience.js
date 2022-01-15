import TopBar from "../top/TopBar"
import DinoGame from "./game/DinoGame"
import Nav from "./nav/Nav"
import Notes from "./notes/Notes"

let instance = null

export default class Experience
{
    constructor()
    {
        // Instance
        if(instance)
        {
            return instance
        }

        instance = this

        // Setup
        this.main = document.getElementById('main')

        this.nav = new Nav()
        this.topbar = new TopBar()
        this.game = new DinoGame("Dino Game")
        this.notes = new Notes("Notes")
    }
}