import { useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useUserStore } from "./store/userStore";

const Root = () => {

  const navigate = useNavigate();
  const user = useUserStore(state => state.user);
  useEffect(() => {
    if (!user.token && !user.username) {
      navigate("/login")
    }
  })

  return (
    <main>
      <section className="flex flex-row">
        <div>
          <Link to="cat-facts"> cat facts </Link>
        </div>
        <div>
          <Link to="user-favorites"> Your favorites </Link>
        </div>
        <div>
          <Link to="community-favorites"> Community Favorites </Link>
        </div>
      </section>
      <section>
        <Outlet />
      </section> 
    </main>
  )
}

export default Root