import {createBrowserRouter} from "react-router-dom";
import RegisterPage from "../views/registerPage";
import LoginPage from "../views/loginPage";
import LandingPage from "../views/landingPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
    {
      path: "login",
      element: <LoginPage />,
    }
]);

  export default router