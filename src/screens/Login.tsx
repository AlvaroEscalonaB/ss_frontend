import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState<string>('');

  const handleUsername = (e: any) => {
    if (e.target?.value) {
      setUsername(e.target.value);
    }
  }

  const handleSubmit = () => {
    console.log(username);
    // TODO: call to api to check the user and set the user in the store
  }
  
  return (
    <section className="flex flex-col gap-2 w-96 px-4 py-8">
      <article className="">
        <div>
          <label>Username</label>
        </div> 
        <div>
          <input onChange={handleUsername} type="text" className=""/>
        </div>
      </article>
      <article>
        <button onClick={() => handleSubmit()} className="border-2 border-teal-600 w-full rounded-md py-1"> Login </button>
      </article>
    </section>
  );
};

export default Login;
