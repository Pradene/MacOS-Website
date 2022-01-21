import Window from "../Window"

export default class Notes extends Window
{
    constructor(name, cover)
    {
        super(name)

        this.createNav()

        this.cover = cover
        
        this.navButton.style.backgroundImage = `url(${this.cover})`
        this.navButton.addEventListener('click', () =>
        {
            if(this.windowOpen === false)
            {
                this.createWindow()
            }
        })
    }
}