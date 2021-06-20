console.log('[DevSoutinho, Eduardo Henrique Consta Barbosa] Flappy Bird')

const sprites = new Image()
sprites.src = './sprites.png'

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const flappyBird = FlappyBird(context, sprites)
const floor = Floor(context, sprites, canvas)
const background = Background(context, sprites, canvas)

const loop = () => {
	background.draw()
	floor.draw()
	flappyBird.draw()


	requestAnimationFrame(loop)
}

loop()

