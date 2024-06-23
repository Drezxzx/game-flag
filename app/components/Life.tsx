"use client"
import { useEffect, useState } from "react"
import { useLife } from "../context/context"
import Game from "../libs/game"

export default function Life (){
    const [vidas, setvidas] = useState<number>(0)
    const [hearts, sethearts] = useState<string[]>([])
    const {lifes, setLife} = useLife()
    
    useEffect(()=>{
       const lifeInStorage = localStorage.getItem("life")

       if (!lifeInStorage) {
        localStorage.setItem("life" , "3")
        setvidas(3)
        setLife(3)
       }else{
        setvidas(Number(lifeInStorage))
        setLife(Number(lifeInStorage))
       }
    },[lifes])

    useEffect(()=>{
        const lifeInStorage = localStorage.getItem("life")
        setLife(Number(lifeInStorage))
        prepareHearts()
        
        
    },[vidas])
    
    const prepareHearts = () => {
        const newhearts = [];
        for (let i = 0; i < vidas; i++) {
          newhearts.push("❤️");
        }
        sethearts(newhearts);
       

      };

    return(
        <div className="w-screen flex items-center p-2 justify-end">
            <div>
            {
                hearts.map((item, index) => <span key={index}>{item}</span>)
            }
            </div>
            
        </div>
    )
}