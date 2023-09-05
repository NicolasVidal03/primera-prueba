import cambiarMayusculas from "./contador.js";

describe("Contador", () => {
  it("Deberia devolver la palabra en minusculas", () => {
    expect(cambiarMayusculas("HOLA")).toEqual("hola");
  });
});
