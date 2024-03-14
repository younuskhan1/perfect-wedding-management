import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Career from "../Career/Career";
import Contact from "../Contact/Contact";
import Training from "../Training/Training";
import Booking from "../Booking/Booking";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import ErrorPage from "../ErrorPage/ErrorPage";
import AboutUs from "../AboutUs/AboutUs";

const myCreateRoutes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/aboutUs",
            element: <AboutUs></AboutUs>
        },
        {
            path: "/career",
            element: <Career></Career>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        },
        {
            path: "/training",
            element: <Training></Training>
        },
        {
            path: "/booking",
            element: <Booking></Booking>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/logout",
            element: <Logout></Logout>
        }
      ]
    }
])

export default myCreateRoutes;