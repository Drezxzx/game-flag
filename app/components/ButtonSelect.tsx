"use client"

import { useState } from "react"
import { useLife } from "../context/context"
import Game from "../libs/game"


export default function ButtonSelect({id, name, correct}:
    {id : number, name : string, correct : string})
    {
        const life = Game.getLife()
        const {setLife, endGame} = useLife()
        const [disable, setDisable] = useState<boolean>(false)
        const [isCorrect, setCorrect] = useState<boolean | null>(null)
        
        
        const handleClick = (e : React.MouseEvent<HTMLButtonElement>)=>{
            
            const target = e.target as HTMLButtonElement
            console.log(target.classList)
            if (target.id === correct) {
                disableAllButtons(target.id)
                setCorrect(true)
                setTimeout(() => {
                    localStorage.removeItem("question")
                    localStorage.removeItem("correct")
                    location.reload()
                }, 1500)
            } else {
                disableAllButtons(target.id)
                setCorrect(false)
                Game.lostLife(life, setLife, endGame)
                setTimeout(() => {
                    localStorage.removeItem("question")
                    localStorage.removeItem("correct")
                     location.reload()
                }, 1500)
            }
            
        }

        const disableAllButtons = (id: string )=>{
            const bottons = document.querySelectorAll("button")
            bottons.forEach((button)=>{
                    button.disabled = true
            })
            setDisable(true)
        }
        const className = isCorrect === null ? "bg-white" : (isCorrect ? "bg-green-600" : "bg-red-600")
        
        return (
            <button 
                disabled ={disable}
                onClick={handleClick} 
                id={id.toString()} 
                className={`buttons disabled:opacity-70 disabled:text-slate-500/70 disabled:backdrop-brightness-50 disabled:pointer-events-none w-56 ${className} font-semibold p-2 text-black transition-all hover:scale-110`}>
                {name}
            </button>
        )
    }
