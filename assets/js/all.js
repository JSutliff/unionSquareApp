

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    for (var i = 0; i < myJson.length; i++) {
      var p = document.createElement("p");
    document.body.appendChild(p).setAttribute('id', 'append' + [i]);
    document.getElementById('append' + [i]).innerText = myJson[i].title;
    }
    
    console.log(myJson);
    
  });