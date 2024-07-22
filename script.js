let biblioteca = [];

let biblioteca_padrao = [{palavra: "ornitorrinco" , dica: "animal exotico"},
  {palavra:"bergamota" , dica:"fruta nordestina"} ,
  {palavra:"palmeira" , dica:"tipo de arvore"} ,
  {palavra:"bentivi" , dica:"um passaro"} ,
  {palavra:"abelha" , dica:"tem uma bundona"} ,              
  {palavra:"leao" , dica:"rei da selva"} ,
  {palavra:"macadamia" , dica:"é uma noz"} ,
  {palavra:"hamburguer" , dica:"melhor fast-food"} ,
  {palavra:"lavanda" , dica:"aroma agradavel"} ,
  {palavra:"enrolados" , dica:"filme da disney"} ,
  {palavra:"ichia" , dica:"uma fruta"} ,
  {palavra:"mangostim" , dica:"uma fruta baiana"} ,
  {palavra:"dromedario" , dica:"um animal"} ,
  {palavra:"tecnologia" , dica:"sem ela a humanidade não seria nada"} ,
  {palavra: "abacaxi", dica: "fruta tropical"} ,
  {palavra: "girassol", dica: "flor que segue o sol"} ,
  {palavra: "gato", dica: "animal doméstico"} ,
  {palavra: "cachorro", dica: "melhor amigo do homem"} ,
  {palavra: "computador", dica: "máquina eletrônica"} ,
  {palavra: "mesa", dica: "móvel para refeições"} ,
  {palavra: "aviao", dica: "meio de transporte aéreo"} ,
  {palavra: "banana", dica: "fruta amarela"} ,
  {palavra: "piano", dica: "instrumento musical de cordas"} ,
  {palavra: "cama", dica: "móvel para dormir"} ,
  {palavra: "sapato", dica: "calçado"} ,
  {palavra: "arvores", dica: "plantas altas"} ,
  {palavra: "livro", dica: "contém histórias"} ,
  {palavra: "ventilador", dica: "aparelho que gera vento"} ,
  {palavra: "cozinha", dica: "local onde se prepara comida"} ,
  {palavra: "praia", dica: "lugar de areia e mar"} ,
  {palavra: "teclado", dica: "parte do computador para digitar"} ,
  {palavra: "caneta", dica: "escreve tinta"} ,
  {palavra: "bola", dica: "usada em diversos esportes"} ,
  {palavra: "fogao", dica: "utilizado para cozinhar"}];


const biblioteca_from_localstorage = localStorage.getItem("biblioteca")
if (biblioteca_from_localstorage != null){
  biblioteca = JSON.parse(biblioteca_from_localstorage)
} else {
  biblioteca = biblioteca_padrao;
}

const numero_max = (biblioteca.length - 1);
const palavra_sorteada = Math.round(Math.random() * numero_max);
const palavra_dica = (biblioteca[palavra_sorteada]["dica"]);
const palavra_secreta = (biblioteca[palavra_sorteada]["palavra"]);
let palavra_oculta = Array.from(palavra_secreta)
const num_letras = palavra_secreta.length;
let tentativas = 1;
let log_letras = ("");

for(i = 0; i < num_letras; i++){
  palavra_oculta[i] = ("_")
};



function reiniciar() {
  window.location.reload();
  iniciar ()
};



function teclado_mobile(letra) {
  key = letra

  if (log_letras.includes(key) == true) {
    console.log("Letra ja digitada!")
  }
  if (log_letras.includes(key) == false) {
    jogar(key)
  }
}



function jogar (key) {
  let log_palavra_oculta = ("")

  if (tentativas < 7) {

    if (palavra_oculta.includes("_") == false) {
      document.getElementById("desenho").innerHTML = "<img src=img_win.svg" + ">"
      document.getElementById("botao_reiniciar").focus()
    }

    if (palavra_oculta.includes("_") == true) {
      if (palavra_secreta.includes(key) == true) {
        for(i = 0; i < num_letras; i++) {
          if (palavra_secreta[i] == key ) {
            palavra_oculta[i] = key
        }
      }
      for(i = 0; i < num_letras; i++) {
        log_palavra_oculta = (log_palavra_oculta + palavra_oculta[i])
        document.getElementById("palavra_oculta").textContent = log_palavra_oculta.toUpperCase()
      }
      log_letras = (log_letras + key + " ")
      document.getElementById("log_letras").textContent = log_letras.toUpperCase()

      if (palavra_oculta.includes("_") == false) {
        document.getElementById("desenho").innerHTML = "<img src=img_win.svg" + ">"
        document.getElementById("botao_reiniciar").focus()
      }
      }
      else {
        tentativas ++
        log_letras = (log_letras + key + " ")
        document.getElementById("desenho").innerHTML = ("<img src=" + "img_" + tentativas + ".svg" + ">")
        document.getElementById("log_letras").textContent = log_letras.toUpperCase()
      }
    }
  } 
  
  if (tentativas == 7) {
    document.getElementById("dica").textContent = "Voce perdeu! Tente novamente."
    document.getElementById("palavra_oculta").textContent = "ENFORCADO"
    document.getElementById("botao_reiniciar").focus()
  }
  key = ""
};



function adicionar_palavra() {
  if (biblioteca_from_localstorage == null) {
    biblioteca = biblioteca_padrao;
  }

  biblioteca.push({palavra: document.getElementById("palavra_nova").value, dica: document.getElementById("dica_palavra_nova").value});
  console.log(biblioteca)
  localStorage.setItem("biblioteca", JSON.stringify(biblioteca));
  document.getElementById("palavra_nova").value = "";
  document.getElementById("dica_palavra_nova").value = "";
};


