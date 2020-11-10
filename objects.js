const persona = {
    nombre: 'Carlos',
    apellido: 'Gonzales',
    edad: 27,
    casado: true
}

const masDatos = {
    trabajo: false,
    hijos: true
}


// console.log(persona.casado);

// console.log(persona['nombre']);

// Añadir propiedades

// persona.foto = 'carlos.jpg'

// console.log(persona);

// Elminar propiedad

// delete persona.apellido;

// console.log(persona);

// const apellido = persona.apellido;

const { nombre, edad, casado } = persona;

console.log(nombre)

console.log(casado)

// spread opertaor
const copiaObjeto = { ...persona, ...masDatos }

console.log(copiaObjeto);

// keys, values and entries

console.log(Object.keys(persona));

console.log(Object.values(persona));

console.log(Object.entries(persona));



