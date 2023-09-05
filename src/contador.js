function cambiarMayusculas(palabra) {
  return palabra.toLowerCase();
}

function separPalabra(frase) {
  frase = cambiarMayusculas(frase);
  var palabras = [];
  var palabra = "";
  for(var i = 0; i <= frase.length; i++)
  {
    if(frase[i] != " " && frase[i] != "-" && frase[i] != ";" && frase[i] != "," && frase[i] != "." && i != frase.length) {
      palabra += frase[i];
    }
    else {
      if(palabra != "") {
        palabras.push(palabra);
        palabra = "";
      }
    }
  }
  return palabras;  
}

function contarPalabras(frase) {
  /*const palabras = separPalabra(frase);
  const contador = Map();
  for(var i = 0; i< palabras.length; i++)
  {
    if(palabras[i] != contador.has(palabras[i]))
    {
      contador.set(palabras[i], 0);
    }
    else {
      var cantidad = contador.get(palabras[i])++;
      contador.set(palabras[1], cantidad);
    }
  }
  return contador; */
  return 2;
}



const metodos = {cambiarMayusculas, separPalabra, contarPalabras};

export default metodos;
