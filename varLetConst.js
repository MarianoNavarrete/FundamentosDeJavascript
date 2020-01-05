var mariano = {
    nombre: 'mariano',
    apellidp: 'navarrete',
    edad: 29
}
function mayorDeEdad(persona) {

    if(persona.edad > 18){
        console.log('es ,mayor de edad')
    }else {
        console.log('no es ,mayor de edad')
    }
}

for(let i = 0; i < 10; i++) {
    console.log(i)
}

//mayorDeEdad(mariano)
//uso de fechas.
function DiasEntreFechas(fecha1, fecha2) {
    const unDia = 1000 * 60 * 60 * 24
    const diferencia = Math.abs(fecha1 - fecha2)
    return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(1996, 8, 10)

//funciones recursivas
function divisionRecursiva(dividendo, divisor) {
    if(dividendo < divisor){
        return 0
    }else {
        return 1 + divisionRecursiva(dividendo - divisor, divisor)
    }  
}
//ahorrar memoraide computo

function factorial(n) {
    if(!this.cache){
        this.cache = {}
    }

    if(this.cache[n]){
        return this.cache
    }

    if(n == 1) {
        return 1
    }

    this.cache[n] = n * factorial(n - 1)
    return this.cache[n]
}

//clousers

function crearSaludo(finalDeFrase) {
    return function (nombre) {
        console.log(`hola ${nombre} ${finalDeFrase}`)
    }
}
const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('guey')

saludoArgentino('mariano')
saludoMexicano('jose')

const cumpleanos = (persona) => {
    persona.edad++
}

const cumpleanosInmutable = (persona) => ({
    ...persona,
    edad: persona.edad + 1
})

function saludar() {
    console.log(`Hola mi nombre es ${this.nombre}`)
}

const saludaMariano = saludar.bind(mariano)


