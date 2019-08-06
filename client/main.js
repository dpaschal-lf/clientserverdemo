

$(document).ready( startApp );
var someName= '';

function startApp(){
    getData();
}

function getData(){
    var settings = {
        url: '../server/getnames.json',
        method: 'GET',
        dataType: 'json',
        success: handleDataFromServer
    }
    $.ajax( settings );
}

function handleDataFromServer( response ){
    console.log( response );
}