const Background = (context, sprites, canvas) => {
	
	let spriteX = 390,
		spriteY = 0,
		width = 275,
		height = 204,
		positionX = 0,
		positionY = canvas.height -  height


	const draw = () => {
		context.fillStyle = '#70c5ce'
		context.fillRect(0, 0, canvas.width, canvas.height)

		context.drawImage(
			sprites,
			spriteX, spriteY,
			width, height,
			positionX, positionY,
			width, height
		)

		context.drawImage(
			sprites,
			spriteX, spriteY,
			width, height,
			(positionX  + width), positionY,
			width, height
		)
	}

	return {
		draw
	}

}