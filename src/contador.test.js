import metodos from "./contador.js";

describe("Contador", () => {
  it("Deberia devolver la palabra en minusculas", () => {
    expect(metodos.cambiarMayusculas("HOLA")).toEqual("hola");
  });

  it("Deberia devolver la palabra en minusculas", () => {
    var palabra = metodos.separPalabra("hola mundo")[0];
    expect(palabra).toEqual("hola");
  });

});


