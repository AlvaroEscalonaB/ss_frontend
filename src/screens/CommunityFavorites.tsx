import { useState, useEffect } from "react";
import { Heart } from 'react-feather';
import { Tooltip } from "flowbite-react";
import Loader from "../components/Loader";
import { apiCommunityFavorites } from "../api";
import { useUserStore } from "../store/userStore";
import type { CatFactCount } from "../interfaces";


const CommunityFavorites = () => {
  const [communityCatFacts, setCommunityCatFacts] = useState<CatFactCount[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const userStore = useUserStore();

  useEffect(() => {
    const fetchCommunityCatFacts = async () => {
      setIsLoading(true);
      const rawUserFavoritesData = await apiCommunityFavorites(userStore.user.token!);
      if (rawUserFavoritesData) {
        setCommunityCatFacts(rawUserFavoritesData);
      }
      setIsLoading(false);
    }
    fetchCommunityCatFacts();
  }, [])

  return (
    <section className="p-10 flex-1">
      <div className="mx-auto w-full lg:max-w-[900px] lg:min-w-[700px]">
        <h2 className="text-teal-800 text-2xl font-bold"> Community favorites! </h2>
      </div>
      <div className="pt-4 mx-auto min-w-[300px] max-w-[900px] sm:min-w-[700px]">
        { isLoading ?
          <Loader /> :
          <table className="shadow-lg border border-teal-700 w-full rounded-md overflow-hidden">
            <thead>
              <tr>
                <th className="text-start bg-teal-800 text-white px-4 py-2"> CatFact </th>
                <th className="flex bg-teal-800 justify-center px-2 py-2">
                  <div>
                    <Heart color="white" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              { communityCatFacts.map( ({ id, fact, count }) => 
                <tr className="hover:bg-gray-200" key={id.toString()}>
                  <td className="px-5 py-2 max-w-lg md:max-w-[750px]">
                    <Tooltip content={fact} className="max-w-[500px]">
                      <div className="md:max-w-[750px] truncate">
                        { fact }
                      </div>
                    </Tooltip>
                  </td>
                  <td className="text-center text-teal-700 text-lg font-semibold"> { count.toString() } </td>
                </tr>
              ) }
            </tbody>
          </table>
        }
      </div>
    </section>
  )
}

export default CommunityFavorites