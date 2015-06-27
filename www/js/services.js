angular.module('AppMAPA.services', [])

.factory('Mapa', function RegisterMapaFactory($firebaseArray) {
  var fb = new Firebase("https://glaring-heat-3544.firebaseio.com/mapa");
  return {
    create: function(dados) {
      return $firebaseArray(fb).$add({
        posicao: dados.posicao,
        hora: dados.hora
      });
    },

    list: function() {
      return $firebaseArray(fb);
    }
  };
})
