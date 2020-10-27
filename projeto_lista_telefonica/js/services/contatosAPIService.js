angular.module("listaTelefonica").factory("contatosAPI", function($http, config) {
  var _getContatos = function() {
    return $http({
      method: 'GET',
      url: config.baseUrl + '/contatos'
    });
  };
  
  var _saveContato = function(contato) {
    var req = {
      method: 'POST',
      url: config.baseUrl + '/contatos',
      data: contato
    };

    return $http(req);
  };

  return {
    getContatos: _getContatos,
    saveContato: _saveContato
  };
});