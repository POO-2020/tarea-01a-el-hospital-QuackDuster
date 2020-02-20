import Cita from "./cita.js"
import Nombre from "./nombre.js"
import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
export default class Hospital {
    constructor(nombre, direccion,hora,fecha,doctores, citas){
    this.nombre=nombre;
    this.direccion=direccion;
    this.hora=hora;
    this.fecha=fecha;
    this.doctores=doctores;
    this.citas=citas;
    }

    registrarDoctor(){
        return `${this.nombre}, ${this.direccion}`
    }

    listarDoctores(){
        return `${this.doctores}`
    }

    registrarCita(){
        return `${this.nombre.getNombreCompleto()}, ${hora.getFormato24()}, ${fecha.getFecha()}`
    }

    listarCitas(){
        return `${this.citas.getCita()}`
    }
}