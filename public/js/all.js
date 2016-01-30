var app = angular.module('myApp', []);

app.controller('apiController', function($http){
  vm = this;

  vm.getYelp = function() {
    $http({
      method: "POST",
      url: "/info/search",
      data: {
        term: document.getElementById('searchTextKeyword').value,
        location: document.getElementById('searchTextLocation').value
      }

    })
    .success(function(data){
    vm.response = data;
    })
    .error(function(data){
    console.log(data);
    });

  };
});