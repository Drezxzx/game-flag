import { NextResponse } from "next/server";
import { turso } from "../libs/conn";


export async function GET() {
    try {
    const data = await turso.execute("SELECT * FROM contrys LIMIT 1")
    return NextResponse.json({data : data.rows[0]})
    } catch (error) {
        console.log(error);
        
    }
    
}