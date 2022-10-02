function Mouse(name) {
    console.log('Hello mouse')
    this.name = name
}

Mouse.prototype.run = function() {
    console.log('Mouse is running')
}

module.exports = Mouse