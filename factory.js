
class Employee {
    constructor() {
        this.createEmployee = function(area){
            let employee;
            if( area === 'Informática') employee = new Informatica();
            else if (area === 'RRHH') employee = new RecursosHumanos();
            employee.saludo = function(){
                return `Trabajo en ${this._area}`;
            }
            return employee;
        }
    }
}

class Informatica {
    constructor() {
        this._area = 'Informática';
        this.cargo = ()=>{
            return 'Programador';
        }
        this.subArea = ()=>{
            return 'Unidad de Desarrollo';
        }
    }
}

class RecursosHumanos {
    constructor() {
        this._area = 'RRHH';
        this.cargo = function() {
            return 'Asistente Administrativo';
        }
    }
}

// creating objects
const personal = new Employee();

const personal1 = personal.createEmployee('Informática');
const personal2 = personal.createEmployee('RRHH');

console.log('Personal1 Saludo', personal1.saludo());
console.log('Personal2 Saludo', personal2.saludo());
console.log('Personal1 Cargo', personal1.cargo());
console.log('Personal1 Sub Area', personal1.subArea());
console.log('Personal2 Cargo', personal2.cargo());