
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Services from '../Pages/Services'
import Pricing from '../Pages/Pricing'
import Appointment from '../Pages/Appointment'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'


function Routing() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },

        {
            path: "/about-page",
            element: <About />
        },

        {
            path: "/service-page",
            element: <Services />
        },

        {
            path: "/price-page",
            element: <Pricing />
        },

        {
            path: "/contact-page",
            element: <Appointment />
        },

        {
            path: "/signup-page",
            element: <Signup />
        },

         {
            path: "/login-page",
            element: <Login />
        },
    ])

    return (
        <RouterProvider router={router} />
    )
}
export default Routing
