export default function generateRandomGradient() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 25) + 75;
  const lightness = Math.floor(Math.random() * 25) + 25;
  const colorStops = [
    `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    `hsl(${hue + 10}, ${saturation - 10}%, ${lightness + 10}%)`,
    `hsl(${hue + 20}, ${saturation - 20}%, ${lightness + 20}%)`,
  ];
  // Make sure the colors are suitable for white text
  for (let i = 0; i < colorStops.length; i++) {
    const color = colorStops[i];
    const [h, s, l] = color.match(/\d+/g);
    if (l > 70) {
      colorStops[i] = `hsl(${h}, ${s}%, ${l - 20}%)`;
    }
  }
  return `linear-gradient(to right, ${colorStops.join(', ')})`;
}
