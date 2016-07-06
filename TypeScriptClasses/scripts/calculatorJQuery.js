/// <reference path="jquery.d.ts" />
window.onload = function () {
    var cals = new Calculator('X', 'Y', 'Output');
};
var Calculator = (function () {
    function Calculator(xId, yId, outputId) {
        this.x = $('#' + xId);
        this.y = $('#' + yId);
        this.output = $('#' + outputId);
        this.wiveEvents();
    }
    Calculator.prototype.wiveEvents = function () {
        var _this = this;
        $('#Add').click(function (event) {
            _this.output.html(_this.add(parseInt(_this.x.val()), parseInt(_this.y.val())).toString());
        });
        $('#Substract').click(function (event) {
            _this.output.html(_this.substract(parseInt(_this.x.val()), parseInt(_this.y.val())).toString());
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
//# sourceMappingURL=calculatorJQuery.js.map