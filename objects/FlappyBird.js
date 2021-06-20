const FlappyBird  = (context, sprites) => {

	let spriteX = 0,
		spriteY = 0,
		width = 33,
		height = 24,
		positionX = 10,
		positionY = 50	
	


	const draw = () => {
		context.drawImage(
			sprites,
			spriteX, spriteY,
			width,  height,
			positionX, positionY,
			width, height
		)
	}

	return {
		draw
	}
}