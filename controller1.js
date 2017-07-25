var app=angular.module("reddit2");

app.controller("ctrl1",function($scope, myServ,$location){



$scope.waddup="Hey";
$scope.getData=function(){
    myServ.getData().then(function(result){
        $scope.data=result;
        console.log($scope.data);
    });
  

};

});


    




// console.log($scope.json);

