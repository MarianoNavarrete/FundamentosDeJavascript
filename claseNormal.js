class persona { 
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log(`Hola att: ${this.nombre}`)
    }
}
class desarrollador extends persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar() {
        console.log(`${this.nombre} soy desarrollador`)
    }
}
var mariano = new persona('mariano', 'navarrete', 1.78)
var alberto = new desarrollador('alberto', 'navarrete', 1.78)