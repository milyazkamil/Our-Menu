const Categories = ({ categories, filterFood }) => {
  return (
    <>
      <section id="categories">
        {
          categories.map((button) => {
            const { id, category } = button;
            return (
              <button type="button" onClick={() => filterFood(category)} className="filter-buttons" key={id}>
                {category}
              </button>
            )
          })
        }
      </section>
    </>
  )
}
export default Categories;