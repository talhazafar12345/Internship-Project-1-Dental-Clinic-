import Hero1 from "../Sections/Hero1"
import Hero14 from "../Sections/Hero14"
import Hero15 from "../Sections/Hero15"
import Hero16 from "../Sections/Hero16"
import {useEffect} from "react"
import Hero18 from "../Sections/Hero18"
function About() {
    useEffect(()=>{

        window.scrollTo(0,0)
    })
  return (
    <div>
         <Hero1 />
        <Hero14 />
        <Hero15 />
        <Hero16 />
        <Hero18 />

      
    </div>
  )
}
export default About
