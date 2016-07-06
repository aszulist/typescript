var Example = (function () {
    function Example() {
    }
    Example.prototype.wyswietl = function (dzialanie) {
        console.log(dzialanie(4, 2));
    };
    return Example;
}());
var przyklad = new Example();
przyklad.wyswietl(function (n1, n2) { return n1 + n2; });
var dodawanie = function (n1, n2) { return n1 + n2; };
var dodaj2 = function (n1, n2) {
    return n1 + n2;
};
przyklad.wyswietl(dodawanie);
przyklad.wyswietl(dodaj2);
//# sourceMappingURL=example.js.map