import metodos from "./contador.js";

describe("Contador", () => {
  it("Deberia devolver la palabra en minusculas", () => {
    expect(metodos.cambiarMayusculas("HOLA")).toEqual("hola");
  });

  it("Deberia devolver la primera palabra de la frase", () => {
    var palabra = metodos.separPalabra("hola mundo")[0];
    expect(palabra).toEqual("hola");
  });

  it("Deberia devolver la segunda palabra de la frase", () => {
    var palabra = metodos.separPalabra("hola mundo")[1];
    expect(palabra).toEqual("mundo");
  });

  it("Deberia devolver todas las palabras de esta nueva frase", () => {
    var palabra = metodos.separPalabra("hola querido mundo");
    expect(palabra[0]  + " " + palabra[1] + " " + palabra[2]).toEqual("hola querido mundo");
  });

  it("Deberia convertir esta frase en puras minusculas y devolverla", () => {
    var palabra = metodos.separPalabra("hOla QuEriDo mUnDo");
    expect(palabra[0]  + " " + palabra[1] + " " + palabra[2]).toEqual("hola querido mundo");
  });

});


