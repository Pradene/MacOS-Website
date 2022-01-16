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
            }
        })
    }
}