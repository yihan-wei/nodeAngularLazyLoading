define(['app'],function(app){
	app.controller('FunViewController',
	[
		'$scope',
		function($scope){
			console.log('FunViewController created');
			$scope.background = "https://www.ucl.ac.uk/news/news-articles/1213/Crab_Nebula_square.jpg";
			$scope.myPlunkerList = [
				{title:"google chart sample",
				url:"https://plnkr.co/edit/ODbWz9sHfLa3KuwZx0pD?p=preview"},
				{title:"d3js practise",
				url:"https://plnkr.co/edit/DWT800XOpklgFWzcbldZ?p=preview"},
				{title:"angular scopes",
				url:"https://plnkr.co/edit/2GeEwQjRzmlzRIv8U7VS?p=preview"},
				{title:"keep alive",
				url:"https://plnkr.co/edit/W9UQNiAJdl5i7WGSH7Fg?p=preview"}
			]
		}
	]);
});