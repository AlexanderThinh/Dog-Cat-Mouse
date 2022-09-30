function Dog() {
    console.log('Hello dog')
    this.stomach = []
}

Dog.prototype.eat = (food) => {
    this.stomach.push(food)
}