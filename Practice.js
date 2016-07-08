$(document).ready();
var address = $("#address").val();
var food = $("#food").val();

//  if (address && food <= "") {
//      $("#search").click(function() {
 //      alert("Type your location and what you're craving to continue!")
 //    }); 

function searchClick() {
    alert();
}

// Clear Button  
$("#clear").click(function() {
    $("#address").add("#food").val("");
});

// When Search Button is Clicked, Results Window appears.
$("#search").click(function() {
        $("#results").show();
        $(".jumbotron").hide();
    }
);

//Hides Results Window 
$("#searchAgain").click(function() {
    
        $("#results").hide();
        $(".jumbotron").show();

    });



// client id and secret variables 
var CLIENT_ID = ("I3RX34OWTKGUZKEWXP0OWUBE4EFESC0YPCK0FEZPRODPQN0S");
var CLIENT_SECRET = ("U3WL0AKRUPTRGVTZ4EMGGKWCC2Z2D5FGV5WNDUUB0EOKJNIU");

// using api for search button
("#search").getJSON("https://api.foursquare.com/v2/venues/search?client_id=" + "I3RX34OWTKGUZKEWXP0OWUBE4EFESC0YPCK0FEZPRODPQN0S" + "&client_secret=" +"U3WL0AKRUPTRGVTZ4EMGGKWCC2Z2D5FGV5WNDUUB0EOKJNIU"  + "&v=20130815&ll=40.7,-74&query=" + food );


//"l,data,success(data,status,xhr)

var answers = {
 response
}