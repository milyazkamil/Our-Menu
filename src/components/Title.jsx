const Title = ({ title }) => {
  return (
    <>
      <h1 id="title">{title || "Default Title"}</h1>
      <div id="title-underline"></div>
    </>
  )
}
export default Title;