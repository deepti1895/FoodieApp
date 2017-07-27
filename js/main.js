var GroseryShoppingList = angular.module('GroseryShoppingList',['ngRoute']);
GroseryShoppingList.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/loginTemplate.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/mainTemplate.html',
		controller: 'mainController'
	})
	.when('/Grosery/:id', {
		templateUrl: 'pages/Grosery.html',
		controller: 'GroseryController'
	})
});
GroseryShoppingList.controller("loginController",function($scope,$location) {
	$scope.goToHome = function() {

		// console.log('Do Something')
		$location.url('home')
	}

});
GroseryShoppingList.controller("mainController",function($scope) {
$scope.GroseryShoppingList = [{
    name: 'Imperfecto',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining Bar',
    cuisines: 'Modern Indian',
  	vote: '4.2',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
		bestDish: {
  	name: 'Corn Pizza',
  	image: 'http://images.meredith.com/bhg/images/recipe/p_R165798.jpg'
    },
  	image: 'image.jpg'
  },
  {
    name: 'Open House Cafe',
    address: 'Phase 1, Om Vihar, Nawada, Delhi, 110059',
    location: 'Delhi',
    category: 'Casual Dining Bar',
    vote: '4.0',
    cuisines: 'Modern Indian',
    cost: '2200',
    hours: '12 Noon to 1 AM (Mon-Sun)',
		bestDish: {
  	name: 'Mushroom Pizza',
  	image: 'https://www.google.co.in/search?q=mushroom+pizza&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjw1fjvxqnVAhUFo5QKHUCFDOsQ_AUICigB&biw=1350&bih=643#imgrc=3vq-f7eU-h8sDM:'
    },
    image: 'image1.jpg'
  },
  {
    name: 'Kingdom Of Momos',
    address: ' Khasra No - 147/1-2-3, Village Bamnoli, Sector - 28, Dwarka, Delhi, 110061',
    location: 'Dwarka',
    category: 'Casual Dining Bar',
    vote: '4.5',
    cuisines: 'Modern Indian',
    cost: '2200',
    hours: '12 Noon to 1 AM (Mon-Sun)',
		bestDish: {
  	name: 'Pure Paneer Momos',
	  image: 'https://www.google.co.in/search?q=pure+paneer+momos&source=lnms&tbm=isch&sa=X&ved=0ahUKEwixwNj9xqnVAhWDipQKHdmQANYQ_AUICygC&biw=1350&bih=643#imgrc=4mZ9Jhy1YBni7M:'
    },
    image: 'image2.jpg'
  },
  {
    name: 'Privee',
    address: '1A, Safdarjung Enclave, Block B 7, Arjun Nagar, Safdarjung Enclave, New Delhi, Delhi 110016',
    location: 'New Delhi',
    category: 'Casual Dining Bar',
    vote: '4.6',
    cuisines: 'Modern Indian',
    cost: '2200',
    hours: '12 Noon to 1 AM (Mon-Sun)',
		bestDish: {
	  name: 'Nachos',
  	image: 'https://www.google.co.in/search?q=nachos&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjq7c72xqnVAhUGn5QKHV1IBXoQ_AUICigB&biw=1350&bih=643#imgrc=_EXTe9cIBHf9QM:'
    },
    image: 'image3.jpg'
  },
  {
    name: 'The Hook',
    address: '1A, Safdarjung Enclave, Block B 7, Arjun Nagar, Safdarjung Enclave, New Delhi, Delhi 110016',
    location: 'New Delhi',
    category: 'Casual Dining Bar',
    vote: '4.0',
    cuisines: 'Modern Indian',
    cost: '2200',
    hours: '12 Noon to 1 AM (Mon-Sun)',
		bestDish: {
  	name: 'Pasta',
  	image: 'https://www.google.co.in/search?q=pasta&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiI-6O5x6nVAhUBqpQKHZjJCycQ_AUICigB&biw=1350&bih=643#imgrc=KnGYwARCqWMekM:'
    },
    image: 'image4.jpg'
  }

];
});

GroseryShoppingList.controller('GroseryController',function($scope,$routeParams,$http) {
	$scope.GroseryId = $routeParams.id;
	$scope.GroseryShoppingList = [{
	    name: 'Imperfecto',
	  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	  	location: 'Connaught Place',
	  	category: 'Casual Dining Bar',
	    cuisines: 'Modern Indian',
	  	vote: '4.2',
	  	hours: '12 Noon to 1 AM (Mon-Sun)',
			bestDish: {
	  	name: 'Corn Pizza',
	  	image: 'http://images.meredith.com/bhg/images/recipe/p_R165798.jpg'
	    },
	  	image: 'image.jpg'
	  },
	  {
	    name: 'Open House Cafe',
	    address: 'Phase 1, Om Vihar, Nawada, Delhi, 110059',
	    location: 'Delhi',
	    category: 'Casual Dining Bar',
	    vote: '4.0',
	    cuisines: 'Modern Indian',
	    cost: '2200',
	    hours: '12 Noon to 1 AM (Mon-Sun)',
			bestDish: {
	  	name: 'Mushroom Pizza',
	  	image: 'image7.jpg'
	    },
	    image: 'image1.jpg'
	  },
	  {
	    name: 'Kingdom Of Momos',
	    address: ' Khasra No - 147/1-2-3, Village Bamnoli, Sector - 28, Dwarka, Delhi, 110061',
	    location: 'Dwarka',
	    category: 'Casual Dining Bar',
	    vote: '4.5',
	    cuisines: 'Modern Indian',
	    cost: '2200',
	    hours: '12 Noon to 1 AM (Mon-Sun)',
			bestDish: {
	  	name: 'Pure Paneer Momos',
		  image: 'image8.jpg'
	    },
	    image: 'image2.jpg'
	  },
	  {
	    name: 'Privee',
	    address: '1A, Safdarjung Enclave, Block B 7, Arjun Nagar, Safdarjung Enclave, New Delhi, Delhi 110016',
	    location: 'New Delhi',
	    category: 'Casual Dining Bar',
	    vote: '4.6',
	    cuisines: 'Modern Indian',
	    cost: '2200',
	    hours: '12 Noon to 1 AM (Mon-Sun)',
			bestDish: {
		  name: 'Nachos',
	  	image: 'image9.jpg'
	    },
	    image: 'image3.jpg'
	  },
	  {
	    name: 'The Hook',
	    address: '1A, Safdarjung Enclave, Block B 7, Arjun Nagar, Safdarjung Enclave, New Delhi, Delhi 110016',
	    location: 'New Delhi',
	    category: 'Casual Dining Bar',
	    vote: '4.0',
	    cuisines: 'Modern Indian',
	    cost: '2200',
	    hours: '12 Noon to 1 AM (Mon-Sun)',
			bestDish: {
	  	name: 'Pasta',
	  	image: 'image10.jpg'
	    },
	    image: 'image4.jpg'
	  }

	];
	$scope.ingredients=[];
	$scope.Grosery=GroseryShoppingList[$scope.GroseryId]
	$scope.getIngredients = function(url) {
		console.log(url);
		var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
		$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key a41e222de5494814a6634e6797704c24',
			'Content-Type': 'application/json',
		},
		'data': data
	}).then(function (response) {
	var ingredients = response.data.outputs[0].data.concepts;
	console.log(response);
	var list='';
	for (var i =0;i < ingredients.length;i++) {
	$scope.ingredients.push(ingredients[i].name);
	}
});

};

});
