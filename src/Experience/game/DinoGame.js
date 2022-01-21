import Window from "../Window"

export default class DinoGame extends Window
{
    constructor(name)
    {
        super(name)

        this.position = 0
        this.score = 0
        this.highScore = 0
        this.isJumping = false
        this.start = false
        this.defeat = false

        this.createNav()

        
        this.navButton.addEventListener('click', () =>
        {
            if(this.windowOpen === false)
            {
                this.createWindow()
                this.initGame()
            }
        })
    }

    initGame()
    {
        this.dino = document.createElement("span")
        this.dino.classList.add("dino")
        this.window.appendChild(this.dino)

        this.floor = document.createElement("span")
        this.floor.classList.add("floor")
        this.window.appendChild(this.floor)

        this.scoreText = document.createElement("span")
        this.scoreText.classList.add("score")
        this.window.appendChild(this.scoreText)

        this.highScoreText = document.createElement("span")
        this.highScoreText.classList.add("highScore")
        this.window.appendChild(this.highScoreText)


        window.addEventListener('keydown', (e) =>
        {
            if(e.key === " " && !this.defeat)
            {
                if(!this.isJumping)
                {
                    this.isJumping = true
                    this.jump()
                }
            }

            if(!this.start)
            {
                this.start = true
                this.scoreIncrement()
                this.game()
            }
        })

        this.window__closeButton.addEventListener('click', () =>
        {
            this.score = 0
            this.highScore = 0
            this.start = false
            this.defeat = false
            window.clearInterval(this.increment)
        })

        this.experience.trash.navButton.addEventListener('click', () =>
        {
            this.score = 0
            this.highScore = 0
            this.start = false
            this.defeat = false
            window.clearInterval(this.increment)
        })
    }

    jump()
    {
        this.dino.classList.add("jump")
        setTimeout(() => 
        {
            this.isJumping = false
            this.dino.classList.remove("jump")
        }, 400)
    }

    scoreIncrement()
    {
        this.scoreText.innerText = `Score : ${this.score}` 

        this.increment = setInterval(() => {
            if (!this.defeat) {
                this.score++
                this.scoreText.innerText = `Score : ${this.score}`
            }
        }, 200)
    }

    game()
    {
        let position = 700
        let obstacle = document.createElement("span")
        obstacle.classList.add("obstacle")
        obstacle.style.left = `${position}px`
        this.window.appendChild(obstacle)

        const interval = setInterval(() => {
            this.dinoPosition = parseInt(window.getComputedStyle(this.dino).getPropertyValue("bottom"))
            if((this.dinoPosition <= 90 && position >= 20 && position <= 80) || this.defeat)
            {
                this.defeat = true
                window.clearInterval(interval)
                obstacle.remove()

                if(this.score > this.highScore)
                {
                    this.highScore = this.score
                    this.highScoreText.innerText = `best : ${this.highScore}`
                }
            }
            else if(position <= -50)
            {
                obstacle.remove()
                window.clearInterval(interval)
            }
            else
            {
                position -= 20
                obstacle.style.left = `${position}px`
            }
        }, 25)

        if(!this.defeat) setTimeout(() => this.game(), Math.round(Math.random() * 500 + 500))

        if (this.defeat) this.restart()
    }

    restart()
    {
        this.restartButton = document.createElement("span")
        this.restartButton.classList.add("restartButton")
        this.restartButton.innerText = "Restart"
        this.window.appendChild(this.restartButton)

        this.restartButton.addEventListener('click', () =>
        {
            this.score = 0
            this.defeat = false
            this.restartButton.remove()
            this.game()
        })
    }
}