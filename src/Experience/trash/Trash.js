import Experience from "../Experience"

export default class Trash
{
    constructor(cover)
    {
        this.experience = new Experience()
        this.nav = this.experience.nav

        this.createNav()
    
        this.navButton.style.backgroundImage = `url(${cover})`
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