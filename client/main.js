

$(document).ready( startApp );
var someName= '';

function startApp(){
    getNameData();
    getFoodData();
}

function getNameData(){
    var settings = {
        url: 'http://localhost:3001/names',
        method: 'GET',
        dataType: 'json',
        success: handleNameDataFromServer
    }
    $.ajax( settings );
}

function getFoodData(){
    var settings = {
        url: 'http://localhost:3001/favfoods',
        method: 'GET',
        dataType: 'json',
        success: handleFoodDataFromServer
    }
    $.ajax( settings );   
}

function handleNameDataFromServer( response ){
    console.log( "name data from server"  , response );
    for(var index = 0 ; index < response.length; index++){
        var nameDiv = $("<div>").text( response[index].name);
        $("body").append(nameDiv);
    }
}

function handleFoodDataFromServer( response ){
    console.log( response );
}