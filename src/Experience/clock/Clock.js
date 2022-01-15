import Experience from "../Experience"

export default class Clock
{
    constructor(parent)
    {
        this.experience = new Experience()
        this.parent = parent

        this.create()
        this.update()
    }

    create()
    {
        this.clock = document.createElement("div")
        this.clock.classList.add("clock")
        this.parent.appendChild(this.clock)
    }

    time()
    {
        this.now = new Date()

        this.year = this.now.getUTCFullYear()
        this.month = this.now.getMonth() + 1
        this.day = this.now.getDate()

        this.hour = this.now.getHours()
        this.minute = this.now.getMinutes()

        this.minuteFormatted = this.minute.toString().padStart(2, "0")
        
        this.timeFormatted = `${this.hour}:${this.minuteFormatted} ${this.day}/${this.month}/${this.year}`


        this.clock.innerText = this.timeFormatted
    }

    update()
    {
        this.time()

        setInterval(() => this.time(), 1000)
    }
}