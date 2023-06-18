import { Plus, Heart } from 'react-feather'

const CatFact = () => {
  const handleGenerateCatFact = () => {
    console.log("Generating a new cat fact");
  }
  
  const handleFavoriteCatFact = () => {
    console.log("New Favorite cat fact");
  }

  return (
    <section>
      <article>
        Here you can see the next catFact
      </article>
      
      <article>
        <div>
          <button onClick={handleFavoriteCatFact}>
            <Heart />
          </button> 
        </div>
        <div>
          <button onClick={handleGenerateCatFact}>
            <Plus />
          </button>
        </div>
      </article>
      
    </section>
  )
}

export default CatFact