'use strict';

/**
 * @ngdoc overview
 * @name myappApp
 * @description
 * # myappApp
 *
 * Main module of the application.
 */
var app = angular.module('myappApp', ['ngAnimate','ngCookies','ngMessages','ngRoute','ngSanitize','ngTouch','ngMaterial','ngMdIcons','ngCookies']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryColor('teal', {
    'default': '500', // by default use shade 700 from the cyan palette for primary intentions
    'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
    'hue-2': '200', // use shade 200 for the <code>md-hue-2</code> class
    'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
  })
  // If you specify less than all of the keys, it will inherit from the
  // default shades
  .accentColor('indigo', {
    'default': '400', // use shade 600 for default, and keep all other shades the same
    'hue-1': '700' // use shade 100 for the <code>md-hue-1</code> class
  })
  .warnColor('red', {
    'default': '600' // use shade 400 for default, and keep all other shades the same
  });
})
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/#'
      });

  })

  .controller('AppCtrl', function($scope, $rootScope, $window, $timeout, $mdSidenav, $log, $location, $anchorScroll) {

//    //function to toggle the left navigation
//    $scope.toggleLeft = function() {
//      $mdSidenav('left').toggle()
//    };
//
//    //changes the location path/page of the app
//    $scope.go = function ( path ) {
//      $location.path( path );
//      $mdSidenav('left').close();
//    };
  });

//  //Controller for the left nav
//  .controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log, $location, $anchorScroll) {
//    $scope.close = function() {
//      $mdSidenav('left').close()
//      .then(function(){
//        $log.debug('close LEFT is done');
//      });
//    };
//    $scope.gotoTop = function (){
//      // set the location.hash to the id of
//      // the element you wish to scroll to.
//      $location.hash('pageTitle');
//
//      // call $anchorScroll()
//      $anchorScroll();
//    };
//  });
