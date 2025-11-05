import NavBar from "../NavBar/NavBar"
import { useEffect } from "react"
function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div>
            <NavBar />
        </div>
    )
}
export default Home
