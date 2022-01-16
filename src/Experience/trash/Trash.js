import Experience from "../Experience"

export default class Trash
{
    constructor()
    {
        this.experience = new Experience()
        this.nav = this.experience.nav

        this.createNav()
    }

    createNav()
    {
        this.separator = document.createElement("span")
        this.separator.classList.add("navSeparator")
        this.nav.navChild.appendChild(this.separator)
        this.navButton = document.createElement("span")
        this.navButton.classList.add("navItem")
        this.nav.navChild.appendChild(this.navButton)
    }
}