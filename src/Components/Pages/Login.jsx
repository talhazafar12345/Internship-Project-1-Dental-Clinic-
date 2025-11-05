import Hero1 from "../Sections/Hero1"
import Hero33 from "../Sections/Hero33"
import Hero34 from "../Sections/Hero34"
import { useEffect } from "react"
function Login() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div>
            <Hero1 />
            <Hero34 />
            <Hero33 />
        </div>
    )
}
export default Login
