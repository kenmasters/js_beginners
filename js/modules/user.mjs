export default class User {
    constructor(name, email) {
        this._id = email
        this._name = name
    }


    greeting() {
        return `Hello ${this._name}`
    }
}