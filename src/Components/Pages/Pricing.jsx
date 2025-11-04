import Hero1 from "../Sections/Hero1"
import Hero26 from "../Sections/Hero26"
import Hero27 from "../Sections/Hero27"
import { useEffect } from "react"



function Pricing() {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div>

            <Hero1 />
            <Hero26 />
            <Hero27 />

        </div>
    )
}

export default Pricing
