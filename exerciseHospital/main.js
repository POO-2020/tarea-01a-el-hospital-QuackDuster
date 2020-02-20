import Tiempos from "./tiempo.js";
import Nombre from "./nombre.js";
import Fecha from "./fecha.js";
import Paciente from "./paciente.js"
import Doctor from "./doctor.js";
import Cita from "./cita.js";
import Hospital from "./hospital.js"
export default class Main {


    pruebaTiempo() {
        let horas = new Tiempos(5,22,"pm");
        let h24 = new Tiempos (3,45, "pm") 
        console.log("-----------Tiempo---------")
        console.log(horas.getFormato12());
        console.log(h24.getFormato24())
    }

    pruebaNombre() {
        let people = new Nombre("Antonio Eduardo", "Lopez", "Castro");
        console.log("---------Nombre-----------")
        console.log(people.getNombreCompleto())
        console.log(people.getApellidoNombre())
        console.log(people.getIniciales())
    }

    pruebaFecha() {
        let dia = new Fecha(9,5,1999)
        
        console.log("---------Fecha------------")
        console.log(dia.getAños())
        console.log(dia.getMeses())
        console.log(dia.getSemanas())
        console.log(dia.getDias())
        console.log(dia.getFecha())
        console.log(dia.getDiaFecha())
    }

    pruebaPaciente() {
        let nombre = new Nombre("Oscar Alfredo", "Ramirez", "Valenciana")
        let fecha = new Fecha (16,4,1999)
        let numero = ("3123425632")
        let paciente = new Paciente (nombre, fecha, numero)
        console.log("------------Paciente---------")
        console.log(paciente.getPerfil())
    }
    
    pruebaDoctor() {
        let cedula = ("43HSK34KFJ3")
        let especialidad = ("Medico Cirujano")
        let nombre = new Nombre("Roberto", "Mendoza","Perez")
        let telefono = ("312213342")
        let doctor = new Doctor(cedula,especialidad,nombre,telefono)
        console.log("--------------Doctor-------------")
        console.log(doctor.getPerfil())
    }

    pruebaCita() {
        let fecha = new Fecha(12,4,2020)
        let hora = new Tiempos (12,44, "pm")
        let doctor = ("Roberto Alfredo")
        let paciente = ("Pablo Alfredo Gomez Rodriguez")
        let cita = new Cita (fecha,hora,doctor,paciente)
        console.log("---------Citas--------")
        console.log(cita.getCita())
    }

    pruebaHospital(){
        let nombre = new Nombre("Antonio","Fernandez","Herrera")
        let direccion= ("Venustiano Carranza #604")
        let hora= new Tiempos (3,45,"pm")
        let fecha=new Fecha (3,4,2020)
        let doctores= new Doctor ("Alonzo")
        let citas = new Cita()
        console.log(nombre.getNombreCompleto())
        console.log(direccion)
    }

}

let tester = new Main()
tester.pruebaTiempo();
tester.pruebaNombre();
tester.pruebaFecha();
tester.pruebaPaciente();
tester.pruebaDoctor();
tester.pruebaCita();

