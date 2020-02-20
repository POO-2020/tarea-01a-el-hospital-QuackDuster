export default class Tiempos {

    constructor (hora,minutos,periodo) {
        this.hora = hora;
        this.minutos = minutos;
        this.periodo = periodo;
        var hora24 = new Date()
        this.h24hor = hora24.getHours()
        this.h24min = hora24.getMinutes()

        

    }
    getFormato12() {
        return `${this.hora}:${this.minutos} ${this.periodo}`
    }

    getFormato24() {
        return `${this.h24hor}:${this.h24min} ${this.periodo}`
    }

    
}