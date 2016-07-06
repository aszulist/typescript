class Car {
    engine: string;
    constructor(engine: string){
        this.engine = engine;
    }

    start() {
        alert('Engine started: ' + this.engine)
    }

    stop() {
        alert('Engine stopped: ' + this.engine)
    }

}

window.onload = function () {
    var car: Car = new Car('V8');
    car.start();
    car.stop();
}