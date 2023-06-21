import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { apiLogin } from "./../api";
import { useUserStore } from "../store/userStore";

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const userStore = useUserStore();

  const handleUsername = (e: any) => {
    if (e.target?.value) {
      setUsername(e.target.value);
    }
  }

  const handleSubmit = async () => {
    const loginResponse = await apiLogin(username);
    if (loginResponse) {
      userStore.setUser(loginResponse);
      navigate("/cat-facts");
    } else {
      setError('Invalid user name')
    }
  }
  
  return (
    <main className="w-full min-h-screen grid">
      <section className="flex flex-col gap-8 w-96 px-6 py-6 border-2 rounded-md border-teal-700 place-self-center">
        <article className="text-center mb-4 font-semibold text-xl text-gray-700">
          Welcome again Cat Lover!
        </article>
        <article className="flex flex-col">
          <div className="w-full">
            <input onChange={handleUsername} 
              type="text" 
              className="w-full rounded-sm focus:border-teal-700 focus:ring-0 focus:outline-none" 
              placeholder="Name"
              />
          </div>
          <div className="min-h-[10px]">
            <span className="text-xs text-red-500"> { error } </span>
          </div>
        </article>
        <article className="flex flex-col gap-2">
          <div>
            <button onClick={() => handleSubmit()} className="border-2 border-teal-700 w-full rounded-sm py-1 font-semibold text-white bg-teal-700 hover:text-teal-700 hover:bg-white duration-200">
              Login
            </button>
          </div>
          <div>
            <span className="text-sm text-gray-600"> Don't have an account?
              <Link to="/sign-up" className="px-1 font-semibold hover:underline hover:underline-offset-1 hover:text-teal-700 duration-200">
                Sign Up
              </Link>
            </span> 
          </div>
        </article>
      </section>
    </main>
  );
};

export default Login;
