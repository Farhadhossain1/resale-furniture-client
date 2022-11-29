import { createBrowserRouter } from "react-router-dom";
import DashboardLayOut from "../../LayOut/DashboardLayOut";
import Main from "../../LayOut/Main";
import LogIn from "../../LogInSignIn/Login/LogIn";
import SignUp from "../../LogInSignIn/SignUp/SignUp";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import Home from "../../Pages/Home/Home/Home";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
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
                path: '/categoryName/:name',
                element: <AllProducts></AllProducts>,
                loader: ({params}) => fetch(`http://localhost:5000/categoryName/${params.name}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayOut></DashboardLayOut></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/buyer/myOrders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/seller/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path:'/dashboard/seller/myProducts',
                element: <MyProduct></MyProduct>
            },
            {
                path:'/dashboard/admin/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path:'/dashboard/admin/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
          
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

]);

export default router;