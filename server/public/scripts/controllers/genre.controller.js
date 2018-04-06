movieDatabaseApp.controller('GenreController', ['GenreService',
function (GenreService){
    console.log('GService Controller loaded');

    let self = this;
    let genreService = GenreService;

    self.genre = GenreService.g;
    self.addGenre= genreService.addG;
    genreService.getGenre();
}])  
