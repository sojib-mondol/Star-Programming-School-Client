import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import Login from "../../Pages/Shared/Login/Login";
import Register from "../../Pages/Shared/Register/Register";
import TramsAndCondition from "../../Pages/TramsAndCondition/TramsAndCondition";

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
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/trams',
                element: <TramsAndCondition></TramsAndCondition>
            },
        ]
    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    }
])