import { useEffect, useState } from "react";
import { ArrowRight, Heart } from 'react-feather'
// import { backendApi } from '../config/vars';
import Loader from "./../components/Loader"

interface CatFactRecord {
  id: String,
  fact: String,
}

const CatFact = () => {
  
  const [catFact, setCatFact] = useState<String>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerateCatFact = async () => {
    const apiCall = "https://catfact.ninja/fact";
    setIsLoading(true)
    const newCatFactRaw = await fetch(apiCall);
    const newCatFact = (await newCatFactRaw.json() as CatFactRecord).fact
    setIsLoading(false);
    setCatFact(newCatFact);
  }
  
  const handleFavoriteCatFact = async () => {
  }

  useEffect( () => {
    handleGenerateCatFact();
  }, [])


  return (
    <section className="flex flex-col justify-between mx-auto max-w-[600px] min-h-[280px] h-80 rounded-lg border-2 px-12 py-6">
      <article>
        Here you can see the next catFact:
      </article>

      <article className="text-center px-4 relative">
        { isLoading ? 
          <Loader /> :
          <blockquote className="p-5">
            { catFact }
          </blockquote>
        }
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