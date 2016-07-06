var demo_02_06;
(function (demo_02_06) {
    var points1 = { x: 10, y: 20 };
    var x = points1.x;
    var points2;
    points2 = { x: 10, y: 20 };
    var points3 = { x: 1 };
    var rectangle = {
        h: 10,
        w: 20,
        calcArea: function () {
            return this.h * this.w;
        }
    };
    console.log('rect area = ' + rectangle.calcArea());
    var squareIt1 = function (x) {
        return x * x;
    };
    var val1 = squareIt1(2);
    console.log('squareIt1 = ' + val1);
    var val2 = squareIt1(8);
    console.log('squareIt2 = ' + val2);
    var squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    var sql1 = squareIt({ h: 10 });
    console.log('rectangle h and w of 10 = ' + sql1);
    var sql2 = squareIt({ h: 10, w: 40 });
    console.log('rectangle h and w of 10 and 40 = ' + sql2);
})(demo_02_06 || (demo_02_06 = {}));
//# sourceMappingURL=objects.js.map