
function recipe(title:string,serving:number,ingredient:string[]){
    this.title = title;
    this.serving = serving;
    this.ingredients = ingredient;
}

let mitom = new recipe("mi tom", 2,['400 g sườn thăn', '4 tbsp nước mắm', '5 tsp đường', '5 tsp nước cốt chanh']);
console.log(mitom)
