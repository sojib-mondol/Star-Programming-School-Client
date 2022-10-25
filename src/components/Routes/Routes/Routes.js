import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import Login from "../../Pages/Shared/Login/Login";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    }
])