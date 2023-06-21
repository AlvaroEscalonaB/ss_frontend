import { useEffect, useState } from "react";
import { ArrowRight, Heart } from 'react-feather'
// import { backendApi } from '../config/vars';
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
    <section className="flex flex-col justify-between mx-auto max-w-[600px] min-h-[280px] h-80 rounded-lg border-2 px-12 py-6">
      <article>
        Here you can see the next catFact:
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
          className={`grid place-content-center px-4 py-2 border-2 rounded border-gray-300 ${favoriteCatFact?.status ? "bg-rose-600 text-white" : {}}`}
          onClick={handleFavoriteCatFact}>
          <div>
            <Heart />
          </div> 
        </div>
        <div role="button"
          className="grid place-content-center px-4 py-2 border-2 rounded border-gray-300" 
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