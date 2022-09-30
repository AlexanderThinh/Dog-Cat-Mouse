function Dog() {
    console.log('Hello dog 123')
    this.stomach = []
}

Dog.prototype.eat = (food) => {
    this.stomach.push(food)
}