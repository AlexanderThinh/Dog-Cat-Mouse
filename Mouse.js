function Mouse(name) {
    console.log('Hello mouse')
    this.name = name
}

Mouse.prototype.sleep = function() {
    console.log('Mouse is sleeping')
}

module.exports = Mouse