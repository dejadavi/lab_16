var app=angular.module("reddit2");

app.service('myServ',function($http){

this.data;

this.getData=function(){
   return $http({
        method: 'GET',
        url: 'https://www.reddit.com/r/aww/.json'
    }).then(function(json){

       return json.data.data.children;
        //console.log(this.data);
    });
   
};

this.returnData=function(){
return this.data;

};


});


