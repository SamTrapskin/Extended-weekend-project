movieDatabaseApp.controller('MovieController', ['MovieService',
function (MovieService){
    console.log('Movie Controller loaded');

    let self = this;
    let movieService = MovieService;

    self.movie = MovieService.movie;
    self.addMovie = movieService.addMovie;
    

    self.deleteMovie = function (movieId){
    console.log(`movie Deleted!`, movieId);
    movieService.deleteMovie(movieId);
    }
   movieService.getMovie();
}])  
