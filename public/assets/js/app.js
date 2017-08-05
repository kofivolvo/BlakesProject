angular.module('left-lane-app', [ 'ui.router'])



.config(function($stateProvider, $urlRouterProvider, $locationProvider){


  $urlRouterProvider.otherwise('/')

  // $locationProvider.hashPrefix('!');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.html',
      })


      .state('shop',{
        url:'/shop',
        templateUrl: 'src/templates/shop.html'
      })


  $(document).foundation()

  $(function() {
    $(window).scroll(function() {
      var winTop = $(window).scrollTop();
      if (winTop >= 30) {
        $("body").addClass("sticky-shrinknav-wrapper");
      } else{
        $("body").removeClass("sticky-shrinknav-wrapper");
      }
    });
  });



})


.directive('navBar', function() {
  return {
    templateUrl:'src/templates/navbar.html'
  };
});
