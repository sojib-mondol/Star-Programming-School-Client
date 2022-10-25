import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    }
])