import FoodCard from "./FoodCard";

const Menu = ({ menuFood }) => {
  return (
    <section id="menu-container">
      {
        menuFood.map((food) => (
          <FoodCard key={food.id} {...food} />
        ))
      }
    </section>
  )
}
export default Menu;