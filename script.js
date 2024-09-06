// Preguntas y respuestas de la trivia
const preguntas = [
    {
      pregunta: "¿Cuál es la capital de Francia?",
      respuesta: "París"
    },
    {
      pregunta: "¿Cuántos continentes hay en la Tierra?",
      respuesta: "7"
    },
    {
      pregunta: "¿Cuál es el planeta más grande del sistema solar?",
      respuesta: "Júpiter"
    }
  ];
  
  // Función para solicitar respuestas y comparar
  function hacerPregunta(preguntaObj) {
    const respuestaUsuario = prompt(preguntaObj.pregunta);
    return respuestaUsuario.toLowerCase() === preguntaObj.respuesta.toLowerCase();
  }
  
  // Función para ejecutar la trivia
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
  
  // Función para mostrar el resultado
  function mostrarResultado(puntaje) {
    alert(`Has obtenido ${puntaje} respuestas correctas de ${preguntas.length}.`);
  }
  
  // Flujo principal del simulador
  const puntajeFinal = iniciarTrivia();
  mostrarResultado(puntajeFinal);