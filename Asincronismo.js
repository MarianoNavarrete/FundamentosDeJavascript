class Persona {
    constructor (nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    }
    saludar(fn) {
        console.log(`Hola mi nombre es ${this.nombre}`)
        if(fn) {
            fn(this.nombre, this.apellido, false)
        }
    }
    alturaF() {
        console.log(this.altura)
    }
}
class Desarrollador extends Persona {
    constructor (nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar(fn) {
        var {nombre,apellido} = this
        console.log(`Mi nombre es ${this.nombre} y soy desarrolador`)
        if(fn) {
            fn(nombre, apellido, true)
        }
    }
}


var mariano = new Persona('mariano', 'navarrete', 1.76)
var alberto = new Desarrollador('alberto', 'tejada', 1.70)
var jose = new Persona('jose', 'martinez', 1.70)

function responder(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`)
    esDev ? console.log('no sabia que eras deve'): console.log('por lo visto no eres dev')
}
/*
mariano.saludar()
alberto.saludar(responder)
jose.saludar(responder)
*/

console.log('a')
//setTimeout(() => {console.log('b')}, 0)
console.log('c')
// callbacks

function obtenerPersona(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $.get(url, {crossDomain: true}, function(data) {
            resolve(data)
        }).fail(()=> {reject(id)})
    })  
}

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

obtenerPersona(1,function (data) {
    console.log(`hola mi nombre es ${data.name}`)
})
function onError(id) {
    console.log(`Sucedio un error en el personaje ${id}`)
}
//promesas
 obtenerPersona(1).then((data) => {
     console.log(`hola mi nombre es ${data.name}`)
     return obtenerPersona(2)
 }).
    then((data) => {
    console.log(`hola mi nombre es ${data.name}`)
    return obtenerPersona(3)
    }).
        then((data) => {
        console.log(`hola mi nombre es ${data.name}`)
        return obtenerPersona(4)
        }).
            then((data) => {
            console.log(`hola mi nombre es ${data.name}`)
            })
                .catch(onError)
//otra forma te tener mas rapido y legible las promesas sin callbacks
/*var ids = [1,2,3,4]
var promesas = ids.map((id) => {
    return obtenerPersona(id)
})
Promise.all(promesas).
    then(personajes => {
    console.log(personajes)
}).catch(onError)*/
async function obtenerPersonajes() {
    var ids = [1,2,3,4]
    var promesas = ids.map((id) => {
        return obtenerPersona(id)
    })
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch(id){
        onError(id)
    }
    
    
}


obtenerPersonajes()