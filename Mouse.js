function Mouse(name) {
    console.log('Hello mouse')
    this.name = name
}

Mouse.prototype.run = function() {
    console.log('Mouse is running')
}

Mouse.prototype.sleep = function() {
    console.log('Mouse is sleeping')
}

module.exports = Mouse