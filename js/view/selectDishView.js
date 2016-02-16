//SelectDishView Object constructor
var SelectDishView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.allDishes = container.find("#allDishes");
	var allDishes = model.getAllDishes("starter");

	var allDishesHtml = "";

	for (i = 0; i < allDishes.length; i++) { 
       allDishesHtml += allDishes[i].name + "<br>";
       allDishesHtml += "<img src='images/"+allDishes[i].image + "'><br>";
       allDishesHtml += allDishes[i].description + "<br><br/>";
    }
	
	this.allDishes.html(allDishesHtml);
}
 
