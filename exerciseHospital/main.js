import Tiempos from "./tiempo.js"
export default class Main {


    pruebaTiempo() {
        let horas = new Tiempos(5,22,"pm");
        let h24 = new Tiempos (3,45, "pm") 
        console.log(horas.getFormato12());
        console.log(h24.getFormato24())
    }

    
}

let tester = new Main();
tester.pruebaTiempo();

