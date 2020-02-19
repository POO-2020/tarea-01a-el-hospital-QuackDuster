import Tiempos from "./tiempo.js";
import Nombre from "./nombre.js";
export default class Main {


    pruebaTiempo() {
        let horas = new Tiempos(5,22,"pm");
        let h24 = new Tiempos (3,45, "pm") 
        console.log(horas.getFormato12());
        console.log(h24.getFormato24())
    }

    pruebaNombre() {
        let people = new Nombre("Antonio Eduardo", "Lopez", "Castro");
        console.log(people.getNombreCompleto())
        console.log(people.getApellidoNombre())
        console.log(people.getIniciales())
    }

    
}

let tester = new Main()
tester.pruebaTiempo();
tester.pruebaNombre();

