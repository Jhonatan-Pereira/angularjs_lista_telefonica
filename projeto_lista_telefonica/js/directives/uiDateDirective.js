angular.module("listaTelefonica").directive("uiDate", function($filter) {
  return {
    require: "ngModel",
    link: function(scope, element, attrs, ctrl) {

      var _formatDate = function(data) {
        data = data.replace(/[^0-9]+/g, "");
        if(data.length > 2) {
          data = data.substring(0,2) + "/" + data.substring(2);
        }
        if(data.length > 5) {
          data = data.substring(0,5) + "/" + data.substring(5,9);
        }
        return data;
      };

      element.bind("keyup", function(){
        // console.log(ctrl.$viewValue)
        ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
        ctrl.$render();
      });

      ctrl.$parsers.push(function(value) {
        if(value.length === 10) {
          var [dia, mes, ano] = value.split("/")
          return new Date(ano,mes-1,dia).getTime();
        }
      });

      ctrl.$formatters.push(function(value) {
        return $filter("date")(value, "dd/MM/yyyy");
      });
    }
  };
});