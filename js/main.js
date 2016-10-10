/*

@ingredients = array of Ingredient

*/

var Pantry = function(newIngredients) {
	this.ingredients = newIngredients;
};


var Ingredient = function(name, type, level, identifier) {
	this.name = name;
	this.type = type;
	this.level = level;
	this.identifier = identifier;
	
};

// These are the items in the pantry
var myPantry = new Pantry([
	//Strong Ingredients
	new Ingredient('Whiskey with', 'strong', 1, 'StrDrink1'),
	new Ingredient('Rum with', 'strong', 2, 'StrDrink2'),
	new Ingredient('Gin with', 'strong', 3, 'StrDrink3'),
	
	//Salty Ingredients
	new Ingredient('an olive on a stick and', 'salty', 1, 'SltDrink1'),
	new Ingredient('a salt-dusted rim and', 'salty', 2, 'SltDrink2'),
	new Ingredient('a charred rasher of bacon and', 'salty', 3, 'SltDrink3'),

	//Bitter Ingredients
	new Ingredient('bitters infused', 'bitter', 1, 'BitDrink1'),
	new Ingredient('tonic splashed', 'bitter', 2, 'BitDrink2'),
	new Ingredient('lemon peel garnished', 'bitter', 3, 'BitDrink3'),

	//Sweet Ingredients
	new Ingredient('sweet', 'sweet', 1, 'SwtDrink1'),
	new Ingredient('honey', 'sweet', 2, 'SwtDrink2'),
	new Ingredient('cola', 'sweet', 3, 'SwtDrink3'),

	//Fruity Ingredient
	new Ingredient('orange juice cocktail', 'fruity', 1, 'FrtDrink1'),
	new Ingredient('cassis liqueur cocktail', 'fruity', 2, 'FrtDrink2'),
	new Ingredient('cocktail with a cherry on top', 'fruity', 3, 'FrtDrink3')

]);


var Preferences = function(choices){
	this.choices = choices;
};

var Bartender = function() {	
	this.createDrink = function(selectedValues) {

		var myDrink = '';

		selectedValues.forEach(function(selectedValue){
			myPantry.ingredients.forEach(function(Ingredient){
				if(selectedValue == Ingredient.identifier) {
					myDrink += Ingredient.name + " ";

					return false;
				}
			});
		});

		return myDrink;

	};
};



$(document).ready(function (){

	//Create a random pirate bartender
	var pirateBartender = new Bartender();

	//On clicking the 'submit/make a drink' button produce a drink based on what was chosen.
	$('#drinkBtn').click(function(e) {
		e.preventDefault();

		// array to hold user's preferences as strings
		var selected = [];

		$('select option:selected').each(function() {
			var selection = $(this).val();
			selected.push(selection);
		});

		var myDrink = pirateBartender.createDrink(selected);
		var str = 'Yer <strong>' + myDrink + '</strong> is up, ya scurvy sea dog!';
		$('.modal-body').html(str);
	});

});