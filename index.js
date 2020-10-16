
class Persona{
    constructor(name, sex, age){
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.saludo = ()=>{
            return `Hola me llamo ${this.name}, soy ${this.sex} y tengo ${this.age} años`;
        }
    }
}

const persona1 = new Persona('Pedro', 'Hombre', 24);
console.log(persona1.saludo());