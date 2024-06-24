import { contrys as Welcome, contrys } from '@/app/libs/contrys.js'
interface res {
    respuesta: any[],
    respuestasIncorrectas: any[]
}
export async function getContry() {
    const res : res[] = [
        {respuesta: [],
        respuestasIncorrectas: []
        }
    ]

    const randonNumber = getRandonNumber() 
    console.log(randonNumber);
    
    const newArry = Welcome.filter(item => item.ID === randonNumber).map(item => {return {ID:item.ID , img : item.img, name : item.name_contry}})
    res[0].respuesta = newArry

    for (let i = 0; i < 3; i++) {
        const random = getRandonNumber({number : randonNumber})
        res[0].respuestasIncorrectas.push( Welcome.filter(item => item.ID === random).map(item => {return {ID:item.ID, name : item.name_contry}}))
        
    }

    try {
    console.log(res)

    return res
    } catch (error) {
        console.log(error);
        
    }
}
function getRandonNumber({ number }: { number?: number } = {}): number {
    if (number !== undefined) {
        return Math.floor(Math.random() * 250);
    }

    while (true) {
        const randonNumber = Math.floor(Math.random() * 249 + 1);
        if (number !== randonNumber) {
            return randonNumber;
        }
    }
}