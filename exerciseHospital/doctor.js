import Nombre from "./nombre.js"
export default class Doctor {
    constructor(cedula,especialidad,nombre,telefono){

        this.cedulas = cedula;
        this.especialidades = especialidad;
        this.nombres = nombre;
        this.telefonos = telefono;

    }
    getPerfilb(){
        return `${this.cedulas}, ${this.especialidades}, ${this.nombres.getNombreCompleto()}, ${this.telefonos}`
    }
}