import React ,{useState , useEffect} from'react'
import Icon from './Icon'
import Nav from './Nav'
import Nav2 from './Nav2'
import Sign from './Sign'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


export default function Header() {
    const [nav ,setNav] = useState(false)

    const [headerFixed , setHeaderFixed] = useState(false)

    useEffect (()=>{
        if(document.title !== 'Blink'){
            setHeaderFixed(true)
        }else{
            window.addEventListener("scroll",()=>{
                if(window.scrollY  > 1){
                    setHeaderFixed(true)
                }else{
                    setHeaderFixed(false)
                }
            })
        }
        
    },[])

    const handleNav = () => {
      setNav(!nav)
    }
return (
    
    <div className= {headerFixed === true ? "header fixed" : "header"}>
        <div className="container">
            <Icon />

            <Nav/>
            <Nav2 how={nav}/>
            <div className="Sign-Menu">
            <Sign />
                <div className="menu" onClick ={handleNav}> 
                    {!nav ? <AiOutlineMenu size={30}/> : < AiOutlineClose size={30}/>}
                    
                </div>
            </div>
        </div>
    </div>
  )
}
