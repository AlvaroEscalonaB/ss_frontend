import { useEffect, useState } from "react";
import { Heart } from 'react-feather';
import { Tooltip } from "flowbite-react";
import FavoriteToogle from "../components/FavoriteToogle";
import Loader from "../components/Loader";
import { apiUserFavorites } from "../api";
import { useUserStore } from "../store/userStore";

import type { UserFavoriteCatFact } from "../interfaces";

const UserFavorites = () => {
  const [data, setData] = useState<UserFavoriteCatFact[]>([]);
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
    <section className="p-10 flex-1">
      <div className="mx-auto w-full lg:max-w-[900px] lg:min-w-[700px]">
        <h2 className="text-teal-800 text-2xl font-bold"> Your favorites! </h2>
      </div>
      <div className="pt-4 mx-auto w-full lg:max-w-[900px] lg:min-w-[700px]">
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
              { data.map( ({ id, fact, cat_fact_id}) => 
                <tr className="hover:bg-gray-200" key={ id.toString() }>
                  <td className="px-5 py-2 max-w-lg md:max-w-[750px]">
                      <Tooltip content={fact} className="max-w-[500px]">
                        <div className="w-full md:max-w-[750px] truncate">
                          { fact }
                        </div>
                      </Tooltip>
                  </td>
                  <td className="border-l-teal-800 text-center">
                    <FavoriteToogle idFavoriteCatFact={id} catFactId={cat_fact_id} token={userStore.user.token!} />
                  </td>
                </tr>
              ) }
            </tbody>
          </table>
        }
      </div>
    </section>
  )
}

export default UserFavorites