import { useEffect, useState } from "react";
import { Heart } from 'react-feather';
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
      if (rawUserFavoritesData) {
        setData(rawUserFavoritesData);
      }
      setIsLoading(false);
    };
    fetchUserFavorites();
  }, [])

  return (
    <div className="pt-10 mx-auto max-w-[900px] min-w-[700px]">
      { isLoading ?
        <Loader /> :
        <table className="shadow-lg border border-teal-700 w-full">
          <thead>
            <tr>
              <th className="text-start bg-teal-800 text-white px-4 py-1"> Cat Fact </th>
              <th className="flex bg-teal-800 justify-center px-2 py-1">
                <div>
                  <Heart color="white" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            { data.map( ({ id, fact }) => 
              <tr className="hover:bg-gray-200" key={ id.toString() }>
                <td className="text-center"> { id.toString() } </td>
                <td className="px-5 p-y text-ellipsis"> { fact } </td>
              </tr>
            ) }
          </tbody>
        </table>
      }
    </div>
  )
}

export default UserFavorites