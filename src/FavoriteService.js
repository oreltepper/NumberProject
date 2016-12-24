function _FS(){
	this.itemsList = [];
	var self=this;
	var onChangeHandler;

	this.addData = function(favoriteItem){
		self.itemsList.push(favoriteItem);
		self.itemsList = self.itemsList.sort(function(a,b){
			return a.number - b.number
		});
		fireChangeHandler();
	};

  this.removeData = function(favoriteItem){
    for(var i=0; i<this.itemsList.length; i++) {
      if (this.itemsList[i] == favoriteItem)
        break;
    }
    this.itemsList.splice(i, 1);
		fireChangeHandler();
  };

	function fireChangeHandler(){
		if(onChangeHandler)
			onChangeHandler();
	}

	this.onChange = function (handler){
		onChangeHandler = handler;
	};


}

var FavoriteService = new _FS();
