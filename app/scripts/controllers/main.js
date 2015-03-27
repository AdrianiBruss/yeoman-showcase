define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name yeomanApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the yeomanApp
   */
  angular.module('yeomanApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
