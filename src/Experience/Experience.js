import TopBar from "./top/TopBar"
import DinoGame from "./game/DinoGame"
import Nav from "./nav/Nav"
import Notes from "./notes/Notes"
import Work from "./work/Work"
import Maps from "./maps/Maps"
import Trash from "./trash/Trash"

import filesCover from '../../static/folders.png'
import notesCover from '../../static/notes.png'
import plansCover from '../../static/plans.png'
import trashCover from '../../static/trash.png'

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
        this.plansCover = plansCover
        this.trashCover = trashCover

        this.topbar = new TopBar(this.title)
        this.nav = new Nav()
        this.game = new DinoGame("Dino Game")
        this.notes = new Notes("Notes", this.notesCover)
        this.maps = new Maps("Plans", this.plansCover)
        this.work = new Work("Files", this.filesCover)
        this.trash = new Trash(this.trashCover)
    }
}