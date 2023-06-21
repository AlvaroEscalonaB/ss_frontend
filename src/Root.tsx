import { useEffect } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useUserStore } from "./store/userStore";

interface NavbarRoute {
  route: String,
  labelRoute: String,
}

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

const Root = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userStore = useUserStore();

  const handleLogout = () => {
    userStore.logoutUser();
    navigate('/login');
  }

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/cat-facts");
    }
    if (!userStore.user.token) {
      navigate("/login");
    }
  }, []);
  
  return (
    <main className="min-h-screen flex flex-col">
      <nav className="flex flex-row justify-between bg-teal-800 text-white px-12">
        <div className="flex flex-row">
          { navbarRoutes.map( ({route, labelRoute}) => (
            <div key={route as any} className={`py-3 px-2 ${ route === location.pathname && "border-b-4 border-white"}`}>
              <Link to={route as any}>
                {labelRoute} 
              </Link>  
            </div>
          ))}
        </div>
        <div>
          <button 
            onClick={handleLogout}
            className="py-3 px-4 hover:bg-teal-700 hover:border-b-4 hover:border-b-teal-700"
          >
            Log Out
          </button>
        </div>
      </nav>
      <section className="p-10 flex-1">
        <Outlet />
      </section> 
    </main>
  )
}

export default Root