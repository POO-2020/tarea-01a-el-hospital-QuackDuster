export default class Tiempos {

    constructor (hora,minutos,periodo) {
        this.hora = hora;
        this.minutos = minutos;
        this.periodo = periodo.toLowerCase();
    }


    getFormato12() {
        return `La hora es ${this.hora}:${this.minutos} ${this.periodo} en formato 12 horas`
    }


    
}