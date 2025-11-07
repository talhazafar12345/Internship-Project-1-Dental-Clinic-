import Footer from "../Footer/Footer"
import Hero1 from "../Sections/Hero1"
import Hero19 from "../Sections/Hero19"
import Hero20 from "../Sections/Hero20"
import { useEffect } from "react"
function Services() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div>
      <Hero1 />
      <Hero19 />
      <Hero20 />
      <div className="abffaa">

     
      <Footer />
       </div>

    </div>
  )
}
export default Services
