//SelectDishView Object constructor
var SelectDishView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.firstDishName = container.find("#firstDishName");
	var allDishes = model.getAllDishes("starter");

	this.firstDishName.html(firstDishName);

	var allDishesHtml = "";

	for (i = 0; i < allDishes.length; i++) { 
       allDishesHtml += allDishes[i].name + "<br>";
    }
	
	this.firstDishName.html(allDishesHtml);
}
 
