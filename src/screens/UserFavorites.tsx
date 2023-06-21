import { useEffect, useState } from "react";
import { Heart } from 'react-feather';
import Loader from "../components/Loader";
import type { CatFact } from "../interfaces";

const data: CatFact[] = [
  {
    id: 1,
    fact: "Los gatos son feos",
  },
  {
    id: 2,
    fact: "Cats are ugly",
  }
]

const UserFavorites = () => {
  // const [data, setData] = useState<CatFactCount[]>([]);
  // const [loading, isLoading] = useState<Boolean>(false);
  
  // useEffect(() => {

  // })

  return (
    <div className="pt-10 mx-auto max-w-[900px] min-w-[700px]">
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
    </div>
  )
}

export default UserFavorites