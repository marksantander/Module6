var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Plantation,US&APPID=3da61654f0edace3bb190e9535131c40";

    var listEl = document.getElementById("myData");

    fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var docArray = data.response.docs;
        for (var i = 0; i <docArray.length; i++) {
          var listItem = document.createElement("li");
          listItem.textContent = docArray[i].score;
          listEl.appendChild(listItem);
        }
      })
      .catch(function(error) {
        console.log(error);
      })