/**
 * canisue.com - use this to check how much browser support you got from new JS features
 */

// create a class Pizza using closure
class Pizza
{

    sauce = "original"
    #slice; // private property

    constructor(_size, _crust, _sauce, _cheese, _toppings)
    {
        // use closure to make these properties truly private
        this.getSize = function()
        {
            return _size;
        }
        this.setSize = function(newSize)
        {
            _size = newSize;
        }

        this.setCrust = crust => _crust = crust
        this.setSause = sauce => _sauce = sauce
        this.setToppings = toppings => _toppings = toppings

        // getters
        this.getCrust = () => { return _crust }
        this.getSause = () => { return _sauce }
        this.getToppings = () => { return _toppings }

    }

    getSlice ()
    {
        return this.#slice
    }

    setSlice (slice)
    {
        this.#slice = slice
    }
}

// create new Pizza
const myPizza = new Pizza('small', 'thin')
console.log(myPizza.getSize())
console.log(myPizza._crust, myPizza.getCrust())
// console.log(myPizza.#slice) // this will return a syntax error: Private field '#slice' must be declared in an enclosing class

// tell the baker about the number of slice that you wanted
myPizza.setSlice(4)
console.log(myPizza.getSlice())
console.log(myPizza.sauce) // returns `original` since its public we can still access it using (dot) notation