angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, config, contatos, operadoras, serialGenerator) {
  $scope.app = "Lista Telefônica";
  $scope.contatos = contatos.data;
  $scope.operadoras = operadoras.data;
  $scope.hasContatoSelecionado = false;

  var init = function() {
    calcularImpostos($scope.contatos);
    generateSerial($scope.contatos);
  }

  var calcularImpostos = function(contatos) {
    contatos.forEach(function(contato) {
      contato.operadora.precoComImposto = calcularImposto(contato.operadora.preco);
    });
  }

  var calcularImposto = function(preco) {
    var imposto = 1.2;
    return preco * imposto;
  }

  var generateSerial = function (contatos) {
    contatos.forEach(function(item) {
      item.serial = serialGenerator.generate();
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
    $scope.verificarContatosSelecionados($scope.contatos);
  };

  $scope.selecionarContato = function(contato) {
    contato.selecionado = !contato.selecionado;
    $scope.verificarContatosSelecionados($scope.contatos);
  }

  $scope.verificarContatosSelecionados = function (contatos) {
    $scope.hasContatoSelecionado = contatos.some(function (contato) {
      return contato.selecionado;
    });
  };
  
  $scope.ordenarPor = function (campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };

  init();
});