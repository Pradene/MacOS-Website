import Window from "../Window"

export default class Work extends Window
{
    constructor(name)
    {
        super(name)

        this.createNav()
        
        this.navButton.addEventListener('click', () =>
        {
            if(this.windowOpen === false)
            {
                this.createWindow()
                this.initWork()
            }
        })
    }

    initWork()
    {
        this.sidebar = document.createElement("div")
        this.sidebar.classList.add("sidebar")
        this.window.appendChild(this.sidebar)

        this.sidebarFav = document.createElement("span")
        this.sidebarFav.innerText = "Favorites"
        this.sidebarFav.classList.add("sidebarTextS")
        this.sidebar.appendChild(this.sidebarFav)

        this.sidebarWork = document.createElement("span")
        this.sidebarWork.innerText = "Works"
        this.sidebarWork.classList.add("sidebarTextM")
        this.sidebarWork.classList.add("selected")
        this.sidebar.appendChild(this.sidebarWork)
    }
}