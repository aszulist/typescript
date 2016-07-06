/// <reference path="jquery.d.ts" />

window.onload = function () {
    var cals = new Calculator('X', 'Y', 'Output');
};

class Calculator {

    private x: JQuery;
    private y: JQuery;
    private output: JQuery;

    constructor(xId: string, yId: string, outputId: string){
        this.x = $('#' + xId);
        this.y = $('#' + yId);
        this.output = $('#' + outputId);
        this.wiveEvents();
    }

    wiveEvents(): void {
        $('#Add').click(event => {
            this.output.html(this.add(parseInt(this.x.val()), parseInt(this.y.val())).toString())
        });
        $('#Substract').click(event => {
            this.output.html(this.substract(parseInt(this.x.val()), parseInt(this.y.val())).toString())
        });
    }

    add(x: number, y: number): number {
        return x + y;
    }

    substract(x: number, y: number): number {
        return x - y;
    }


}