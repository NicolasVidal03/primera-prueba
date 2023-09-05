function cambiarMayusculas(palabra) {
  return palabra.toLowerCase();
}

function separPalabra(frase) {
  var palabras = [];
  var palabra = "";
  for(var i = 0; i <= frase.length; i++)
  {
    if(frase[i] != " " && frase[i] != "-" && frase[i] != ";" && frase[i] != "," && frase[i] != "." && i != frase.length) {
      palabra += frase[i];
    }
    else {
      palabras.push(palabra);
      palabra = "";
    }
  }
  return palabras;

  
}



const metodos = {cambiarMayusculas, separPalabra};

export default metodos;
