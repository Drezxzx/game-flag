export interface Data {
    data: Datum[];
}

export interface Datum {
    respuesta:             Respuesta[];
    respuestasIncorrectas: Array<RespuestasIncorrecta[]>;
}
export interface Question{
    ID:   number;
    img:  string;
    name: string;
}
export interface Respuesta {
    ID:   number;
    img:  string;
    name: string;
}

export interface RespuestasIncorrecta {
    ID:   number;
    img:  string;
    name: string;
}
