export default class Doctor {
    constructor(cedula, especialidad,nombreDoc,telefono){

        this.cedula= cedula;
        this.especialidad = especialidad;
        this.nombreDoc = nombreDoc;
        this.telefono= telefono;

    }
    getPerfilb(){
        return `${this.cedula}, ${this.especialidad}, ${this.nombreDoc.getNombreCompleto()}, ${this.telefono}`
    }
}