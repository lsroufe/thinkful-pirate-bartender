// These are the items in the pantry

var pantry = {
	strong: ["StrDrink1", "StrDrink2", "StrDrink3"],
	salty: ["SltDrink1", "SltDrink2", "SltDrink3"],
	bitter: ["BitDrink1", "BitDrink2", "BitDrink3"],
	sweet: ["SwtDrink1", "SwtDrink2", "SwtDrink3"],
	fruity: ["FrtDrink1", "FrtDrink2", "FrtDrink3"]
};

var drinkOrder = function (orderVal) {
	this.strong = orderVal[0];
	this.salty = orderVal[1];
	this.bitter = orderVal[2];
	this.sweet = orderVal[3];
	this.fruity = orderVal[4];
};


