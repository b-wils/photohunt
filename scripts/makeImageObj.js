// React Native is not good at dynamically loading local images
// Generate the info here so we can statically load it
// This is pretty hacky but all photos will eventually be hosted
const photoNumbers = [27,32,36,38,46,58,71,92,93]

const photos = photoNumbers.reduce((acc, cur) => {

	acc[cur] = `require(\`./bday2019-${cur}.jpg\`)`
	return acc;
}, {})

console.log(photos)