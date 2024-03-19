import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Training from "../Training/Training";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import ErrorPage from "../ErrorPage/ErrorPage";
import AboutUs from "../AboutUs/AboutUs";
import ViewCardDetails from "../ViewCardDetails/ViewCardDetails";

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
            path: "/contact",
            element: <Contact></Contact>
        },
        {
            path: "/training",
            element: <Training></Training>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/logout",
            element: <Logout></Logout>
        },
        {
            path: "/viewCardDetails/:id",
            loader: ()=>fetch("/services.json"),
            element: <ViewCardDetails></ViewCardDetails>
        },
      ]
    }
])

export default myCreateRoutes;