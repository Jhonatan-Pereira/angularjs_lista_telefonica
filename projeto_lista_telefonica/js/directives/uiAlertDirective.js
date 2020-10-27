angular.module("listaTelefonica").directive("uiAlert", function() {
  return {
    templateUrl: "view/alert.html",
    replace: true,
    // restict: "A", //retringir ao atributo <div ui-alert><div>
    // restict: "E", //retringir ao elemento <ui-alert></ui-alert>
    restict: "AE", //retringir ao atributo e ao elemento
    // restict: "C", //retringir a classe <div class="alert"></div>
    // restict: "M", //retringir ao comentario <!--directive:alert>--> <div></div>
    scope: {
      title: "@title",
      // message: "=message",
    },
    transclude: true
  };
});