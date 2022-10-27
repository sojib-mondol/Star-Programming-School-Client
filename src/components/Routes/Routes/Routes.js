import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import Cources from "../../Pages/Cources/Cources";
import CourcesMain from "../../Pages/CourcesMain/CourcesMain";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import Profile from "../../Pages/Profile/Profile";
import Login from "../../Pages/Shared/Login/Login";
import Register from "../../Pages/Shared/Register/Register";
import TramsAndCondition from "../../Pages/TramsAndCondition/TramsAndCondition";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/faq',
                element: <Faq></Faq>  
            },
            {
                path: '/',
                element: <Home></Home>
                
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/trams',
                element: <TramsAndCondition></TramsAndCondition>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/cources',
                element: <Cources></Cources>
            },
            {
                path: '/category/:id',
                element: <CourcesMain></CourcesMain>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            
            {
                path:'/cources/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/cources/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    }
])