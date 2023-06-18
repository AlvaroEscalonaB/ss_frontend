import { useState } from "react";

const SignIn = () => {
  const [username, setUsername] = useState<string>('');

  const handleUsername = (e: any) => {
    if (e.target.value) {
      setUsername(e.target.value)
    }
  }

  const handleSignIn = () => {
    console.log("username");
  }

  return (
    <main>
      <form>
        <section>    
          <label> Username </label>
          <input onChange={handleUsername} />
        </section>
        <section>
          <button onClick={handleSignIn}>
            Sign In
          </button>
        </section>
      </form>
    </main>
  )
}

export default SignIn