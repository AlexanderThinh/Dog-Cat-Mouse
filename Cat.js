function Cat() {
    this.stomach = []
}

Cat.prototype.eat = (mouse) => {
    this.stomach.push(mouse)
}

module.exports = Cat