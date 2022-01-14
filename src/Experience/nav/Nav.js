import Experience from "../Experience"

export default class Nav
{
    constructor()
    {
        this.experience = new Experience()
        
        this.create()
    }

    create()
    {
        this.nav = document.createElement("div")
        this.nav.classList.add("nav")
        this.experience.main.appendChild(this.nav)

        this.navChild = document.createElement("div")
        this.nav.appendChild(this.navChild)
    }
}