movieDatabaseApp.controller('MovieController', ['MovieService', 'ApiService',
function (MovieService,ApiService){
    console.log('Movie Controller loaded');

    let self = this;
    let movieService = MovieService;

    self.movie = MovieService.movie;
    self.addMovie = movieService.addMovie;
    self.searchMovie = ApiService.searchMovie;
    self.movieUrl = ApiService.movieUrl;

    self.deleteMovie = function (movieId){
    console.log(`movie Deleted!`, movieId);
    movieService.deleteMovie(movieId);
    }
   movieService.getMovie();
}])  

