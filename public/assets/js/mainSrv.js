angular.module('left-lane-app')
  .service('mainSrv', function($http){

    this.getProducts = function () {
      return $http.get('v1/products')
        .then(function(response){
          console.log(response);
        })

    }

  })
