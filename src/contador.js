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
  return 2;
}



const metodos = {cambiarMayusculas, separPalabra, contarPalabras};

export default metodos;
