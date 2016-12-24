function initApp () {

  var app= new ApplicationController();
  var view= new ApplicationControllerView(app);
  document.body.appendChild(view.html);

  var favApp= new FavoriteController();
  var favView= new FavoriteListView(favApp);
  document.body.appendChild(favView.html);
}
