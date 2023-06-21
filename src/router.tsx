import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Error from "./screens/Error";
import UserFavorites from "./screens/UserFavorites";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import CommunityFavorites from "./screens/CommunityFavorites";
import CatFact from "./screens/CatFact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "user-favorites",
        element: <UserFavorites />,
      },
      {
        path: "community-favorites",
        element: <CommunityFavorites />
      },
      {
        path: "cat-facts",
        element: <CatFact />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
    errorElement: <Error />,
  },
]);

export default router;
