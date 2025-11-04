





import Hero1 from "../Sections/Hero1"
import Hero29 from "../Sections/Hero29"
import Hero30 from "../Sections/Hero30"
import {useEffect} from "react"



function Appointment() {

    useEffect(()=>{

        window.scrollTo(0,0)
    })
  return (
    <div>
         <Hero1 />
        <Hero29 />
        <Hero30 />
      
    </div>
  )
}

export default Appointment
