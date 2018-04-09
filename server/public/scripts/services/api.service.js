movieDatabaseApp.service('ApiService', ['$http',
function($http){
   console.log('api service is loaded');
   let self =this;
   self.randomGifUrl = {key1: ""};
   self.gifUrl= {key: ""};

    self.searchMovie = function () {
    $http({
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/company?api_key=b2043fe90cf063e3b3e89aa0d1d4baa7&query=logo_path&page=1`,
    }).then(function (response) {
        console.log(response)
        self.movieUrl.key = response.data.data[0].images.downsized.url;
        console.log(self.gifUrl)
    }).catch(function (error) {
        console.log('Error in GET response', error);
    })
    
}

}])