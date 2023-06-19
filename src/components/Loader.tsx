import { Loader as LoaderIcon } from "react-feather";

const Loader = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="animate-spin duration-200 text-xl">
        <LoaderIcon/>
      </div>
    </div>
  )
}

export default Loader