
function Data(label){
	this.label = label;
	this.number=label.substring(0, (label.indexOf(" ")));
	this.number = parseInt(this.number);


	this.setFavorite = function(isFavorite){
		this.isFavorite = isFavorite;

		if (isFavorite){
					FavoriteService.addData(this);
		}
		else {
				FavoriteService.removeData(this);
		}
	};
}

function DataView(dataFact){
	var template,
		self = this,
		button;

	function init(){
		self.html = document.createElement("li");
	}

	function render(){
		self.html.innerHTML = `<p><button class="toggle-Favorite" id="buttonCheck"></button> <span class="fact" >` +  dataFact.label+`</span></p>`;
		button=self.html.querySelector(".toggle-Favorite");
		self.html.querySelector(".toggle-Favorite")
			.addEventListener("click", onSetFavoriteClick);
	}

	function onSetFavoriteClick(){

		dataFact.setFavorite( !dataFact.isFavorite );
		render();
		changeingStateCheck(dataFact,self);
	}

	init();
	render();
}



function DataFavView(dataFact){
	var template,
		self = this;

	function init(){
		self.html = document.createElement("li");
	}

	function render(){
		self.html.innerHTML = `<div class="Favorites"> <p>` + dataFact.label+`</p></div>`;
	}

	function onSetFavoriteClick(){
		dataFact.setFavorite( !dataFact.isFavorite );
		render();
	}

	init();
	render();

}

function changeingStateCheck( dataFact,self ){
	if (dataFact.isFavorite ){
				// self.html.querySelector(".toggle-Favorite").style.backgroundColor="green";
				self.html.querySelector(".toggle-Favorite").innerHTML="✔";
				self.html.querySelector("p").style.color="red";

	}
	else{
				// self.html.querySelector(".toggle-Favorite").style.backgroundColor="white";
				self.html.querySelector(".toggle-Favorite").innerHTML="";
				self.html.querySelector("p").style.color="#3d0099";

	}
}
