// React Native is not good at dynamically loading local images
// Generate the info here so we can statically load it
// This is pretty hacky but all photos will eventually be hosted
const photoNumbers = [27, 32, 36, 38, 46, 58, 71, 92, 93];

const photos = photoNumbers.reduce((acc, cur) => {
  acc[cur] = {
    thumb: `require(\`../assets/location-photos/bday2019-${cur}.png\`)`,
    id: cur
  };
  return acc;
}, {});

console.log(JSON.stringify(photos, null, 2));

// Need to remove quotes from code strings
// Sublime cheat
//
// Find: "require(.*)"
// Replace: require$1
//
// This whole thing is hacky
