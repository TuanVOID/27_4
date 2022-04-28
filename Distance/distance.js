var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    // displayName ="Point";
    Point.prototype.distance = function (b) {
        var dx = this.x - b.x;
        var dy = this.y - b.y;
        return Math.hypot(dx, dy);
    };
    return Point;
}());
var p1 = new Point(20, 20);
var p2 = new Point(30, 40);
console.log(p1);
console.log(p1.distance(p2));
