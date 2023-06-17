import Login from "./screens/Login.tsx";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> Hola gente </div>,
    errorElement: <div> Error Page </div>,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <div> Something happened here </div>,
  },
]);

export default router;
