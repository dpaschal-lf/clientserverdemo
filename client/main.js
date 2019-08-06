

$(document).ready( startApp );
var someName= '';

function startApp(){
    getNameData();
    getFoodData();
}

function getNameData(){
    var settings = {
        url: '../server/getnames.json',
        method: 'GET',
        dataType: 'json',
        success: handleNameDataFromServer
    }
    $.ajax( settings );
}

function getFoodData(){
    var settings = {
        url: '../server/getfavfoods.json',
        method: 'GET',
        dataType: 'json',
        success: handleFoodDataFromServer
    }
    $.ajax( settings );   
}

function handleNameDataFromServer( response ){
    console.log( response );
}

function handleFoodDataFromServer( response ){
    console.log( response );
}