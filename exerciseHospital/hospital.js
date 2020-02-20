export default class Hospital {

    constructor(nombre, direccion){
    this.nombre=nombre
    this.direccion=direccion
    this.doctores= new Array()
    this.citas= new Array()
    }

    
    registrarDoctor(Doctor){
        this.doctores.push(Doctor)
    }

    listarDoctores(){
        console.log(">>>>>Doctores<<<<<<")
        this.doctores.forEach( (doct, i) => {
            console.log(`(${i+1}) ${doct.getPerfilb()}`)
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