import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiSignUp } from "../api";
import { useUserStore } from "../store/userStore";

const SignIn = () => {
  const [username, setUsername] = useState<string | null>();
  const [validationError, setValidationError] = useState<string | null>();
  const [signUpError, setSignUpError] = useState<string | null>();
  const navigate = useNavigate();
  const userStore = useUserStore();

  const handleUsernameValidation = (e: any) => {
    const usernameCandidate = e.target.value as String;
    if (usernameCandidate.length < 3) {
      setValidationError('Name should have at least 3 characters');
    } else {
      setValidationError(null);
    }
    setUsername(e.target.value)
  }

  const handleSignIn = async () => {
    if (!!!validationError) {
      const signUpResponse = await apiSignUp(username!);
      console.log(signUpResponse);
      if (signUpResponse) {
        userStore.setUser(signUpResponse);
        navigate("/cat-facts");
      } else {
        setSignUpError('Cannot sign up with this username!');
      }
    }
  }

  return (
    <main className="w-full min-h-screen grid">
      <section className="flex flex-col gap-8 w-96 px-6 py-6 border-2 rounded-md border-teal-700 place-self-center">
        <article className="text-center mb-4 font-semibold text-xl text-gray-700">
          Hi! Ready to know astonishing cat facts?
        </article>
        <article className="flex flex-col">
          <div className="w-full">
            <input onChange={handleUsernameValidation} 
              type="text" 
              className="w-full rounded-sm border-gray-400 focus:border-teal-700 focus:ring-0 focus:outline-none" 
              placeholder="Name"
              />
          </div>
          <div className="min-h-[14px]">
            <span className="text-xs text-red-500"> { validationError } { signUpError } </span>
          </div>
        </article>
        <article className="flex flex-col gap-2">
          <div>
            <button 
              onClick={handleSignIn} 
              className="border-2 border-teal-700 w-full rounded-sm py-1 font-semibold text-white bg-teal-700 hover:text-teal-700 hover:bg-white duration-200 "
              disabled={ Boolean(validationError) }
            >
              Sign Up
            </button>
          </div>
          <div>
            <span className="text-sm text-gray-600"> Already have an account?
              <Link 
                to="/login" 
                className="px-1 font-semibold hover:underline hover:underline-offset-1 hover:text-teal-700 duration-200"
              >
                Go to Login
              </Link>
            </span> 
          </div>
        </article>
      </section>
    </main>
  )
}

export default SignIn