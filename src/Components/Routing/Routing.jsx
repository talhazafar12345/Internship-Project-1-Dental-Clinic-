
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Services from '../Pages/Services'
import Pricing from '../Pages/Pricing'
import Appointment from '../Pages/Appointment'


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
    ])

    return (
        <RouterProvider router={router} />
    )
}
export default Routing
