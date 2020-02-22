import Doctor from "./doctor.js"
export default class Hospital {

    constructor(nombre, direccion){
    this.nombres=nombre
    this.direcciones=direccion
    this.doctores= new Array()
    this.citas= new Array()
    }

    
    registrarDoctor(doctor){
        this.doctores.push(doctor)
    }

    listarDoctores(){
        console.log(">>>>>Doctores<<<<<<")
        this.doctores.forEach( (doctor,i) => {
            console.log(`(${i+1}) ${doctor.getPerfilb()}`)
        })
            
    }

    registrarCita(cita){
        this.citas.push(cita)
    }

    listarCitas(){
        console.log(">>>>>Citas<<<<<")
        this.citas.forEach( (cita,i) => {
            console.log(`(${i+1}) ${cita.getCita()}`)
        })
            
        
    }
}