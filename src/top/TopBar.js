import Clock from "../clock/Clock"
import Experience from "../Experience/Experience"

export default class TopBar
{
    constructor()
    {
        this.experience = new Experience()
        this.main = this.experience.main

        this.create()
        this.clock = new Clock(this.topbar)
    }

    create()
    {
        this.topbar = document.createElement("div")
        this.topbar.classList.add("topbar")
        this.main.appendChild(this.topbar)
    }
}