import Window from "../Window"

export default class DinoGame extends Window
{
    constructor(name)
    {
        super(name)

        this.position = 0
        this.score = 0
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
        this.defeat = false
        this.score = 0

        this.dino = document.createElement("span")
        this.dino.classList.add("dino")
        this.window.appendChild(this.dino)

        this.scoreText = document.createElement("span")
        this.scoreText.classList.add("score")
        this.window.appendChild(this.scoreText)


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

    game()
    {
        let position = 700
        let obstacle = document.createElement("span")
        obstacle.classList.add("obstacle")
        obstacle.style.left = `${position}px`
        this.window.appendChild(obstacle)

        setInterval(() => {
            this.dinoPosition = parseInt(window.getComputedStyle(this.dino).getPropertyValue("bottom"))
            if(this.dinoPosition <= 90 && position >= 20 && position <= 80)
            {
                this.defeat = true
            }
            else
            {
                position -= 18
                obstacle.style.left = `${position}px`

                if(position <= -50 || this.defeat)
                {
                    obstacle.remove()
                }
            }
        }, 20)


        if(!this.defeat) setTimeout(() => this.game(), Math.round(Math.random() * 500 + 500))
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
        

        this.closeButton.addEventListener('click', () =>
        {
            this.score = 0
            this.start = false
            this.defeat = true
            window.clearInterval(this.increment)
        })

        this.experience.trash.navButton.addEventListener('click', () =>
        {
            this.score = 0
            this.start = false
            this.defeat = true
            window.clearInterval(this.increment)
        })
    }
}