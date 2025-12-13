import "../styles/CardHeader.css"

function CardHeader(props) {
  const imageSrc = typeof props.image === "object" && props.image.src ? props.image.src : props.image

  return (
    <div className="card-header" style={{ backgroundColor: props.color }}>
      <img src={imageSrc || "/placeholder.svg"} alt={props.text} />
      <p>{props.text}</p>
    </div>
  )
}

export default CardHeader
