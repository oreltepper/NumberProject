
function FavoriteController(){
	this.list = new DataController();

	this.getFavorites= function(){
	    this.list.dataItemList= FavoriteService.itemsList;
	}

}

function FavoriteListView(favoriteController){

	var self = this,
		template;

	function init(){
		self.html = document.createElement("div");
		FavoriteService.onChange(onAddClick);
	}

	function render(){

			self.html.innerHTML = `<fieldset class="numberFavorites" id="numberFavorites">
										 <legend>`+"Numbers Favorites:"+`</legend></fieldset>`;
			var list =self.html.querySelector('.numberFavorites');
			var favoriteListViewDisplay =new FavoriteListViewShow(favoriteController.list);
			list.appendChild(favoriteListViewDisplay.html);
		  // list.style.visibility="hidden";
			if ( favoriteController.list.dataItemList.length > 0)
				 		list.style.visibility="none";
			else {
						 list.style.visibility="hidden";
			}
	}


	function onAddClick(){
    favoriteController.getFavorites();
    render();


	}

		init();
		render();

}
