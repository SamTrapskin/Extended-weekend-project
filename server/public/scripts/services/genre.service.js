movieDatabaseApp.service('GenreService', ['$http',
function($http){
  let self = this;

  self.genre = {list: [] };
  //Link view to service data

  self.getGenre = function() {  
    console.log('called get genre!');
    $http.get('/genre').then(function (response){
       self.genre.list = response.data;
    })
  }

  self.addGenre = function (genre) {
    $http.post('/genre', genre).then( function (response){
      console.log('Genre succesfully posted');
      self.getGenre();
    }).catch ( function (error){ 
      console.log('error in POST', error);
    })
  };
     //self.addGenre();
       
  self.deleteGenre = function(genreId) {
        $http({
          method: 'DELETE',
          url: `/genre/${genreId}`
            }).then((response) => {
                self.getGenre();
            }).catch((error) => {
                console.log('error making get request', error);
               
            });
            $scope.clearSearch = function() {
              $scope.searchAll = null;
          }
        }
}]);
