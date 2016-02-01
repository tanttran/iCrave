var app = angular.module('myApp', []);

app.filter('tel', function(){
  return function (tel) {
        if (!tel) { return ''; }

        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        var country, city, number;

        switch (value.length) {
            case 10: // +1PPP####### -> C (PPP) ###-####
                country = 1;
                city = value.slice(0, 3);
                number = value.slice(3);
                break;

            case 11: // +CPPP####### -> CCC (PP) ###-####
                country = value[0];
                city = value.slice(1, 4);
                number = value.slice(4);
                break;

            case 12: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 3);
                city = value.slice(3, 5);
                number = value.slice(5);
                break;

            default:
                return tel;
        }

        if (country == 1) {
            country = "";
        }

        number = number.slice(0, 3) + '-' + number.slice(3);

        return (country + " (" + city + ") " + number).trim();
    };
});

app.controller('apiController', function($http){
  vm = this;

  vm.getYelp = function() {
    $http({
      method: "POST",
      url: "/info/search",
      data: {
        term: document.getElementById('searchTextKeyword').value,
        location: document.getElementById('searchTextLocation').value,
        limit: 9
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

app.controller('signUpController', function($scope, $http){
  // vm = this;
  $scope.signUp = function(){
    $http({
      method: "POST",
      url: "/signUp",
      data: {
        username: this.username,
        password: this.password
      }
    });
  };
});