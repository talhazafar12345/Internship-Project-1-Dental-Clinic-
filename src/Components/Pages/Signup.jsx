import Hero1 from "../Sections/Hero1"
import Hero31 from "../Sections/Hero31"
import Hero32 from "../Sections/Hero32"
import { useEffect } from "react"
function Signup() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div>
      <Hero1 />
      <Hero31 />
      <Hero32 />
    </div>
  )
}
export default Signup
