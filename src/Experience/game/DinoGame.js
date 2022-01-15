import Experience from "../Experience";

export default class DinoGame
{
    constructor()
    {
        this.experience = new Experience()
        this.nav = this.experience.nav

        this.windowOpen = false
        this.name = "Dinosaur Game"

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

        this.bar = document.createElement("div")
        this.bar.classList.add("bar")
        this.window.appendChild(this.bar)

        this.closeButton = document.createElement("span")
        this.closeButton.classList.add("closeButton")
        this.bar.appendChild(this.closeButton)

        this.windowName = document.createElement("span")
        this.windowName.classList.add("windowName")
        this.windowName.innerText = this.name
        this.bar.appendChild(this.windowName)

        this.closeButton.onclick = () =>
        {
            this.killWindow()
        }

        this.bar.addEventListener('mousedown', (e) =>
        {
            this.moveWindow(e)
        })
    }

    killWindow()
    {
        this.window.remove()

        this.windowOpen = false
    }

    moveWindow(e)
    {
        let prevX = e.clientX
        let prevY = e.clientY

        let rect = this.window.getBoundingClientRect()

        this.mouseMove = (e) =>
        {
            let newX = e.clientX - prevX
            let newY = e.clientY - prevY

            this.window.style.top = `${rect.top + newY}px`
            this.window.style.left = `${rect.left + newX}px`
        }

        window.addEventListener('mousemove', this.mouseMove)


        this.mouseUp = () =>
        {
            window.removeEventListener('mousemove', this.mouseMove)
            window.removeEventListener('mouseup', this.mouseUp)
        }

        window.addEventListener('mouseup', this.mouseUp)
    }
}