// angular.module("listaTelefonica").value("config", { // value não carrega em provider
angular.module("listaTelefonica").constant("config", {
  baseUrl: "http://localhost:3001",
  messageErrorServidor: "Não foi possível carregar os dados."
});