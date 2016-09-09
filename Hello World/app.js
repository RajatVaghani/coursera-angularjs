(function(){
'use strict';

  angular.module('HelloWord', [])
  .controller('FirstController', function($scope){
      $scope.name = "Rajat";
      $scope.sayHello = function(){
        return "Hello Coursera!";
      };
  });

})();
