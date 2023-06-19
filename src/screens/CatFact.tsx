import { ArrowRight, Heart } from 'react-feather'
import { backendApi } from '../config/vars';

const CatFact = () => {
  const handleGenerateCatFact = () => {
    console.log("Generating a new cat fact");
  }
  
  const handleFavoriteCatFact = () => {
    console.log("New Favorite cat fact");
  }

  console.log(backendApi.generateCatFact);

  return (
    <section className="flex flex-col justify-between mx-auto max-w-[600px] min-h-[280px] h-80 rounded-lg border-2 px-12 py-6">
      <article>
        Here you can see the next catFact:
      </article>

      <article className="text-center px-4 relative">
        <blockquote className="p-4">
          Cats can be really intelligent (but not very usually) but sometimes can be very bad behaviored
          because they are the child of the devil
        </blockquote>
      </article>
      
      <article className="flex flex-row justify-between">
        <div className="grid place-content-center px-4 py-2 border-2 rounded border-gray-300" role="button"
          onClick={handleFavoriteCatFact}>
          <div>
            <Heart />
          </div> 
        </div>
        <div className="grid place-content-center px-4 py-2 border-2 rounded border-gray-300" role="button"
          onClick={handleGenerateCatFact}>
          <div>
            <ArrowRight />
          </div>
        </div>
      </article>
      
    </section>
  )
}

export default CatFact