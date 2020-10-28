angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, config, contatosAPI, operadoras, $location) {
  $scope.operadoras = operadoras.data;

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

});