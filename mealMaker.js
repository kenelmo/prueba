const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  
  get appetizers() {
  
},
  set appetizers(appetizerIn){
    
  },
  
  get mains() {
  
},
  set mains(mainIn){
    
  },
  
  get desserts() {
  
},
  set desserts(dessertIn){
    
  },
  
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },
  
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse(courseName){
  let dishes = this._courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
},
  
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, and the price is ${totalPrice}.`;
  }
  
};


menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('mains', 'Pasta Carbonara', 10.25);
menu.addDishToCourse('desserts', 'Chocolate Cake', 2.50);
menu.addDishToCourse('appetizers', 'French Fries', 4.25);
menu.addDishToCourse('mains', 'Pasta Napolitana', 10.25);
menu.addDishToCourse('desserts', 'Ice Cream', 2.50);

let meal = menu.generateRandomMeal();

console.log(meal);