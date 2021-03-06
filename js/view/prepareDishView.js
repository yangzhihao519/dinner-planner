//PrepareDishView Object constructor
var PrepareDishView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.prepareDishes = container.find("#prepareDish");
	this.numberOfPeople = container.find("#numberOfPeople");
	
	this.numberOfPeople.html(model.getNumberOfGuests);

	// var dishId = ["1", "101"];
	var dishes = model.getFullMenu();
	console.log(dishes);

	var prepareDishHtml = "",
		desp = "Description:"
	
	for(i=0; i< dishes.length; i++)
	{
		var dish = dishes[i];
				
		prepareDishHtml += "<div class=\"panel panel-default\">"+
								"<div class=\"panel-body\">"+
									"<div class=\"col-md-12\">"+
										"<div class=\"col-md-3 thumb\">"+
											"<a class=\"thumbnail\">"+
											"<img src='images/"+dish.image+"'>"+
											"</a>"+
										"</div>"+
										"<div class=\"col-md-3\">"+
											"<h3>"+dish.name+"</h3>"+
											"<div class=\"col-md-12\">"+
												"<span>"+dish.description+ "</span>"+
											"</div>"+
										"</div>"+
										"<div class=\"col-md-6\">"+
											"<h3>"+desp+"</h3>"+
											"<span>"+dish.description + "</span>"+
										"</div>"+
									"</div>"+
								"</div>"+
							"</div>";
		
	}
	this.prepareDishes.html(prepareDishHtml);
}