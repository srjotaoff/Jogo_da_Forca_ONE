let biblioteca = [];

const biblioteca_from_localstorage = localStorage.getItem("biblioteca")
if (biblioteca_from_localstorage != null){
  biblioteca = JSON.parse(biblioteca_from_localstorage)
} else {
  biblioteca = [{palavra: "ornitorrinco" , dica: "animal exotico"},
  {palavra:"bergamota" , dica:"fruta nordestina"} ,
  {palavra:"palmeira" , dica:"tipo de arvore"} ,
  {palavra:"bentivi" , dica:"um passaro"} ,
  {palavra:"leao" , dica:"rei da selva"} ,
  {palavra:"macadamia" , dica:"coquinho brasileiro"} ,
  {palavra:"hamburguer" , dica:"melhor fast-food"} ,
  {palavra:"lavanda" , dica:"aroma agradavel"} ,
  {palavra:"enrolados" , dica:"filme da disney"} ,
  {palavra:"tecnologia" , dica:"sem ela a humanidade não seria nada"}];
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


function jogar_celular() {
  document.addEventListener('keypress', function (event) {
    const key = event.key;
    const letras_permitidas = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","w","y","z"]
    if (letras_permitidas.includes(key)) {
      if (log_letras.includes(key) == true) {
        console.log("Letra ja digitada!")
      }
      if (log_letras.includes(key) == false) {
        jogar(key)
      }
    }
    });
}


function jogar (key) {
  let log_palavra_oculta = ("")
  if (tentativas < 7){
   if (palavra_secreta.includes(key) == true) {
    for(i = 0; i < num_letras; i++){
      if (palavra_secreta[i] == key ){
        palavra_oculta[i] = key
      }
    }
    for(i = 0; i < num_letras; i++){
      log_palavra_oculta = (log_palavra_oculta + palavra_oculta[i])
      document.getElementById("palavra_oculta").textContent = log_palavra_oculta.toUpperCase()
    }
    log_letras = (log_letras + key + " ")
    document.getElementById("log_letras").textContent = log_letras.toUpperCase()

    if (palavra_oculta.includes("_") == false) {
      document.getElementById("desenho").innerHTML = "<img src=img_win.svg"+">"
      document.getElementById("botao_reiniciar").focus()
    }
    }
    else {
      tentativas ++
      log_letras = (log_letras + key + " ")
      document.getElementById("desenho").innerHTML = "<img src="+"img_"+tentativas+".svg"+">"
      document.getElementById("log_letras").textContent = log_letras.toUpperCase()
    }
  } 
  if (tentativas == 7) {
    document.getElementById("dica").textContent = "Voce perdeu! Tente novamente."
    document.getElementById("palavra_oculta").textContent = "ENFORCADO"
    document.getElementById("botao_reiniciar").focus()
  }
};



function adicionar_palavra (){
  if (biblioteca_from_localstorage == null) {
    biblioteca = [{palavra: "ornitorringo" , dica: "animal exotico"},
    {palavra:"mexirica" , dica:"fruta nordestina"} ,
    {palavra:"palmeira" , dica:"tipo de arvore"} ,
    {palavra:"bentivi" , dica:"um passaro"} ,
    {palavra:"leao" , dica:"rei da selva"} ,
    {palavra:"macadamia" , dica:"coquinho brasileiro"} ,
    {palavra:"hamburguer" , dica:"melhor fast-food"} ,
    {palavra:"lavanda" , dica:"aroma agradavel"} ,
    {palavra:"enrolados" , dica:"filme da disney"} ,
    {palavra:"tecnologia" , dica:"sem ela a humanidade não seria nada"}];
  }

  biblioteca.push({palavra: document.getElementById("palavra_nova").value, dica: document.getElementById("dica_palavra_nova").value});
  console.log(biblioteca)
  localStorage.setItem("biblioteca", JSON.stringify(biblioteca));
  document.getElementById("palavra_nova").value = "";
  document.getElementById("dica_palavra_nova").value = "";
};


