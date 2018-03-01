// GOOGLE
const call1Google = require('./call1/call1-google.json');
const call2Google = require('./call2/call2-google.json');
const twoFlacGoogle = require('./2/2.json');
// MANUAL
const call1Manual = require('./call1/call1-manual.json');
const call2Manual = require('./call2/call2-manual.json');
const twoFlacGoogleManual = require('./2/2-google-manual.json');


// let keyWords = [
//   'Problema', 'Problemas', 'Reclamo', 'Señal', 'Antena','Satelite','Linea','Umbral','Transmisión','Satélite','Televisión','Television','TV','Decodificador','Decodificadores','Bien', 'Mal', 'Malo', 'Bueno', 'Perder', 'Si', 'No', 'Ayuda', 'Ayudado', 'Ayudar', 'Orientado', 'Orientación', 'Celular', 'Telefonía', 'Plan', 'Técnico', 'Tecnico', 'Costo', 'Consumo', 'Estoy', 'Estaba', 'Necesito', 'Quiero', 'Días', 'Horas', 'Sin', 'Con', 'Escuchar', 'Ver', 'Oir', 'Oír', 'Esperar', 'Espero', 'Esperando', 'Espere', 'Gracias', 'Favor', 'Verificar', 'Revisar', 'Confirmar', 'Confirmo', 'Aprobado', 'Instalado', 'Servicio', 'Pantalla', 'Cliente', 'Electrónico', 'Electronico', 'Equipo', 'Agendar', 'Mensaje', 'Visita', 'Número', 'Numero', 'Asesorar', 'Tono', 'Configuracion', 'Configuración', 'Configurar', 'Wifi', 'Velocidad', 'Navegacion', 'Navegación', 'Computador', 'Portatil', 'Portátil', 'Aplicaciones', 'Aplicación', 'Aplicacion', 'Website', 'Activar', 'Activado', 'Descargar', 'Datos'
// ]

let keyWords = [ 
  'problema','problemas','reclamo','reclamos','reclamé','reclamaba','reclamó','señal','antena','satélite','linea','umbral','transmisión','transmite','televisión','tele','tv','deco','decodificador','decodificadores','bien','mal','malo','bueno','perder','perdí','perdia','perdida','perdido','perdió','perdida','si','no','ayuda','ayudé','ayudaba','ayudó','ayudado','ayudada','ayudar','ayudaría','ayudaba','ayudo','ayudará','ayudaría','orientado','orientación','orientar','orientará','orientaría','orientaba','orientaré','orientando','orientación','celular','telefonía','fija','fijo','plan','trio','duo','dinámico','dinámica','técnico','técnicamente','costo','consumo','consumir','consumo','consume','consumiré','consumirá','consumiría','consumia','estaba','está','necesito','necesita','necesitaré','necesitará','necesitaría','necesitaba','quiero','quiere','querré','querrá','quería','días','día','mañana','tarde','noche','hora','horas','sin','con','escuchar','escucho','escucha','escucharé','escuchará','escuchaba','escucharía','ver','veo','ve','veré','verá','vería','veia','oir','esperar','espero','espera','esperarás','esperará','esperaría','esperando','esperaba','espere','esperé','idiota','imbécil','estupido','tarado','retrasado','concha','madre','hijo','puto','puta','maraca','maraco','inepto','perro','perra','basura','mierda','culiado','culiada','escoria','weon','insulto','insultando','gracias','favor','amable','amigo','amiga','nada','verificar','verifico','verifica','verificaré','verificará','verificaría','verificaba','revisar','revisaré','revisará','reviso','revisa','revisaría','revisaba','confirmar','confirmo','confirma','confirmaré','confirmará','confirmaría','confirmaba','aprobado','aprobaré','aprobará','apruebo','aprueba','aprobaría','aprobaba','instalado','servicio','pantalla','cliente','electrónico','equipo','agendar','mensaje','correo','visita','número','asesorar','asesoro','asesora','asesoraré','asesorará','asesoraría','asesoraba','tono','configuración','configuro','configura','configuraré','configurará','configuraba','configuraría','wifi','velocidad','navegación','navegar','navego','navega','navegué','navegará','navegaría','navegaba','computador','portátil','aplicaciones','aplicación','aplico','aplica','aplicaré','aplicará','aplicaba','aplicaría','website','web','activar','activo','activa','activaré','activará','activaba','activaría','descargar','descargué','descargó','descargo','descarga','descargaría','descargaba' 
]

// GOOGLE
calculateKeyWordsGoogle = (callGoogle) => {
  let linesCall = callGoogle[0].results.map(alt => {
    return alt.alternatives[0].transcript
  })
  
  let wordsCall = linesCall.join('').toLowerCase();
  
  console.log('palabras', wordsCall)
  
  
  for (let word of keyWords) {  
    // console.info('word', word);
    const pattern = new RegExp(`\\b${word.toLowerCase()}\\b`, 'g');
    const evalResult = wordsCall.match(pattern);
    if (evalResult != null) {
      console.log(evalResult);
      console.log(`The word [${word}] is `, evalResult.length, ' times in the paragraph');
    }  
  }
}

// MANUAL
calculateKeyWordsManual = (callManual) => {
  let linesCall = callManual[0].resultsManual.map(alt => {
    return alt.line[0].transcript
  })
  
  let wordsCall = linesCall.join('').toLowerCase();
  
  console.log('palabras', wordsCall)
  
  
  for (let word of keyWords) {  
    // console.info('word', word);
    const pattern = new RegExp(`\\b${word.toLowerCase()}\\b`, 'g');
    const evalResult = wordsCall.match(pattern);
    if (evalResult != null) {
      console.log(evalResult);
      console.log(`The word [${word}] is `, evalResult.length, ' times in the paragraph');
    }  
  }
}

//console.log(calculateKeyWordsGoogle(call1Google))
// console.log(calculateKeyWordsGoogle(call2Google))
// console.log(calculateKeyWordsGoogle(twoFlacGoogle))

console.log(calculateKeyWordsManual(call1Manual))
// console.log(calculateKeyWordsManual(call2Manual))
// console.log(calculateKeyWordsManual(twoFlacGoogleManual))

