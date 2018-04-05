movieDatabaseApp.controller('MovieDatabaseController', ['MovieService',
function (MovieService){
    console.log('MovieService Controller loaded');

    let self = this;
    let movieService = MovieService;

    self.Addmovie = MovieService.Addmovie;
    movieService.getMovie();
}])  
