define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name yeomanApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the yeomanApp
   */
  angular.module('yeomanApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
