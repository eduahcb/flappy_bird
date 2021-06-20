const Floor = (context, sprites, canvas) => {
	
	let spriteX = 0,
		spriteY = 610,
		width = 224,
		height = 112,
		positionX = 0,
		positionY =  canvas.height - height

	const draw = () => {
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
			(positionX + width), positionY,
			width, height
		)
		
	}

	return {
		draw
	}
}