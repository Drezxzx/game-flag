"use cliebt"
import { useState,useEffect } from "react"
import Game from "../libs/game"
import { useLife } from "../context/context"
export default function GameFinished() {
    const [isFinished, setFinished] = useState<boolean>(false)
    useEffect(()=>{
        const life = Game.getLife()
        const isOver = Game.checkIfTheGameIsOver({life})
        if (isOver) {
            setFinished(true)
            console.log("true");
        }
    },[])

    return (
        isFinished && <div className="w-screen h-screen flex-col flex justify-center items-center bg-slate-500/40 backdrop-blur-lg absolute z-[999]">
        <div className="flex flex-col  w-full justify-center gap-5 items-center md:w-1/3 h-1/3 bg-black/80 backdrop-blur-xl rounded-lg ">
        <h1 className="text-2xl font-bold">Has Perdido 💔</h1>
        <button onClick={()=>{
            localStorage.clear()
            location.reload()
            setFinished(false)
        }} className="rounded-full  bg-emerald-500/90 text-white font-semibold p-2">Jugar de nuevo</button>
        </div>
        
    </div>
    )
}