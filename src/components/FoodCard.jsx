const FoodCard = ({ title, image, price, description }) => {
  return (
    <article className="food-card">
      <img className="food-image" src={image} alt={title} />
      <div className="food-info">
        <header className="food-header">
          <h2 className="food-title">{title}</h2>
          <span className="food-price">${price}</span>
        </header>
        <p className="food-description">{description}</p>
      </div>
    </article>
  )
}
export default FoodCard;