import Window from "../Window"

export default class Notes extends Window
{
    constructor(name, cover)
    {
        super(name, cover)

        this.navButton.addEventListener('click', () =>
        {
            if(this.windowOpen === false)
                this.createWindow()
        })
    }
}