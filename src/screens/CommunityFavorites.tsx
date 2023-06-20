import { Heart } from 'react-feather';
import type { CatFactCount } from '../interfaces';

const data: CatFactCount[] = [
  {
    catFact: "Los gatos son feos",
    count: 20,
  },
  {
    catFact: "Cats are ugly",
    count: 3,
  }
]

const CommunityFavorites = () => {
  return (
    <div className="pt-10 mx-auto max-w-[900px] min-w-[700px]">
      <table className="shadow-lg border border-teal-700 w-full">
        <thead>
          <tr>
            <th className="text-start bg-teal-800 text-white px-4 py-1"> CatFact </th>
            <th className="flex bg-teal-800 justify-center px-2 py-1">
              <div>
                <Heart color="white" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          { data.map( ({ catFact, count }) => 
            <tr className="hover:bg-gray-200">
              <td className="px-5 p-y text-ellipsis"> { catFact } </td>
              <td className="text-center"> { count.toString() } </td>
            </tr>
          ) }
        </tbody>
      </table>
    </div>
  )
}

export default CommunityFavorites