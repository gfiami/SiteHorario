var data = new Date();
var semana = data.getDay();
var horas;
function definirHorario(horario) {
  horas = parseInt(horario);
  main();
}
definirHorario(data.getHours());
globalThis.definirHorario = definirHorario;

function main() {
  var semanaEscrito;
  var dias = data.getUTCDate();
  var mes = data.getUTCMonth() + 1;
  var ano = data.getUTCFullYear();
  var minutos = data.getMinutes();
  if (minutos < 10) {
    minutos = "0" + data.getMinutes();
  }
  switch (
    semana //string correspondente ao dia da semana
  ) {
    case 0:
      semanaEscrito = "Domingo";
      break;
    case 1:
      semanaEscrito = "Segunda-Feira";
      break;
    case 2:
      semanaEscrito = "Terça-Feira";
      break;
    case 3:
      semanaEscrito = "Quarta-Feira";
      break;
    case 4:
      semanaEscrito = "Quinta-Feira";
      break;
    case 5:
      semanaEscrito = "Sexta-Feira";
      break;
    case 6:
      semanaEscrito = "Sábado";
      break;
  }

  document.getElementById("datacompleta").innerText =
    "Hoje é " + dias + "/" + mes + "/" + ano + ` - ${semanaEscrito}`;

  //string correspondente a parte do dia que é agora
  if (horas >= 00 && horas < 06) {
    //madrugada
    document.body.style.background = "#330505a8";
    document.getElementById("img").src = "./assets/madrugada.png";
    document.getElementById("msg").innerText =
      "Está de madrugada, você deveria estar descansando...";
  } else if (horas >= 06 && horas < 12) {
    //manhã
    document.body.style.background = "#cfcf1bdc";
    document.getElementById("img").src = "./assets/manha.png";
    document.getElementById("msg").innerText =
      "Bom dia! Agora está uma bela manhã.";
  } else if (horas >= 12 && horas < 18) {
    //tarde
    document.body.style.background = "Orange";
    document.getElementById("img").src = "./assets/tarde.png";
    document.getElementById("msg").innerText = "Boa tarde!";
  } else if (horas >= 18 && horas < 24) {
    //noite
    document.body.style.background = "Black";
    document.getElementById("img").src = "./assets/noite.png";
    document.getElementById("msg").innerText =
      "O dia está quase acabando! Boa noite!";
  }
  document.getElementById(
    "hora"
  ).innerText = `O horário atual é ${horas}:${minutos}`;
}
