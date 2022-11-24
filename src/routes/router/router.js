import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import LogIn from "../../LogInSignIn/Login/LogIn";
import SignUp from "../../LogInSignIn/SignUp/SignUp";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";

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
            }
        ]
    }

]);

export default router;