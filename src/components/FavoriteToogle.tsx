import { useState } from "react";
import { Heart } from "react-feather";
import { apiAddFavorite, apiDeleteFavorite } from "../api";
import Loader from "./Loader";

interface Props {
  idFavoriteCatFact: Number,
  catFactId: Number,
  token: String,
}

const FavoriteToogle = ({ idFavoriteCatFact, catFactId, token }: Props) => {

  const [isFavorite, setIsFavorite] = useState<Boolean>(true);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  
  const handleFavorite = async () => {
    setIsLoading(true);
    if (isFavorite) {
      const response = await apiDeleteFavorite(idFavoriteCatFact, catFactId, token);
      if (response) {
        setIsFavorite(false);
      }
    } else {
      const response = await apiAddFavorite(catFactId, token);
      if (response) {
        setIsFavorite(true);
      }
    }
    setIsLoading(false);
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <button className={`rounded ${isFavorite ? "bg-rose-500" : "bg-white" } duration-200`}
        onClick={handleFavorite}
        >
        <div className="flex justify-center px-2 py-1">
          <Heart color={isFavorite ? "white" : "black"} />
        </div>
      </button>
    </>
  )
}

export default FavoriteToogle