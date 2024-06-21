"use client"
import { useEffect, useState } from "react"
import { useLife } from "../context/context"

export default function Life (){
    const life = useLife((state) => state.life)
    const [lifes, setLifes] = useState<string[]>([])
    useEffect(()=>{
        hearts()
    },[life])
    
    const hearts = () => {
        const newLifes = [];
        for (let i = 0; i < life; i++) {
          newLifes.push("❤️");
        }
        setLifes(newLifes);
      };

    return(
        <div>
            {
                lifes.map((item, index) => <span key={index}>{item}</span>)
            }
        </div>
    )
}