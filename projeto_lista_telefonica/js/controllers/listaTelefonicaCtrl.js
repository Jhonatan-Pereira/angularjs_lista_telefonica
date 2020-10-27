angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, config, contatosAPI, operadorasAPI) {
  $scope.app = "Lista Telefônica";
  $scope.contatos = [];
  $scope.operadoras = [];

  var carregarContatos = function () {
    contatosAPI.getContatos()
      .then(function ({ data }) {
        $scope.contatos = data;
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

  $scope.adicionarContato = function (contato) {
    contatosAPI.saveContato(contato)
      .then(function (response) {
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
        carregarContatos();
        console.log(response);
      }, function (error) {
        console.error(error)
        $scope.error = config.messageErrorServidor
      });
  };

  $scope.apagarContatos = function (contatos) {
    $scope.contatos = contatos.filter(function (contato) {
      if (!contato.selecionado) return contato;
    });
  };

  $scope.isContatoSelecionado = function (contatos) {
    return contatos.some(function (contato) {
      return contato.selecionado;
    });
  };
  
  $scope.ordenarPor = function (campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };

  carregarContatos();
  carregarOperadoras();
});