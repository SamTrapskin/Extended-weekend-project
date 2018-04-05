console.log('JS IS UP!');
let movieDatabaseApp = angular.module('movieDatabaseApp', ['ngRoute','ngMaterial']);

movieDatabaseApp.config( function ($routeProvider){
    console.log('config loaded');

    $routeProvider
    .when('/movie', {
        templateUrl: '/views/movie.html',
        controller: 'MovieDatabaseController as vm'
    })
  
})