import TopBar from "./top/TopBar"
import DinoGame from "./game/DinoGame"
import Nav from "./nav/Nav"
import Notes from "./notes/Notes"
import Work from "./work/Work"
import Maps from "./maps/Maps"
import Trash from "./trash/Trash"

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
        this.title = "Pradene"

        this.nav = new Nav()
        this.topbar = new TopBar(this.title)
        this.game = new DinoGame("Dino Game")
        this.notes = new Notes("Notes")
        this.work = new Work("Works")
        this.maps = new Maps("Maps")
        this.trash = new Trash("Trash")
    }
}