"use client"

import { useState } from "react"
import { useLife } from "../context/context"


export default function ButtonSelect({id, name, correct}:
    {id : number, name : string, correct : string}) 
    {
        const life = useLife((state) => state.life)
        const lostLife = useLife((state) => state.lostLife)
        const [isCorrect, setCorrect] = useState<boolean | null>(null)

        const handleClick = (e : React.MouseEvent<HTMLButtonElement>)=>{
            const target = e.target as HTMLButtonElement
            console.log(target.classList)
            if (target.id === correct) {
                setCorrect(true)
                setTimeout(() => {
                    localStorage.clear()
                     location.reload()
                }, 1500)
            } else {
                setCorrect(false)
                lostLife()
                setTimeout(() => {
                    localStorage.clear()
                     location.reload()
                }, 1500)
            }
        }

        const className = isCorrect === null ? "bg-white" : (isCorrect ? "bg-green-600" : "bg-red-600")
        
        return (
            <button 
                onClick={handleClick} 
                id={id.toString()} 
                className={`w-56 ${className} font-semibold p-2 text-black transition-all hover:scale-110`}>
                {name}
            </button>
        )
    }
