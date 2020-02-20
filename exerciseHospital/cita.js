import Paciente from "./paciente.js"
import Tiempos from "./tiempo.js"
export default class Cita {

    constructor(fecha,hora,doctor, paciente){
    this.fecha=fecha;
    this.hora=hora;
    this.doctor=doctor;
    this.paciente=paciente;
    }

    getCita(){
        return `${this.fecha.getFecha()}, ${this.hora.getFormato24()}, ${this.doctor}, ${this.paciente}`
    }
}