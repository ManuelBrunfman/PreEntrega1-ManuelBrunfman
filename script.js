// Preguntas y respuestas de la trivia
const preguntas = [
    {
      pregunta: "¿Cuál es la capital de Chaco?",
      respuesta: "Resistencia"
    },
    {
      pregunta: "¿Cuál es la capital de Buenos Aires?",
      respuesta: "La Plata"
    },
    {
      pregunta: "¿Cuál es la capital de Cordoba?",
      respuesta: "Cordoba"
    }
  ];
  
  /* Función para solicitar respuestas y comparar, esta funcion accede a un objeto determinado, con la constante respuestaUsuario accedemos a la propiedad pregunta del objeto determinado y tomamos la respuesta del usuario, 
  luego compara la respuesta del usuario con la propiedad respuesta del objeto deterinado  devuelve true si la respuesta del usuario es igual a la propiedad respuesta del objeto determinado o false si la respuesta no es igual, con 
  la funcion nativa .toLowerCase buscamos que convierta tanto la respuesta del usuario como a la propiedad respuesta del objeto a minuscula para que no tome la respuesta como incorrecta si se escribe con mayusculas */
  
  
  function hacerPregunta(preguntaObj) {
    const respuestaUsuario = prompt(preguntaObj.pregunta);
    return respuestaUsuario.toLowerCase() === preguntaObj.respuesta.toLowerCase();
  }
  
  /* En la funcion iniciarTrivia tenemos una variable puntaje que se va actualizando cada vez que el ciclo forEach hace su recorrido y la respuesta es correcta. Preguntas.forEach es un ciclo que accede a cada objeto de la array
   preguntas y ejecuta una funcion por cada objeto de la array. La constante correcta ejecuta la funcion hacerPreguntas y almacena el resulatado como true or false. Si correcta es true, alerta: "¡Correcto!" y suma una unidad a la
   variable puntaje con puntaje++, si correcta es false alerta: `Incorrecto. La respuesta es ${preguntaObj.respuesta}`. ${preguntaObj.respuesta} con esta llamada traemos la respuesta correcta. Una vez terminado el ciclo la funcion 
   iniciarTrivia() devuelve la variabe puntaje actualizada */

  function iniciarTrivia() {
    let puntaje = 0;
    preguntas.forEach((preguntaObj) => {
      const correcta = hacerPregunta(preguntaObj);
      if (correcta) {
        alert("¡Correcto!");
        puntaje++;
      } else {
        alert(`Incorrecto. La respuesta es ${preguntaObj.respuesta}`);
      }
    });
    return puntaje;
  }
  
  /* La funcion mostrarResultado(puntaje)  toma la variable puntaje actualizada y alerta la cantidad de respuestas correctas, comparando con la cantidad de preguntas en la array preguntas, esto se extrae con la propiedad .length */
  function mostrarResultado(puntaje) {
    alert(`Has obtenido ${puntaje} respuestas correctas de ${preguntas.length}.`);
  }
  
  /* la constante resultadoFinal ejecuta y almacena el resultado de la funcion iniciarTrivia() y por ultimo la funcion mostrarResultado con el parametro (resultadoFinal) alerta el resultado final*/
  const resultadoFinal = iniciarTrivia();
  mostrarResultado(resultadoFinal);