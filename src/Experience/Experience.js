import DinoGame from "./game/DinoGame"
import Nav from "./nav/Nav"

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
        this.game = new DinoGame()
    }
}