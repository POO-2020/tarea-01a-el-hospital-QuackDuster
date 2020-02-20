import Nombre from "./nombre.js"
import Fecha from "./fecha.js"
export default class Paciente {

    constructor(nombre, fecha, numero){
        this.nombre= nombre;
        this.fecha= fecha;
        this.numero= numero;
    }

    getPerfil(){
        return `${this.nombre.getNombreCompleto()}, ${this.fecha.getFecha()}, ${this.numero}`
    }
}