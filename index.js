$(document).ready(function(){

    $('#getDogButton').click(function(){
        var value = $("#inputField").val(); 
      $.get("http://countryapi.gear.host/v1/Country/getCountries?pName="+value, function(matchdata) {
	   console.log(matchdata);
          for(var i=0;matchdata.Response.length>i; i++ ){
        var name = "Country Name : " + matchdata.Response[0].Name;
          var region = "Region : " + matchdata.Response[i].Region;
          var subregion = "SubRegion : " + matchdata.Response[i].SubRegion;
          var Nativelanguage ="Native Language: " + matchdata.Response[i].NativeLanguage;
          var Latitude ="Latitude: "+ matchdata.Response[i].Latitude;
          var Longitude ="Logitude: "+ matchdata.Response[i].Longitude;
          var currencyname ="Currency Name: "+ matchdata.Response[i].CurrencyName;
          var area ="Area: "+ matchdata.Response[i].Area;
          var currencySymol ="Currency Symol : "+ matchdata.Response[i].CurrencySymbol;
          $(".card-title").append("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-<br>");
          $(".card-title").append(name + "<br>");
          $(".card-title").append(region+ "<br>");
          $(".card-title").append(subregion+ "<br>");
          $(".card-title").append(Nativelanguage+ "<br>");
          $(".card-title").append(Latitude+ "<br>");
          $(".card-title").append(Longitude+ "<br>");
          $(".card-title").append(currencyname+ "<br>");
          $(".card-title").append(area+ "<br>");
          $(".card-title").append(currencySymol + "<br><br><br>");
          $(".card-title").append("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-<br>");
          }
          
});

  })
      });
    
