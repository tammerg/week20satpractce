angular.module("saturdayApp")
.controller('homework', function($scope){
  $scope.homework = [{
    student: 'tammerg',
    pizza: 'cheese'
  }, {
    student: 'cbmoate',
    pizza: 'snausages'
  }];
});
