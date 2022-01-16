import Clock from "../clock/Clock"
import Experience from "../Experience"

export default class TopBar
{
    constructor(title)
    {
        this.experience = new Experience()
        this.main = this.experience.main

        this.titleName = title

        this.create()
        this.clock = new Clock(this.topbar)
    }

    create()
    {
        this.topbar = document.createElement("div")
        this.topbar.classList.add("topbar")
        this.main.appendChild(this.topbar)

        this.title = document.createElement("h1")
        this.title.innerText = this.titleName
        this.title.classList.add("title")
        this.topbar.appendChild(this.title)
    }
}