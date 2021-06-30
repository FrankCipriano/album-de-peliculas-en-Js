console.log(`FrankDev\n\n`)

class Pelicula{
    constructor({id,titulo,director,estreno,pais,generos,calificacion}){
        this.id=id
        this.titulo=titulo
        this.director=director
        this.estreno=estreno
        this.pais=pais
        this.generos=generos
        this.calificacion=calificacion
        Pelicula.generosPermitidos()
        this.validarIMDB(id)
        this.validarTitulo(titulo)
        this.validarDirector(director)
        this.validarEstreno(estreno)
        this.validarPais(pais)
        this.validarGeneros(generos)
        this.validarCalificacion(calificacion)
    }
    //--ATRIBUTO Y METODO ESTATICO PARA REVISAR LOS GENEROS PERMITIDOS------
    static get listaGeneros(){
        return [`Action`,`Adult`,`Adventure`,`Animation`,`Biography`,
        `Comedy`,`Crime`,`Documentary`,`Drama`,`Family`,`Fantasy`,`Film Noir`,
        `Game-Show`,`History`,`Horror`,`Musical`,`Music`,`Mastery`,`News`,
        `Reality-TV`,`Romance`,`Sci-Fi`,`Short`,`Sport`,`Sport`,`Talk-Show`,
        `Thriller`,`War`,`Wetern`]
    }
    static generosPermitidos(){
        return console.info(`Los generos permitidos son:\n-> ${Pelicula.listaGeneros.join(`\n-> `)}`)
    }
    //-----METODOS GENERICOS---------
    validarCadena(propiedad,valor){
        if(!valor)                  return console.warn(`${propiedad} no ingresado`)
        if(typeof(valor)!==`string`)return console.warn(`${valor} no es un texto`)
        return true
    }
    validarLongitud(propiedad,valor,longitud){
        if(valor.length>longitud) return console.warn(`${propiedad}: ${valor} supera el numero de caracteres aceptado (${longitud})`)
        return true
    }
    validarDigito(propiedad,valor){
        if(!valor)                     return console.warn(`${propiedad} no ingresado`)
        if(typeof(valor)!==`number`)   return console,warn(`${valor} no es un numero`)
        return true
    }
    validarArreglo(propiedad,valor){
        if(!valor)                          return console.warn(`${propiedad} no ingresado`)
        if(!(valor instanceof Array))       return console.warn(`${valor}: los datos ingresados no esta en forma de arreglo`)
        if(valor.length===0)                return console.warn(`El arreglo esta vacio`)
        for (let c_valor of valor) {
            if(typeof(c_valor)!==`string`)  return console.warn(`${c_valor}: no es un texto dentro del arreglo`)
        }
        return true
    }
    //------METODOS ESPECIFICOS----------
    validarIMDB(id){
        if(this.validarCadena(`IMDB Id`,id)){
            let validar_id = new RegExp(/^([a-z]){2}([0-9]){7}$/).test(id)
            if(!validar_id) return console.warn(`${id}: El id no es valido, debe tener 2 letra minusculas al inicio y 7 digitos al final`)
        }
    }
    validarTitulo(titulo){
        if(this.validarCadena(`Titulo`,titulo)) 
            this.validarLongitud(`Titulo`,titulo,100)
    }
    validarDirector(director){
        if(this.validarCadena(`Director`,director))
            this.validarLongitud(`Director`,director,50)
    }
    validarEstreno(estreno){
        if(this.validarDigito(`Año de estreno`,estreno)){
            let validar_anio = new RegExp(/^([0-9]){4}$/).test(estreno)
            if(!validar_anio) return console.warn(`${estreno}: El año no es valido, debe tener unicamente 4 digitos`)
        }
    }
    validarPais(pais){
        this.validarArreglo(`Pais`,pais)
    }
    validarGeneros(generos){
        if(this.validarArreglo(`Generos`,generos)){
            for (let genero of generos) {
                if(!(Pelicula.listaGeneros.includes(genero)))
                console.warn(`${genero}: no es un agenero aceptado dentro del listado, verifique los datos`)
            }
        }
    }
    validarCalificacion(calificacion){
        if(this.validarDigito(`Calificacion`,calificacion))
        return(calificacion>=0 && calificacion<=10)
                ?this.calificacion=calificacion.toFixed(1)
                :console.warn(`La calificacion debe estar entre el rango de 0 al 10`)
    }
    fichaTecnica(){
        console.info(`Ficha Tecnica:\nTitulo: ${this.titulo}\nIMDB: ${this.id}\nDirector: ${this.director}\nAño de estreno: ${this.estreno}\nPais: [${this.pais.join(`,`)}]\nGenero: [${this.generos.join(`,`)}]\nCalificacion: ${this.calificacion}`)
    }
}
//------ARREGLO DE OBJETOS(s)--------------------
const mis_peliculas = [{
    id:`as9876543`,
    titulo:`Titulo de la pelicula 1`,
    director:`Director de la pelicula 1`,
    estreno: 2020,
    pais:[`Guatemala`],
    generos:[`Comedy`,`Family`],
    calificacion:10
},{
    id:`as9876544`,
    titulo:`Titulo de la pelicula 2`,
    director:`Director de la pelicula 2`,
    estreno: 2020,
    pais:[`Guatemala`],
    generos:[`Comedy`,`Family`],
    calificacion:10
},{
    id:`as9876545`,
    titulo:`Titulo de la pelicula 3`,
    director:`Director de la pelicula 3`,
    estreno: 2020,
    pais:[`Guatemala`],
    generos:[`Comedy`,`Family`],
    calificacion:10
}
]
//------INSTANCIAS----------
mis_peliculas.forEach((peli)=>peli=new Pelicula(peli).fichaTecnica())