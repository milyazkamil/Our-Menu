import { useState } from "react";
import { menu } from '../data';
import { buttons } from "../data";
import Menu from "./Menu";
import Title from "./Title";
import Categories from "./Categories";

function App() {
  const [categories, setCategories] = useState(buttons);
  const [menuFood, setMenuFood] = useState(menu);

  const filterFood = (category) => {
    if (category === "all") {
      setMenuFood(menu);
      // if we do not return, the following filter method will work and our status will change
      return;
    }
    const newMenu = menu.filter((food) => food.category === category);
    setMenuFood(newMenu);
  };

  return (
    <>
      <main id="main">
        <Title title="Our Menu" />
        <Categories categories={categories} filterFood={filterFood} />
        <Menu menuFood={menuFood} />
      </main>
    </>
  )
}
export default App;