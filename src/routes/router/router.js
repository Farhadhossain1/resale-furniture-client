import { createBrowserRouter } from "react-router-dom";
import DashboardLayOut from "../../LayOut/DashboardLayOut";
import Main from "../../LayOut/Main";
import LogIn from "../../LogInSignIn/Login/LogIn";
import SignUp from "../../LogInSignIn/SignUp/SignUp";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import Blog from "../../Pages/Blog/Blog";
import MyOrders from "../../Pages/Dashboard/MyOrders/Myorders";
import Home from "../../Pages/Home/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/categoryName/:id',
                element: <AllProducts></AllProducts>,
                loader: ({params}) => fetch(`http://localhost:5000/categoryName/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayOut></DashboardLayOut></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            }
        ]
    }

]);

export default router;