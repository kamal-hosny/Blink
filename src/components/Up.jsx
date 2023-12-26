import React from 'react'
import { useEffect , useState } from 'react';
import { FaArrowUp } from "react-icons/fa6";



export default function Up() {

    const [up , setUp] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll" ,()=>{
            if(window.scrollY > 100){
                setUp(true)
            }else{
                setUp(false)
            }
        })
    }, [])

    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

  return (
    <span onClick={scrollUp} className= {up === true ?"up show" : "up"} ><FaArrowUp/></span>
  )
}
