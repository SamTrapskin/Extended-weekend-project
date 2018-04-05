movieDatabaseApp.controller('GenreController', ['GenreService',
function (GenreService){
    console.log('GenreService Controller loaded');

    let self = this;
    let genreService = GenreService;

    self.genre = GenreService.genre;
    self.addGenre = genreService.addGenre;
    genreService.getGenre();
}])  
