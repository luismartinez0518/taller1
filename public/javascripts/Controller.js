var app= angular.module('taller1', []);

app.controller('OperacionesController', function($scope) {
  
  $scope.sumar = function() { 
     $scope.resultado = parseInt($scope.numUno) + parseInt($scope.numDos);
  };
  $scope.restar = function() { 
      $scope.resultado = parseInt($scope.numUno) - parseInt($scope.numDos); 
  };
  $scope.multiplicar = function() { 
      $scope.resultado = parseInt($scope.numUno) * parseInt($scope.numDos); 
  };
  $scope.dividir = function() { 
      $scope.resultado = parseInt($scope.numUno) / parseInt($scope.numDos); 
  };

  $scope.clear = function() { 
      $scope.resultado = ""; 
      $scope.numUno = "";
      $scope.numDos = "";
  };
});

app.controller('TiendaController',TiendaController);
  TiendaController.$inject = ['$scope'];
    function TiendaController($scope){
        $scope.articulo = articulo;
    }

app.controller('TiendaController1',TiendaController1);
  TiendaController1.$inject = ['$scope'];
    function TiendaController1($scope){
        $scope.articulos = articulos;
    }