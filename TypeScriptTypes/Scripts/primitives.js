var primitives;
(function (primitives) {
    //any
    var data;
    var info;
    var doSomething = function (arg) {
        return arg;
    };
    //primitives
    var age = 21;
    var score = 34.56;
    var rating = 99.99;
    var hasData = true;
    var isReady = true;
    var isBald = function () { return 'yes'; };
    var hasHair = !!isBald();
    var firstName = 'John';
    var lastName = 'Papa';
    function getArrayLength(x) {
        var len = x.length;
        return len;
    }
    var names = ['John', 'Dan', 'Aaron', 'Fritz'];
    var firstPerson = names[0];
    console.log(getArrayLength(names));
    //null
    var guitarSales = null;
    var animal = null;
    var orderDate = null;
    //undefinied
    var quantity;
    var company = undefined;
    console.log('undefined examples');
    console.log(quantity);
    console.log(company);
})(primitives || (primitives = {}));
//# sourceMappingURL=primitives.js.map