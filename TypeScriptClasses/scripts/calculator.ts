window.onload = function () {
    var cals = new Calculator('X', 'Y', 'Output');
};

class Calculator {

    private x: HTMLInputElement;
    private y: HTMLInputElement;
    private output: HTMLSpanElement;

    constructor(xId: string, yId: string, outputId: string){
        this.x = <HTMLInputElement>document.getElementById(xId);
        this.y = <HTMLInputElement>document.getElementById(yId);
        this.output = <HTMLSpanElement>document.getElementById(outputId);
        this.wiveEvents();
    }

    wiveEvents(): void {
        document.getElementById('Add').addEventListener('click',
            event => {
                this.output.innerHTML = this.add(parseInt(this.x.value), parseInt(this.y.value)).toString();
            }
        );
        document.getElementById('Substract').addEventListener('click',
            event => {
                this.output.innerHTML = this.substract(parseInt(this.x.value), parseInt(this.y.value)).toString();
            }
        );
    }

    add(x: number, y: number): number {
        return x + y;
    }

    substract(x: number, y: number): number {
        return x - y;
    }


}