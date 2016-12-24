function DataController(list){
	this.dataItemList = list || [];
	var self=this;

	this.addItem = function(itemDate){
		self.dataItemList.push(itemDate);
	};

	this.sortItems = function(){
		self.dataItemList = self.dataItemList.sort(function(a,b){
			return a.number - b.number
		});
	};

}

function DataControllerView(DataController){
	var template,
		self = this;

	function init(){
		self.html = document.createElement("ul");
	}

	function render(){
		 var ul = self.html;
		renderItems(ul);
	}

	function renderItems(ul){
		for(var i=0; i<DataController.dataItemList.length; i++){
			var dataFact = DataController.dataItemList[i];
			var dataFactView = new DataView(dataFact);
			ul.appendChild(dataFactView.html);
		}
	}

	init();
	render();
}

function FavoriteListViewShow(dataList){
	var template,
		self = this;

	function init(){
		self.html = document.createElement("ul");
	}

	function render(){

		var ul = self.html;
		renderItems(ul);
	}

	function renderItems(ul){
		for(var i=0; i<dataList.dataItemList.length; i++){
			var data = dataList.dataItemList[i];
			var dataView = new DataFavView(data);
					ul.appendChild(dataView.html);

		}
	}

	init();
	render();

}
