
var personaA = {
    nombre: 'mariano',
    edad: 23,
    peso: 100
}
const INCREMENTO_PESO = 0.2
const META = personaA.peso - 3
var dias = 0 
const aumentarDePeso = (persona) => {
    persona.peso += INCREMENTO_PESO
}
const disminuirPeso = (persona) => {
    persona.peso -= INCREMENTO_PESO
}
const comeMucho = () => {
    Math.random() < 0.4
}
const realizaDeporte = () => {
    Math.random() < 0.8
}
while (personaA.peso > META) {
    if (comeMucho()) {
       //aumentar de peso 
       aumentarDePeso(personaA)
    }
    if (realizaDeporte()) {
        //adelgazar
        disminuirPeso(personaA)
    }
    dias += 1
    console.log(personaA.peso)
}
console.log(`pasaron ${dias} hasta que ${personaA.nombre} adelgace`)



