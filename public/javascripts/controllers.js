app.controller('BooksController', BooksController);

BooksController.$inject = ['$scope'];
function BooksController($scope) {
    //$scope.book = book;
    $scope.books = books;
    $scope.msg = "Mensaje";
     $scope.$watch('msg', function (newValue, oldValue) {
         console.log("entrar",newValue,oldValue);
     });
    }
    CustomController.$inject=['$scope'];
    function CustomController($scope) {
        
    }