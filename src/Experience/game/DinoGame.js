import Experience from "../Experience";

export default class DinoGame
{
    constructor()
    {
        this.experience = new Experience()
        this.nav = this.experience.nav

        this.windowOpen = false

        this.createNav()

        
        this.navButton.onclick = () =>
        {
            if(this.windowOpen === false)
            {
                this.createWindow()
            }
        }
    }

    createNav()
    {
        this.navButton = document.createElement("span")
        this.navButton.classList.add("navItem")
        this.nav.navChild.appendChild(this.navButton)
    }

    createWindow()
    {
        this.windowOpen = true

        this.window = document.createElement("div")
        this.window.classList.add("window")
        this.experience.main.appendChild(this.window)

        this.closeButton = document.createElement("span")
        this.closeButton.classList.add("closeButton")
        this.window.appendChild(this.closeButton)

        this.closeButton.onclick = () =>
        {
            this.killWindow()
        }
    }

    killWindow()
    {
        this.window.remove()

        this.windowOpen = false
    }
}