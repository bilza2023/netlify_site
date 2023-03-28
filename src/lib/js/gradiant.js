export default function generateRandomGradient() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 25) + 75;
  const lightness = Math.floor(Math.random() * 25) + 25;
  const colorStops = [
    `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    `hsl(${hue + 10}, ${saturation - 10}%, ${lightness + 10}%)`,
    `hsl(${hue + 20}, ${saturation - 20}%, ${lightness + 20}%)`,
  ];
  return `linear-gradient(to right, ${colorStops.join(', ')})`;
}

// module.exports = { generateRandomGradient };
