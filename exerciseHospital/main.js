import Tiempos from "./tiempo.js";
import Nombre from "./nombre.js";
import Fecha from "./fecha.js";
import Paciente from "./paciente.js"
import Doctor from "./doctor.js";
import Cita from "./cita.js";
import Hospital from "./hospital.js";
class Main {

    constructor(){
        this.hospital=new Hospital("Clinica #4","Avenida Madero, #455")
    }

    pruebaTiempo() {
        let horas = new Tiempos(9,22,"am");
        console.log("-----------Tiempo---------")
        console.log(horas.getFormato12());
        console.log(horas.getFormato24());
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
        console.log("--------Paciente-----------")
        console.log(paciente.getPerfil())
    }
    
    pruebaDoctor() {
        let cedula = ("43HSK34KFJ3")
        let especialidad = ("Medico Cirujano")
        let nombre = new Nombre("Roberto", "Mendoza","Perez")
        let telefono = ("312213342")
        var doctor = new Doctor(cedula,especialidad,nombre,telefono)
        console.log("--------Doctores-----------")
        console.log(doctor.getPerfilb())
    }

    pruebaCita() {
        let fecha = new Fecha(12,4,2020)
        let hora = new Tiempos (12,44, "pm")
        let doctor = new Doctor ("213131444","Pediatria",new Nombre("Alberto","Roberto", "Alfredo"),"GGGD3545F" )
        let paciente = new Paciente (new Nombre("Oscar","Flores","Jimenez"), new Fecha(2,4,2020), "31323245")
        let cita = new Cita (fecha,hora,doctor,paciente)
        console.log("----------Citas------------")
        console.log(cita.getCita())
    }

    pruebaHospital(){

        console.log("---------Hospital----------")
        let doctorA = new Doctor("312122435","Cirujano", new Nombre("Alfredo","Rosales", "Villa"),"32324FDSAAA" )
        let doctorB = new Doctor("21345556","Oftalmologo", new Nombre("Everardo", "Castro", "Flores"), "245663AF")
        let cita1 = new Cita(new Fecha(20,12,2020),new Tiempos(5,0,"pm"),new Doctor("5554663256","Ortodoncia", new Nombre("Carlos", "Castro", "Flores"), "AF343FGGS43"), new Paciente(new Nombre("Juan", "Cortes", "Garcia"),new Fecha(2,5,2020),"3122433564"))
        this.hospital.registrarDoctor(doctorA)
        this.hospital.registrarDoctor(doctorB)
        this.hospital.listarDoctores()
        this.hospital.registrarCita(cita1)
        this.hospital.listarCitas()
        
        
    }

}

let tester = new Main()
tester.pruebaTiempo();
tester.pruebaNombre();
tester.pruebaFecha();
tester.pruebaPaciente();
tester.pruebaDoctor();
tester.pruebaCita();
tester.pruebaHospital();

