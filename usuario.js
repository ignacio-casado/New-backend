
 class usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros 
        this.mascotas = mascotas
    }

  // ARRAY
  
    

    // metodos

    getFullName(){
       return   `${this.nombre} ${this.apellido}`
    
    }
    addMascotas(mascotas){ 
        let addMascotas =  "loro"
        mascotas.push(addMascotas)
    }
    countMascotas(){
        return this.mascotas.lenght

    }
    addBook(libros){
       libros.push(new libros("libro tres", "Autor Tres"))
    }
    getBookNames(){
        const foundLibros = data.filter(libros=>this.libros )
    }
}
const usuario = new Usuario ( 
    
    "Ignacio",  
    
    "Casado",
    [
        {nombre: "La teoria del todo", autor: "Stephen Hawking",},

        {nombre: "Qué Harías Si No Tuvieras Miedo", autor: "Borja Vilaseca",},
    ]

    ["perro", "pez"]
   
  )
console.log(getFullName)
console.log(addMascotas)
console.log(countMascotas)
console.log(addBook)
console.log(getBookNames)