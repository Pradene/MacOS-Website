import Experience from "../Experience/Experience"

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

        this.hour = this.now.getHours()
        this.minute = this.now.getMinutes()
        this.second = this.now.getSeconds()

        this.minuteFormatted = this.minute.toString().padStart(2, "0")
        this.secondFormatted = this.second.toString().padStart(2, "0")
        this.timeFormatted = `${this.hour}:${this.minuteFormatted}:${this.secondFormatted}`


        this.clock.innerText = this.timeFormatted
    }

    update()
    {
        this.time()

        setInterval(() => this.time(), 500)
    }
}