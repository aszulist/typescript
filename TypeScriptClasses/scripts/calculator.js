window.onload = function () {
    var cals = new Calculator('X', 'Y', 'Output');
};
var Calculator = (function () {
    function Calculator(xId, yId, outputId) {
        this.x = document.getElementById(xId);
        this.y = document.getElementById(yId);
        this.output = document.getElementById(outputId);
        this.wiveEvents();
    }
    Calculator.prototype.wiveEvents = function () {
        var _this = this;
        document.getElementById('Add').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.add(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
        });
        document.getElementById('Substract').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.substract(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
        });
    };
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.substract = function (x, y) {
        return x - y;
    };
    return Calculator;
}());
//# sourceMappingURL=calculator.js.map