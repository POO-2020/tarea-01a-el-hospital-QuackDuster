import Tiempos from "./tiempo.js";
import Nombre from "./nombre.js";
import Fecha from "./fecha.js";
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

    
}

let tester = new Main()
tester.pruebaTiempo();
tester.pruebaNombre();
tester.pruebaFecha();

