import Experience from "./Experience"

export default class Window
{
    constructor(name)
    {
        this.experience = new Experience()
        this.main = this.experience.main
        this.nav = this.experience.nav

        this.windowOpen = false
        this.name = name
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
        this.main.appendChild(this.window)

        this.window__bar = document.createElement("div")
        this.window__bar.classList.add("window__bar")
        this.window.appendChild(this.window__bar)

        this.window__closeButton = document.createElement("span")
        this.window__closeButton.classList.add("window__closeButton")
        this.window__bar.appendChild(this.window__closeButton)

        this.window__name = document.createElement("span")
        this.window__name.classList.add("window__name")
        this.window__name.innerText = this.name
        this.window__bar.appendChild(this.window__name)
        

        window.addEventListener('mousedown', (e) =>
        {
            this.windowActive(e)
        })

        this.window__closeButton.addEventListener('click', () =>
        {
            window.removeEventListener('mousedown', this.windowActive)
            this.killWindow()
        })

        this.window__bar.addEventListener('mousedown', (e) =>
        {
            e.preventDefault()
            this.moveWindow(e)
        })

        this.experience.trash.navButton.addEventListener('click', () =>
        {
            window.removeEventListener('mousedown', this.windowActive)
            this.killWindow()
        })
    }

    windowActive(e)
    {
        if(e.target.classList.contains("window") && e.target !== this.window)
        {
            this.window.style.zIndex = 0
            e.target.style.zIndex = 1
        }
        else if(e.target.classList.contains("window__bar") && e.target !== this.window__bar)
        {
            this.window.style.zIndex = 0
            e.target.parentElement.style.zIndex = 1
        }
        else if(e.target === this.navButton)
        {
            this.windows = document.querySelectorAll('.window')
            for (let i = 0; i < this.windows.length; i++)
                this.windows[i].style.zIndex = 0
            
            this.window.style.zIndex = 1
        }
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
            e.preventDefault()
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