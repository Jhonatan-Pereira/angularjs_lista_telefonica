angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, config, contatosAPI, operadorasAPI, $location) {
  $scope.app = "Lista Telefônica";
  $scope.operadoras = [];

  $scope.adicionarContato = function (contato) {
    contatosAPI.saveContato(contato)
      .then(function (response) {
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
        $location.path("/contatos");
        console.log(response);
      }, function (error) {
        console.error(error)
        $scope.error = config.messageErrorServidor
      });
  };

  var carregarOperadoras = function () {
    operadorasAPI.getOperadoras()
      .then(function ({ data }) {
        $scope.operadoras = data;
      }, function (error) {
        console.error(error)
        $scope.error = config.messageErrorServidor
      });
  };

  carregarOperadoras();
});