import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/home/Home";
import Category from "../Pages/Category/Category/Category";
import News from "../Pages/News/News/News";
import Login from "../Pages/Login/login/Login";
import Register from "../Pages/Login/register/Register";
import SecureRoute from "./SecureRoute";
import TermsAndConditions from "../Pages/Others/TermsAndConditions/TermsAndConditions";
import Profile from "../Pages/Others/Profile/Profile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch(`http://localhost:5000/news`)
            },
            {
                path: '/category/:id',
                element: <Category />,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <SecureRoute>
                    <News />
                </SecureRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },

            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/terms',
                element: <TermsAndConditions />
            },
            {
                path: '/profile',
                element: <SecureRoute>
                    <Profile />
                </SecureRoute>
            }
        ]
    }
])