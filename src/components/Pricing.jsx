import React from 'react'
import { useState } from 'react'
import MainTitle from './MainTitle'

export default function Pricing() {
    const [inputValue, setInputValue] = useState(false)
     
    function handleCheckBoxChange(){
        setInputValue(!inputValue)
    }

    let pricingCards 
    if(inputValue == true){
        pricingCards = [
            {
                id:1 ,
                title: "Starter" ,
                price: "100" ,
                bill: "/Ye",
            },
            {
                id:2 ,
                title: "Exclusive" ,
                price: "140" ,
                bill: "/Ye",
            },
            {
                id:3 ,
                title: "Premium" ,
                price: "199" ,
                bill: "/Ye",
            }
        ]
    }else{
        pricingCards = [
            {
                id:1 ,
                title: "Starter" ,
                price: "20" ,
                bill: "/mo",
            },
            {
                id:2 ,
                title: "Exclusive" ,
                price: "40" ,
                bill: "/mo",
            },
            {
                id:3 ,
                title: "Premium" ,
                price: "60" ,
                bill: "/mo",
            }
        ]
    }


    const pricingCardsList = pricingCards.map((card)=> {
        return(
            <div className="card" key={card.id}>
                <span>{card.title}</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <h4 className='price'>
                    <del>$</del>
                    <span>{card.price}</span>
                    {card.bill}
                </h4>
                <button>Buy Now</button>
                <ul>
                    <li>Cras justo odio.</li>
                    <li>Dapibus ac facilisis in.</li>
                    <li>Morbi leo risus.</li>
                    <li>Excepteur sint occaecat velit.</li>
                </ul>
            </div>
        )
    })
  return (
    <div className='pricing'>
    <MainTitle span="pricing" h1="Pricing & Plans" p="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."/>
    <div className="container">
            <div className="checkbox">
                <span>Bill Month</span>
                <input type="checkbox" className="switch" onChange={handleCheckBoxChange} checked={inputValue}/>
                <span>Bill Year</span>
            </div>
        <div className="cards">
            {pricingCardsList}
        </div>
    </div>
</div>
  )
}
