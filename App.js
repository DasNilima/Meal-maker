const menu = {
    _courses: {
          appetizers: [ ],
          mains: [ ],
          desserts: [ ]
        },
 get appetizers(){
    return this._courses.appetizers
  },
  set appetizers(appetizers){
    this._courses.appetizers.push(appetizers)
  },
  get mains(){
    return this._courses.mains
  },
  set mains(mains){
    this._courses.mains.push(mains)
  },
  get desserts(){
    return this._courses.desserts
  },
  set desserts(desserts){
    this._courses.desserts.push(desserts)
  },
   get courses(){
    return{
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
 addDishToCourse(courseName,dishName,dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    }
    return this._courses[courseName].push(dish);
  },
   getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex]
  },
   generateRandomMeal: function() {
    const appetizers = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizers.price + mains.price + desserts.price;
 
    return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name}, The price is ${totalPrice}.`;
  }
};
menu.addDishToCourse('appetizers', 'Caesar Salad', 12);
menu.addDishToCourse('appetizers', 'cheese sticks', 10);
menu.addDishToCourse('appetizers', 'french fries', 26);
menu.addDishToCourse('mains', 'Roast Lamb', 20);
menu.addDishToCourse('mains', 'pasta', 90);
menu.addDishToCourse('mains', 'beef steak', 120);
menu.addDishToCourse('desserts', 'cake', 25);
menu.addDishToCourse('desserts', 'ice cream', 35);
menu.addDishToCourse('desserts', 'creppe', 40);
const meal = menu.generateRandomMeal();
console.log(meal);
