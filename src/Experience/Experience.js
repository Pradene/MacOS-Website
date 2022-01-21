import TopBar from "./top/TopBar"
import DinoGame from "./game/DinoGame"
import Nav from "./nav/Nav"
import Notes from "./notes/Notes"
import Work from "./work/Work"
import Maps from "./maps/Maps"
import Trash from "./trash/Trash"

import filesCover from '../../static/folders.png'
import notesCover from '../../static/notes.png'

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
        this.filesCover = filesCover
        this.notesCover = notesCover

        console.log(this.cover)

        this.topbar = new TopBar(this.title)
        this.nav = new Nav()
        this.game = new DinoGame("Dino Game")
        this.notes = new Notes("Notes", this.notesCover)
        this.work = new Work("Files", this.filesCover)
        this.maps = new Maps("Maps")
        this.trash = new Trash("Trash")
    }
}