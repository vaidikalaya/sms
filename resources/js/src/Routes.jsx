import {createBrowserRouter, RouterProvider,Navigate} from "react-router-dom"
import NotFound from "./pages/NotFound";
import Login from './pages/auth/login'
import Dashboard from "./pages/admin/Dashboard";
import Students from "./pages/admin/Students";
import StudentRegistration from "./pages/admin/StudentRegistration";

export default function routes(){

    //const {authRole}=authUser();

    const AuthRoute = ({role,children}) => {
        const isAuthenticated = window.auth.isLoggedIn
        if(isAuthenticated){
            // if(role && role!=authRole){
            //     return <NotFound /> 
            // }
            return children;
        }
        else{
            return <Navigate to="/" />
        }
    };

    const router=createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/dashboard',
            element: <AuthRoute><Dashboard/></AuthRoute>
        },
        {
            path: '/students',
            element: <AuthRoute><Students/></AuthRoute>
        },
        {
            path: '/student-registration',
            element: <AuthRoute><StudentRegistration/></AuthRoute>
        },
    ])

    return(
        <RouterProvider router={router}/>
    )
}