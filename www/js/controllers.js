angular.module('AppMAPA.controllers', [])

.controller('MapaRegisterCtrl', function($scope, $ionicPopup, Mapa) {
  var date = new Date(),
      hour = (date.getHours() < 10 ? '0' : '') + date.getHours(),
      minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes(),
      seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds(),
      time = hour + ':' + minute + ':' + seconds;
      console.log("Hora: " + time);
  $scope.hora = time;
  $scope.mapa = {};


  $scope.posicao = [{
    tipo: "Deitado",
  },
  {
    tipo: "Andando",
  },
  {
   tipo: "Correndo"
  }];

  $scope.registerNow = function() {
    $scope.mapa.hora = $scope.hora;
    Mapa.create($scope.mapa).then(function(res) {
      console.log("Acompanhamento ID: " + res);
      $ionicPopup.alert({
         title: 'Sucesso!',
         template: 'hora registrada com sucesso!'
      });
    }, function(error) {
      console.log(error);
    });
  };
})

.controller('MapaMonitorCtrl', function($scope, Mapa) {
  $scope.registers = Mapa.list();
})
