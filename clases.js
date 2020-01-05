//generar herencia

function HerareDe(claseHijo, clasePadre) {
    var noop = function() {}
    noop.prototype = clasePadre.prototype
    claseHijo.prototype = new noop
    claseHijo.prototype.constructor = claseHijo
}

function persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
var mariano = new persona('mariano', 'navarrete', 1.78)
persona.prototype.saludar = function () {
    console.log(`Hola att: ${this.nombre}`)
}


function Desarrollador (nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}
HerareDe (Desarrollador,persona)
Desarrollador.prototype.saludar = function() {
    console.log(`${this.nombre} soy desarrollador`)
}


var jose = new Desarrollador('jose', 'tejada')