angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http) {
  $scope.app = "Lista Telefônica";
  $scope.contatos = [];
  $scope.operadoras = [];

  var carregarContatos = function () {
    // Forma antiga desde a v1.4.3
    // $http.get("http://localhost:3001/contatos").success(function(data) {
    //   $scope.contatos = data;
    // });
    $http({
      method: 'GET',
      url: 'http://localhost:3001/contatos'
    }).then(function ({ data }) {
      // console.log(data)
      $scope.contatos = data;
    }, function (error) {
      console.error(error)
    });
  };

  var carregarOperadoras = function () {
    // Forma antiga desde a v1.4.3
    // $http.get("http://localhost:3001/operadoras").success(function(data) {
    //   $scope.operadoras = data;
    // });
    $http({
      method: 'GET',
      url: 'http://localhost:3001/operadoras'
    }).then(function ({ data }) {
      // console.log(data)
      $scope.operadoras = data;
    }, function (error) {
      console.error(error)
    });
  };

  $scope.adicionarContato = function (contato) {
    // $scope.contatos.push(angular.copy(contato));

    var req = {
      method: 'POST',
      url: 'http://localhost:3001/contatos',
      data: contato
    };

    $http(req).then(function (response) {
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      carregarContatos();
      console.log(response);
    }, function (error) {
      console.error(error)
    });


    // forma errada, porque aplicação fica mais difícil de compreender e
    // difícil de fazer teste unitário.
    // $scope.contatos.push({nome: $scope.nome, telefone: $scope.telefone});
  };
  $scope.apagarContatos = function (contatos) {
    $scope.contatos = contatos.filter(function (contato) {
      if (!contato.selecionado) return contato;
    });
  }
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