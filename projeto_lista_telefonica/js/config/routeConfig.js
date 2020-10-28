angular.module("listaTelefonica").config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider.when("/contatos", {
    templateUrl: "view/contatos.html",
    controller: "listaTelefonicaCtrl"
  });
  $routeProvider.when("/novoContato", {
    templateUrl: "view/novoContato.html",
    controller: "novoContatoCtrl"
  });
});