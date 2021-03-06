module primitives {

    //any
    var data: any;
    var info;
    var doSomething = function (arg) {
        return arg;
    }

    //primitives

    var age: number = 21;
    var score: number = 34.56;
    var rating = 99.99;

    var hasData: boolean = true;
    var isReady = true;
    var isBald = function () { return 'yes'; }
    var hasHair = !!isBald();

    var firstName: string = 'John';
    var lastName = 'Papa';

    function getArrayLength(x: string[]){
        var len: number = x.length;
        return len;
    }

    var names: string[] = ['John', 'Dan', 'Aaron', 'Fritz'];
    var firstPerson = names[0];
    console.log(getArrayLength(names));

    //null
    var guitarSales: any = null;
    var animal = null;
    var orderDate: Date = null;

    //undefinied
    var quantity: number;
    var company = undefined;
    console.log('undefined examples');
    console.log(quantity);
    console.log(company);

}