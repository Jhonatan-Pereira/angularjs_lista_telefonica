angular.module("listaTelefonica").service("operadorasAPI", function($http, config) {
  this.getOperadoras = function() {
    return $http({
      method: 'GET',
      url: config.baseUrl + '/operadoras'
    });
  }
});