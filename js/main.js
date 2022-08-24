
class Person{
    constructor(name,surname,age){
    this.nombre = name;
    this.apellido = surname;
    parseInt(this.edad = age);
    }
    get getNombre(){
       return this.nombre;
    }
    get getApellido(){
        return this.apellido;
    }
    get getEdad(){
        return this.edad;
    }
    set setNombre(nuevo){
        this.nombre = nuevo;
    }
    set setApellido(nuevo){
        this.apellido = nuevo;
    }
    set setEdad(nuevo){
        this.edad = nuevo;
    }
    mayorEdad(){
        if(this.edad >18){
            alert("¡Sos mayor de edad pibe!")
        } else{
            alert("¡Sos un nenè todavia...!")
        }
    }
    Info(){
        return `
        Hola Soy ${this.nombre} ${this.apellido} y tengo ${this.edad}años de edad.
        `;
    }
}

const sebastian = new Person("Pedro","Felicio",48);

// sebastian.setNombre = "Sebastian";
// sebastian.setApellido = "Lopez";
// sebastian.setEdad = 23;
// document.write(sebastian.getNombre," ",sebastian.getApellido," ",sebastian.getEdad);
// document.write(sebastian.Info());