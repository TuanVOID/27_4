class Point {
    x: number;
    y:number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    // displayName ="Point";
    distance(b){
        let dx = this.x - b.x;
        let dy = this.y -b.y;
        return Math.hypot(dx,dy);
    }

}
let p1 = new Point(20,20);
let p2 = new Point(30,40);
console.log(p1);
console.log(p1.distance(p2));