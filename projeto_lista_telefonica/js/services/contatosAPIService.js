angular.module("listaTelefonica").factory("contatosAPI", function($http, config, serialGenerator) {
  var _getContatos = function() {
    return $http({
      method: 'GET',
      url: config.baseUrl + '/contatos'
    });
  };
  
  var _saveContato = function(contato) {
    contato.serial = serialGenerator.generate();
    contato.data = new Date();
    var req = {
      method: 'POST',
      url: config.baseUrl + '/contatos',
      data: contato
    };

    return $http(req);
  };

  var _getContato = function(id) {
    return $http({
      method: 'GET',
      url: config.baseUrl + '/contatos/' + id
    });
  };

  return {
    getContatos: _getContatos,
    getContato: _getContato,
    saveContato: _saveContato
  };
});