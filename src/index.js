'use strict'

function Car(make = 'Honda', model = 'Accord', year = 1998) {
    this.make = make
    this.model = model
    this.year = year
    this.drive = function() {
        console.log(`Starting drive of a ${this.year} ${this.make} ${this.model}`)
        // Starting drive of a 1967 Chevy Impala
        setTimeout(function() {
            console.log(`Ending drive of a ${this.year} ${this.make} ${this.model}`)
            // Ending drive of a undefined undefined undefined
        }, 500)
    }
}

const demonHunter = new Car('Chevy', 'Impala', 1967)
demonHunter.drive()
