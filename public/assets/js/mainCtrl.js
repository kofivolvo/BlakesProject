angular.module('left-lane-app')
  .controller('mainCtrl', function($scope, mainSrv){

    $scope.test = "Ayy It's Lit Tho";

    mainSrv.getProducts()
      .then(function(response) {
        console.log(response);
      })




  })
