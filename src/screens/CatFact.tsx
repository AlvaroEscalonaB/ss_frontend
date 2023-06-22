import { useEffect, useState } from "react";
import { ArrowRight, Heart } from 'react-feather'
import { apiGenerateCatFact, apiAddFavorite, apiDeleteFavorite } from "./../api"
import { useUserStore } from "../store/userStore";
import Loader from "./../components/Loader"
import { CatFactResponse, FavoriteCatFact } from "../interfaces";

const CatFact = () => {
  
  const [catFact, setCatFact] = useState<CatFactResponse | null>();
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [favoriteCatFact, setFavoriteCatFact] = useState<FavoriteCatFact | null>();
  const userStore = useUserStore();

  const handleGenerateCatFact = async () => {
    setIsLoading(true);
    const newCatFact = await apiGenerateCatFact(userStore.user.token!);
    if (newCatFact?.is_favorite) {
      setFavoriteCatFact({ id: newCatFact.id, status: true });
    } else {
      setFavoriteCatFact(null);
    }
    setCatFact(newCatFact);
    setIsLoading(false);
  }
  
  const handleFavoriteCatFact = async () => {
    if (favoriteCatFact && favoriteCatFact.status) {
      const deleteResponse = await apiDeleteFavorite(favoriteCatFact?.id!, catFact?.id!, userStore.user.token!);
      if (deleteResponse) {
        setFavoriteCatFact(null);
      }
    } else {
      const favoriteResponse = await apiAddFavorite(catFact?.id!, userStore.user.token!);
      setFavoriteCatFact(favoriteResponse);
    }
  }

  useEffect( () => {
    handleGenerateCatFact();
  }, [])


  return (
    <section className="p-10 flex-1 flex justify-center items-center"> 
      <div className="mb-20 h-full">
        <section className="flex flex-col justify-between mx-auto min-w-full md:min-w-[600px] max-w-[700px] min-h-[340px] h-80 rounded-lg border-2 px-12 py-12">
          <article className="text-base text-teal-600 font-semibold">
            { `Hey ${userStore.user.name}! Do you know that:` }
          </article>

          <article className="text-center px-4 relative">
            { isLoading ? 
              <Loader /> :
              <blockquote className="p-5">
                { catFact?.fact || <div> There was an error </div> }
              </blockquote>
            }
          </article>
          
          <article className="flex flex-row justify-between">
            <div role="button"
              className={`grid place-content-center px-4 py-2 border-2 rounded border-gray-300 ${favoriteCatFact?.status ? "bg-rose-600 text-white" : {}} duration-200`}
              onClick={handleFavoriteCatFact}>
              <div>
                <Heart />
              </div> 
            </div>
            <div role="button"
              className="grid place-content-center px-4 py-2 border-2 rounded border-gray-300 z-10" 
              onClick={handleGenerateCatFact}>
              <div>
                <ArrowRight />
              </div>
            </div>
          </article>
        </section>
      </div>
    </section>
  )
}

export default CatFact