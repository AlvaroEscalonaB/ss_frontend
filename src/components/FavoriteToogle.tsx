import { useState } from "react";
import { Heart } from "react-feather";
import { apiAddFavorite, apiDeleteFavorite } from "../api";

interface Props {
  idFavoriteCatFact: Number,
}

const FavoriteToogle = ({ idFavoriteCatFact }: Props) => {

  // const [isFavorite, setIsFavorite] = useState<Boolean>(true);
  // const [isLoading, setIsLoading] = useState<Boolean>(false);
  
  // const handleFavorite = async () => {
  //   setIsLoading(true);
  //   if (isFavorite) {
  //     // const coso = await apiDeleteFavorite();
  //   } else {  
      
  //   }
  //   setIsLoading(false);
  // }

  return (
    <button className="bg-rose-500 rounded"
      // onClick={handleFavorite}
      >
      <div className="flex justify-center px-2 py-1">
        <Heart color="white"/>
      </div>
    </button>
  )
}

export default FavoriteToogle