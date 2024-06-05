import { createClient } from "@libsql/client";
import { contrys as Welcome, contrys } from './contrys.js'
interface Welcome {
    data: Data;
}

interface Data {
    ID: number;
    name_contry: string;
    img: string;
}

export const localConn = createClient(
    { url: "http://127.0.0.1:8080" }
)

export async function createDatabase() {
//     const sql1 = await localConn.execute(`
//     CREATE TABLE countries (
//         ID INTEGER AUTO_INCREMENT PRIMARY KEY,
//         name_country TEXT NOT NULL UNIQUE,
//         img TEXT NOT NULL
//     );
// `);

//     const sql2 = await localConn.execute(`
//     CREATE TABLE users (
//         ID INTEGER AUTO_INCREMENT PRIMARY KEY,
//         username TEXT NOT NULL UNIQUE,
//         password TEXT NOT NULL,
//         points INTEGER DEFAULT 0
//     );
// `);
   
        console.log("tablas de datos creada correctamente");
        contrys.map((contry, i) => {
             localConn.execute({
                sql:'update countries set ID = ? where name_country = ?',
                args:[i+1, contry.name_contry]
             }
                
                
            ).then(data => {console.log("actualizado")}
            );
        })
    }
