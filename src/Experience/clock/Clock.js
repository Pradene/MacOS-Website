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

        this.month = this.now.getMonth()

        switch (this.month) {
            case 0:
                this.monthFormatted = "Jan"
                break;

            case 1:
                this.monthFormatted = "Feb"
                break;

            case 2:
                this.monthFormatted = "Mar"
                break;

            case 3:
                this.monthFormatted = "Apr"
                break;

            case 4:
                this.monthFormatted = "May"
                break;

            case 5:
                this.monthFormatted = "Jun"
                break;

            case 6:
                this.monthFormatted = "Jul"
                break;

            case 7:
                this.monthFormatted = "Aug"
                break;

            case 8:
                this.monthFormatted = "Sep"
                break;

            case 9:
                this.monthFormatted = "Oct"
                break;

            case 10:
                this.monthFormatted = "Nov"
                break;

            case 11:
                this.monthFormatted = "Dec"
                break;
        
            default:
                break;
        }

        this.date = this.now.getDate()

        this.day = this.now.getDay()

        switch (this.day) {
            case 0:
                this.dayFormatted = "Sun"
                break;

            case 1:
                this.dayFormatted = "Mon"
                break;

            case 2:
                this.dayFormatted = "Tue"
                break;

            case 3:
                this.dayFormatted = "Wed"
                break;

            case 4:
                this.dayFormatted = "Thu"
                break;

            case 5:
                this.dayFormatted = "Fri"
                break;

            case 6:
                this.dayFormatted = "Sat"
                break;
        
            default:
                break;
        }

        this.hour = this.now.getHours()
        this.minute = this.now.getMinutes()

        this.minuteFormatted = this.minute.toString().padStart(2, "0")
        
        this.timeFormatted = `${this.dayFormatted} ${this.date} ${this.monthFormatted} ${this.hour}:${this.minuteFormatted}`


        this.clock.innerText = this.timeFormatted
    }

    update()
    {
        this.time()

        setInterval(() => this.time(), 1000)
    }
}