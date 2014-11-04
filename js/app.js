/*
    app.js: main application script
    this is an Angular application
 */

"use strict";
angular.module('MoviesApp', [])
	.controller('MoviesController', function($scope){
		//intialize variables with list of movies such that it'll be accessed in the view
		$scope.movies = movies;
	})
