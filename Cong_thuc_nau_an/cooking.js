function recipe(title, serving, ingredient) {
    this.title = title;
    this.serving = serving;
    this.ingredients = ingredient;
}
var mitom = new recipe("mi tom", 2, ['400 g sườn thăn', '4 tbsp nước mắm', '5 tsp đường', '5 tsp nước cốt chanh']);
console.log(mitom);
