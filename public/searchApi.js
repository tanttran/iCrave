var searchOne = document.getElementById('searchButton');
var searchResult = document.getElementById('searchResult');

searchOne.addEventListener('click', function(e){
  e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.onload = function(){
    if(xhr.status == 200) {
      var apiResponse = JSON.parse(xhr.responseText)
      console.log(apiResponse);
    }
  }

  var input = {
    term: document.getElementById('searchTextOne').value,
    location: document.getElementById('searchTextTwo').value
  } 
  var searchInput = JSON.stringify(input); 
  console.log(searchInput); 
  xhr.open('POST', 'http://localhost:1337/info/search', true);
  xhr.send(searchInput);
}, false);