// GOOGLE
const call1Google = require('./call1/call1-google.json');
const call2Google = require('./call2/call2-google.json');
const twoFlacGoogle = require('./2/2.json');
// MANUAL
const call1Manual = require('./call1/call1-manual.json');
const call2Manual = require('./call2/call2-manual.json');
const twoFlacGoogleManual = require('./2/2-google-manual.json');
// IBM
const call1Ibm = require('./call1/call1-ibm.json');
const call2Ibm = require('./call2/call2-ibm.json');
const twoFlacIbm = require('./2/2-ibm.json');

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



// IBM
calculateKeyWordsIBM = (callIBM) => {
  let linesCall = callIBM[0].results.map(alt => {
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


// LLAMADAS TRANSCRIPCION GOOGLE
// console.log(calculateKeyWordsGoogle(call1Google));
// console.log(calculateKeyWordsGoogle(call2Google));
// console.log(calculateKeyWordsGoogle(twoFlacGoogle));

// LLAMADAS TRANSCRIPCION MANUAL
// console.log(calculateKeyWordsManual(call1Manual));
// console.log(calculateKeyWordsManual(call2Manual));
// console.log(calculateKeyWordsManual(twoFlacGoogleManual));

// LLAMADAS TRANSCRIPCION IBM
// console.log(calculateKeyWordsIBM(call1Ibm));
// console.log(calculateKeyWordsIBM(call2Ibm));
console.log(calculateKeyWordsIBM(twoFlacIbm));