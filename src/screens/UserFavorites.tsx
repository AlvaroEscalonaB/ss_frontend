import { useEffect, useState } from "react";
import { Heart } from 'react-feather';
import FavoriteToogle from "../components/FavoriteToogle";
import Loader from "../components/Loader";
import { apiUserFavorites } from "../api";
import { useUserStore } from "../store/userStore";

import type { CatFact } from "../interfaces";

const UserFavorites = () => {
  const [data, setData] = useState<CatFact[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const userStore = useUserStore();
  
  useEffect(() => {
    const fetchUserFavorites = async () => {
      setIsLoading(true);
      const rawUserFavoritesData = await apiUserFavorites(userStore.user.token!);
      console.log(rawUserFavoritesData);
      if (rawUserFavoritesData) {
        setData(rawUserFavoritesData);
      }
      setIsLoading(false);
    };
    fetchUserFavorites();
  }, [])

  return (
    <div className="pt-4 mx-auto max-w-[900px] min-w-[700px]">
      { isLoading ?
        <Loader /> :
        <table className="shadow-lg border-2 border-teal-700 w-full rounded-md overflow-hidden">
          <thead>
            <tr>
              <th className="text-start bg-teal-800 text-white px-4 py-2"> Cat Fact </th>
              <th className="flex bg-teal-800 justify-center px-4 py-2">
                <div>
                  <Heart color="white" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            { data.map( ({ id, fact }) => 
              <tr className="hover:bg-gray-200" key={ id.toString() }>
                <td className="px-5 py-2 max-w-md truncate"> { fact } </td>
                <td className="border-l-teal-800 text-center">
                  {/* <FavoriteToogle idFavoriteCatFact={id} /> */}
                </td>
              </tr>
            ) }
          </tbody>
        </table>
      }
    </div>
  )
}

export default UserFavorites