import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import ErrorNotFound from "./screens/ErrorNotFound";
import UserFavorites from "./screens/UserFavorites";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import CommunityFavorites from "./screens/CommunityFavorites";
import CatFact from "./screens/CatFact";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorNotFound />,
      children: [
        {
          path: "user-favorites",
          element: <UserFavorites />,
        },
        {
          path: "community-favorites",
          element: <CommunityFavorites />,
        },
        {
          path: "cat-facts",
          element: <CatFact />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/ss_frontend/" }
);

export default router;
