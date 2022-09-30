function Dog() {
    console.log('Hello dog 123')
    this.stomach = []
    console.log('Line for test git revert')
}

Dog.prototype.eat = (food) => {
    this.stomach.push(food)
}