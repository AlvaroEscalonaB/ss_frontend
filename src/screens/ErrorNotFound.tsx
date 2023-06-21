import { Link } from "react-router-dom";

const ErrorNotFound = () => {
  return (
    <main className="grid place-items-center w-full h-screen bg-teal-700 text-white">
      <section className="flex flex-col text-center sm:flex-row sm:divide-x">
        <div className="text-5xl font-semibold mr-4 mb-4 sm:mb-0">
          500
        </div>
        <div className="text-lg sm:pl-4 flex items-center">
          <div>
            Page not found, try
            <Link to="/login" className="underline underline-offset-4 pl-[6px]">
              Go to Login
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ErrorNotFound