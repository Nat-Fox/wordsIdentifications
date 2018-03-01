const call1Google = require('./call1/call1-google.json');

let keyWords = [
  'Problema', 'Problemas', 'Reclamo', 'Señal', 'Antena','Satelite','Linea','Umbral','Transmisión','Satélite','Televisión','Television','TV','Decodificador','Decodificadores','Bien', 'Mal', 'Malo', 'Bueno', 'Perder', 'Si', 'No', 'Ayuda', 'Ayudado', 'Ayudar', 'Orientado', 'Orientación', 'Celular', 'Telefonía', 'Plan', 'Técnico', 'Tecnico', 'Costo', 'Consumo', 'Estoy', 'Estaba', 'Necesito', 'Quiero', 'Días', 'Horas', 'Sin', 'Con', 'Escuchar', 'Ver', 'Oir', 'Oír', 'Esperar', 'Espero', 'Esperando', 'Espere', 'Gracias', 'Favor', 'Verificar', 'Revisar', 'Confirmar', 'Confirmo', 'Aprobado', 'Instalado', 'Servicio', 'Pantalla', 'Cliente', 'Electrónico', 'Electronico', 'Equipo', 'Agendar', 'Mensaje', 'Visita', 'Número', 'Numero', 'Asesorar', 'Tono', 'Configuracion', 'Configuración', 'Configurar', 'Wifi', 'Velocidad', 'Navegacion', 'Navegación', 'Computador', 'Portatil', 'Portátil', 'Aplicaciones', 'Aplicación', 'Aplicacion', 'Website', 'Activar', 'Activado', 'Descargar', 'Datos'
]

console.log('largo', keyWords.length)

let linesCall1Google = call1Google[0].results.map(alt => {
  return alt.alternatives[0].transcript
})

let wordsCall1Google = linesCall1Google.join('').toLowerCase();

console.log('palabras', wordsCall1Google)


for (let word of keyWords) {  
  // console.info('word', word);
  const pattern = new RegExp(`\\b${word.toLowerCase()}\\b`, 'g');
  const evalResult = wordsCall1Google.match(pattern);
  if (evalResult != null) {
    console.log(evalResult);
    console.log(`The word [${word}] is `, evalResult.length, ' times in the paragraph');
  }  
}


