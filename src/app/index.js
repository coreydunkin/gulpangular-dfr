'use strict';

angular.module('dfrWomen', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'app.directives.contactCard'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      }).state('results', {
        url: '/results',
        templateUrl: 'app/main/results.html',
        controller: 'ResultsCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
