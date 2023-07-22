function CreateCar(model, speed) {
    this.model = model
    this.speed = speed
    this.wheels = 4
    this.ride = function() {
        console.log('hoehali na ' + this.model)
    }
}

CreateCar.prototype.showInfo = function() {
    console.log(`model = ${ this.model }, speed = ${ this.speed }, wheels = ${ this.wheels }`)
}

const mercedes = new CreateCar('mercedes', 250)
const bmw = new CreateCar('bmw', 270)

mercedes.showInfo()
bmw.showInfo()
