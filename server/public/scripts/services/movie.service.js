movieDatabaseApp.service('MovieService', ['$http',
function($http){
console.log('Sale service Loaded')
  let self = this;

  self.movie = {list: [] };
  //Link view to service data

  self.getMovie = function() {  
    console.log('called get sale!');
    $http.get('/movies').then(function (response){
       self.movie.list = response.data;
    })
  }

  self.addMovie = function (movie) {
    $http.post('/movies', movie).then( function (response){
      console.log('Sale succesfully posted');
      self.getMovie();
    }).catch ( function (error){ 
      console.log('error in POST', error);
    })
  };
       self.addMovie();
}]);
