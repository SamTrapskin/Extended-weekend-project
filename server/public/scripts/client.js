console.log('JS IS UP!');
let movieDatabaseApp = angular.module('movieDatabaseApp', ['ngRoute','ngMaterial']);

movieDatabaseApp.config( function ($routeProvider){
    console.log('config loaded');

    $routeProvider
    .when('/movies', {
        templateUrl: '/views/movies.html',
        controller: 'MovieDatabaseController as vm'
    })
    .when('/genre', {
        templateUrl: '/views/genre.html',
        controller: 'GenreController as vm'
  
    })
})