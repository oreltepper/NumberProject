
function RandomTrivia(){

  return new Promise(function(resolve, reject){

    var resultsApi = new Array();
    var requests = [];
    for (var i = 0; i < 50; i++) {

        requests.push(createNumerForApiTrivia());
    }

    function createNumerForApiTrivia(){
      var input=Math.floor((Math.random() * 200) + 1);
      var flag=true;

      return getAnswer(input)
        .then(parseResponse)
        .then(function(item){
          resultsApi.push(item);
        })
        .catch(print);
    }

    Promise.all(requests)
      .then(function(){
        resolve(resultsApi);
      });

  })
}

  function getAnswer(number) {
    var config = {
      headers: {
        'X-Mashape-Key': 'Mh3SqwphBKmshWj5ZdvLUA1bIVSjp14wEMTjsngXnsVT4AvKu0'
      }
    };
    var url = 'https://numbersapi.p.mashape.com/' + number + '/trivia';
    return fetch(url, config);
  }

  function parseResponse(response) {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error("Some problem happened");
    }
  }

  function print(str) {
      resultsApi.push(str);
  }
