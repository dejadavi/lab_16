var app=angular.module("reddit2");

app.directive('myDir', function() {
  return {
    restrict:"E",
    replace: "true",
    templateUrl: "partial1.html"


  };
});