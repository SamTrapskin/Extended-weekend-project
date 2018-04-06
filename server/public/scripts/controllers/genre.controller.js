movieDatabaseApp.controller('GenreController', ['GenreService',
function (GenreService){
    console.log('GenreService Controller loaded');

    let self = this;
    let genreService = GenreService;

    self.genre = GenreService.genre;
    self.addGenre= genreService.addGenre;
   
    self.deleteGenre = function (genreId){
        console.log(`genre Deleted!`, genreId);
        genreService.deleteGenre(genreId);
        }
       genreService.getGenre();
    }])  
