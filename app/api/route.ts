import { NextResponse } from "next/server";
import { contrys as Welcome, contrys } from '@/app/libs/contrys.js'

export async function GET() {
    contrys.sort()
    try {
    console.log(contrys[getRandonNumber()])

    return NextResponse.json({data : contrys[getRandonNumber()]})
    } catch (error) {
        console.log(error);
        
    }
    
}

function getRandonNumber() {
    const randonNumber = Math.floor(Math.random() * 250 )

    return randonNumber
}