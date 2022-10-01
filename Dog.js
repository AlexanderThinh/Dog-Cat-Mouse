import chalk from "chalk"

function Dog(name) {
    this.stomach = []
    this.name = name
}

Dog.prototype.eat = function() {
    this.stomach.push(food)
}

Dog.prototype.sayHi = function() {
    console.log('Gau gau ' + chalk.green(this.name))
}

export default Dog