/**
 * Objects
 * key:value pairs in curly braces
 */

// create band object
// var band = {
//     name: "The Beatles",
//     genre: "Rock",
//     members: ["John", "Paul", "George", "Ringo"],
//     formed: 1960,
//     albums: [
//         {
//             title: "Please Please Me",
//             released: 1963,

//         },
//         {
//             title: "With the Beatles",
//             released: 1963

//         },
//         {
//             title: "A Hard Day's Night",
//             released: 1964
//         }
//     ]
// };

// // describe the band
// console.error('===============Bands====================');
// // destrcturing
// let { name, genre, members, formed, albums } = band;
// console.log(name);
// console.log(genre);
// console.log(members);
// console.log(formed);
// console.log(albums);

// let { title, released } = albums[0];
// console.log(title);
// console.log(released);

// let { title: albumTitle, released: albumReleased } = albums[0];
// console.log(albumTitle);
// console.log(albumReleased);
// console.error('===================================');


// // create an object
// var person = {
//     name: "John",
//     age: 32,
//     favColor: "blue",
//     height: 183
// };

// // access an object
// console.log(person.name);
// console.log(person["name"]);

// // do Inception
// var movie = {
//     title: "Inception",
//     duration: 148,
//     actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy"]
// };

// // access the actors array
// console.log(movie.actors);
// console.log(movie["actors"]);

// // access the second actor
// console.log(movie.actors[1]);

// // Inheritance
// var car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2018,
//     color: "white",
//     mileage: 10000,
//     drive: function() {
//         console.log("Vroom vroom!");
//     }
// };

// // create a new object that inherits from car
// var myCar = Object.create(car);
// console.log(myCar.make);
// console.log(myCar.model);
// console.log(myCar.year);
// console.log(myCar.color);
// console.log(myCar.mileage);
// myCar.drive();

// // oops, I forgot to change the mileage
// myCar.mileage = 20000;
// console.log(myCar.mileage);

// // OOP JavaScript
// // constructor function
// function Car(make, model, year, color, mileage) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.mileage = mileage;
//     this.drive = function() {
//         console.log("Vroom vroom!");
//     };
// }

// // create a new object using the constructor function
// var myCar = new Car("Toyota", "Camry", 2018, "white", 10000);
// console.log(myCar.make);
// console.log(myCar.model);
// console.log(myCar.year);
// console.log(myCar.color);
// console.log(myCar.mileage);
// myCar.drive();

// // OOP Class
// class Vehicle {
//     constructor(make, model, year, color, mileage) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//         this.mileage = mileage;
//     }
//     drive() {
//         console.log("Vroom vroom!");
//     }
// }

// // create a new object using the class
// var myCar = new Vehicle("Toyota", "Camry", 2018, "white", 10000);
// console.log(myCar.make);
// console.log(myCar.model);
// console.log(myCar.year);
// console.log(myCar.color);
// console.log(myCar.mileage);
// myCar.drive();


// console.error('===============Pizza====================');

// class Pizza
// {
//     constructor(size, crust, sauce, cheese, toppings)
//     {
//         // we use the underscore to indicate that these properties should not be accessed directly
//         // instead, we will use getters and setters
//         // however, this is not a foolproof way to prevent direct access
//         // we will discuss this in more detail later
//         // to make these properties truly private, we need to use a closure

//         // use closure to make these properties truly private
//         this.getSize = function()
//         {
//             return size;
//         }
//         this.setSize = function(newSize)
//         {
//             size = newSize;
//         }


//         this._size = size;
//         this._crust = crust;
//         this._sauce = sauce;
//         this._cheese = cheese;
//         this._toppings = toppings;
//     }

//     // getter variation 1: not preferred
//     get size()
//     {
//         return this._size;
//     }

//     // setter variation 1: not preferred
//     set size(size)
//     {
//         if (size === "s" || size === "m" || size === "l")
//         {
//             this._size = size;
//         }
//         else
//         {
//             console.log("Please enter a valid size.");
//         }
//     }

//     // setter variation 2: preferred way
//     setSize(size)
//     {
//         if (size === "s" || size === "m" || size === "l")
//         {
//             this._size = size;
//         }
//         else
//         {
//             console.log("Please enter a valid size.");
//         }
//     }

//     // getter variation 2: preferred way
//     getSize()
//     {
//         return this._size;
//     }


//     bake()
//     {
//         console.log("The pizza is baking.");
//     }
//     slice()
//     {
//         console.log("The pizza is sliced.");
//     }
//     box()
//     {
//         console.log("The pizza is boxed.");
//     }
// }


// sub class of Pizza
// class DeepDish extends Pizza
// {
//     constructor(size, crust, sauce, cheese, toppings, slices)
//     {
//         super(size, crust, sauce, cheese, toppings);
//         this.slices = slices;
//     }

//     // override the slice method
//     slice()
//     {
//         console.log("The pizza is sliced into " + this.slices + " slices.");
//     }
// }

// sub class of Pizza
// class ThinCrust extends Pizza
// {
//     constructor(size, crust, sauce, cheese, toppings, cut)
//     {
//         super(size, crust, sauce, cheese, toppings);
//         this.cut = cut;
//     }

//     // override the slice method
//     slice()
//     {
//         console.log("The pizza is sliced " + this.cut + ".");
//     }
// }

// create a new pizza
// const thinCrust = new ThinCrust("large", "thin", "tomato", "mozzarella", ["pepperoni", "sausage"], "diagonally");
// console.log(thinCrust);
// // start the process
// thinCrust.bake();
// thinCrust.slice();
// thinCrust.box();





class Order
{
    constructor(pizzas)
    {
        this.pizzas = pizzas;
    }

    addPizza(pizza)
    {
        this.pizzas.push(pizza);
    }

    removePizza(pizza)
    {
        // find the index of the pizza
        let index = this.pizzas.indexOf(pizza);
        // remove the pizza from the array
        this.pizzas.splice(index, 1);
    }
}

// const myPizza = new Pizza("large", "thin", "tomato", "mozzarella", ["pepperoni", "sausage"]);


// // Here we are accessing the getter and setter and not the property directly
// myPizza.size = "x"; // variation 1
// myPizza.setSize("d"); // variation 2
// console.log(myPizza.size, myPizza.getSize()); // will return `large` since `x` and `d` is not a valid size
// // start the process
// myPizza.bake();
// myPizza.slice();
// myPizza.box();

// const yourPizza = new Pizza("medium", "thick", "alfredo", "cheddar", ["chicken", "bacon"]);
// console.log(yourPizza);
// // start the process
// yourPizza.bake();
// yourPizza.slice();
// yourPizza.box();






