movieDatabaseApp.controller('MovieController', ['MovieService',
function (MovieService){
    console.log('Movie Controller loaded');

    let self = this;
    let movieService = MovieService;

    self.movie = MovieService.movie;
    self.addMovie = movieService.addMovie;
    movieService.getMovie();
}])  
