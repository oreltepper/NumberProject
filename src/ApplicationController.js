
function ApplicationController(){
	this.list = new DataController();
	this.newItemLabel;

	this.addItem = function(value){
		var newItem = new Information(value);
		this.list.addItem(newItem);
	};

	this.addAllItems = function(){
		var self = this;
			return RandomTrivia()
				.then(function(array){
					for (var i = 0; i < 50; i++) {
						self.addItem(array[i]);
					}
				});
	};

}


function ApplicationControllerView(ApplicationController){
	var self = this,
		template;

	function init(){
		self.html = document.createElement("div");
		self.html.classList.add("list");
	}

	function render(){

	 self.html.innerHTML = `<fieldset class="numberFacts">
                  <legend>`+'Numbers Facts:'+`</legend>
									<div class="loader" id="loaderBar"></div><div class="input"><button id ="ProvidersButton" class="ProvidersButton" style="vertical-align:middle"> <span>Let's Roll The Dice</span></button></div>
									</fieldset>`;

		var dataListView = new DataControllerView(ApplicationController.list);
		var fset = self.html.querySelector('.numberFacts');
		fset.appendChild(dataListView.html);
		var addButton = self.html.querySelector('#ProvidersButton');
		addButton.addEventListener("click", onAddClick);


	}

	function onInputChanged(){
		ApplicationController.newItemLabel = this.value;
	}


	function onAddClick(e){
		e.preventDefault();
		document.getElementById("ProvidersButton").style.display = "none"
		document.getElementById("loaderBar").style.display = "flex";
		ApplicationController.addAllItems()
			.then(ApplicationController.list.sortItems)
			.then(render)
		  .then(disableButtonOfProviders);

	}

	init();
	render();
}

function disableButtonOfProviders(){
	document.getElementById("ProvidersButton").style.display = "none";
}
