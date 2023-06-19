import { useEffect } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useUserStore } from "./store/userStore";

interface NavbarRoute {
  route: String,
  labelRoute: String,
}

const Root = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const user = useUserStore(state => state.user);

  const navbarRoutes: NavbarRoute[] = [
    {
      route: "/cat-facts",
      labelRoute: "Cat Fact",
    },
    {
      route: "/user-favorites",
      labelRoute: "Your Favorites",
    },
    {
      route: "/community-favorites",
      labelRoute: "Community",
    }
  ];

  useEffect(() => {
    if (user.token && user.username) {
      navigate("/login")
    }
  });
  
  return (
    <main>
      <nav className="flex flex-row gap-x-4 bg-teal-800 text-white px-12">
        { navbarRoutes.map( ({route, labelRoute}) => (
          <div key={route as any} className={`py-2 px-2 ${ route === location.pathname && "border-b-2 border-white"}`}>
            <Link to={route as any}> 
              {labelRoute} 
            </Link>  
          </div>
        ))}
      </nav>
      <section className="p-10">
        <Outlet />
      </section> 
    </main>
  )
}

export default Root