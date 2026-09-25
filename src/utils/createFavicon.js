export default function createFavicon() {
  if (typeof document === 'undefined') return;

  const favicon = document.getElementById('favicon');
  if (!favicon) return;

  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.clearRect(0, 0, 64, 64);

  ctx.fillStyle = '#fffdf8';
  ctx.beginPath();
  ctx.roundRect(0, 0, 64, 64, 14);
  ctx.fill();

  const fontSize = 36;
  const font = `700 ${fontSize}px "Space Grotesk", sans-serif`;
  const letterSpacing = -2.2;

  ctx.font = font;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';

  const characters = ['J', 'C', '.'];
  const widths = characters.map((character) => ctx.measureText(character).width);
  const totalWidth =
    widths.reduce((sum, width) => sum + width, 0) +
    letterSpacing * (characters.length - 1);

  const metrics = ctx.measureText('JC.');
  const ascent = metrics.actualBoundingBoxAscent || fontSize * 0.72;
  const descent = metrics.actualBoundingBoxDescent || fontSize * 0.18;
  const baseline = 32 + (ascent - descent) / 2;

  let x = (64 - totalWidth) / 2;

  ctx.fillStyle = '#151515';
  ctx.fillText(characters[0], x, baseline);
  x += widths[0] + letterSpacing;

  ctx.fillText(characters[1], x, baseline);
  x += widths[1] + letterSpacing;

  ctx.fillStyle = '#ff5a36';
  ctx.fillText(characters[2], x, baseline);

  favicon.href = canvas.toDataURL('image/png');
}
