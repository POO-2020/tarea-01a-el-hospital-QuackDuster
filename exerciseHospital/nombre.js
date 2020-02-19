import Main from "./main.js"
export default class Nombre {
 
    constructor (nombre, apePat, apeMat) {
        this.nombre = nombre
        this.apePat = apePat
        this.apeMat = apeMat
    }
    

    getNombreCompleto() {
        return `${this.nombre} ${this.apePat} ${this.apeMat}`
    }

    getApellidoNombre() {
        return `${this.apePat} ${this.apeMat} ${this.nombre}`
    }

    getIniciales() {
        return `${this.nombre.charAt(0)}${this.apePat.charAt(0)}${this.apeMat.charAt(0)}`
    }

}