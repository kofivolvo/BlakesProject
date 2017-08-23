angular.module('left-lane-app', [ 'ui.router', 'ngCookies'])



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
        templateUrl: 'src/templates/shop.html',
        controller: function ($scope, $cookies) {



        }
      })

      .state('product',{
        url:'/product',
        templateUrl: 'src/templates/product.html'
      })

      .state('cart',{
        url:'/cart',
        templateUrl: 'src/templates/cart.html'
      })

      .state('checkout', {
        url:"/checkout",
        templateUrl: 'src/templates/checkout.html'
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


  $('.sim-thumb').on('click', function() {
    $('#main-product-image').attr('src', $(this).data('image'));
  })



})


.directive('navBar', function() {
  return {
    templateUrl:'src/templates/navbar.html'
  };
});
