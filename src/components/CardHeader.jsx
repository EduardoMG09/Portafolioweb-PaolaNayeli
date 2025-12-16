import "../styles/CardHeader.css"

function toRgb(color) {
  if (!color) return "0,0,0";
  const hex = color.trim();
  // #RRGGBB
  if (/^#([A-Fa-f0-9]{6})$/.test(hex)) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r},${g},${b}`;
  }
  // #RGB
  if (/^#([A-Fa-f0-9]{3})$/.test(hex)) {
    const r = parseInt(hex[1] + hex[1], 16);
    const g = parseInt(hex[2] + hex[2], 16);
    const b = parseInt(hex[3] + hex[3], 16);
    return `${r},${g},${b}`;
  }
  // rgb(r,g,b)
  const rgbMatch = hex.match(/^rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\)$/i);
  if (rgbMatch) {
    return `${rgbMatch[1]},${rgbMatch[2]},${rgbMatch[3]}`;
  }
  return "0,0,0";
}

function CardHeader(props) {
  const imageSrc = typeof props.image === "object" && props.image.src ? props.image.src : props.image
  const cardColor = props.color;
  const cardColorRgb = toRgb(cardColor);

  return (
    <div
      className="card-header"
      style={{
        backgroundColor: cardColor,
        // Provide CSS variables to use in stylesheet for shadows
        "--card-color-rgb": cardColorRgb,
      }}
    >
      <img src={imageSrc || "/placeholder.svg"} />
    </div>
  )
}

export default CardHeader
