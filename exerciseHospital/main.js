import Tiempos from "./tiempo.js"
class Main {


    pruebaTiempo() {
        let horas = new Tiempos(5,22,"pm");
        console.log(horas.getFormato12());
    }

    
}

let tester = new Main();
tester.pruebaTiempo();

