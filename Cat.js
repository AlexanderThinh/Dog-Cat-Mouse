function Cat() {
    this.stomach = []
}

Cat.prototype.eat = (animal) => {
    if(animal == 'mouse') {
        console.log('eating is ok')
    } else {
        console.log('can not eating ' + animal)
    }

    this.stomach.push(mouse)
}

module.exports = Cat