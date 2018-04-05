movieDatabaseApp.controller('MovieDatabaseController', ['MovieService',
function (MovieService){
    console.log('MovieService Controller loaded');

    let self = this;
    let MovieService = movieSerice;

    self.movie = MovieService.movie;
    self.addMovie = movieService.addMovie;
    movieService.getMovie();
}])  
