console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  $( '#addJokeButton' ).on( 'click', function(){
    console.log( 'addJokeButton on click');

    var jokester = $('#whoseJokeIn').val();
    var joke = $('#questionIn').val();
    var punchline = $('#punchlineIn').val();
    console.log(jokester, joke, punchline);

  $('#outputDiv').children().last().append('<h3>'+jokester+'</h3>');
  $('#outputDiv').children().last().append('<p>'+joke+'</p>');
  $('#outputDiv').children().last().append('<p>'+punchline+'</p>');

  }); // end addJokeButton on click

$.ajax ({
  type: "GET",
  url: '/jokes',
  success: function (response) {
        appendDanny();
        appendLuke();
        appendMillie();
        appendDev();
        appendScott();


//for loop?
function appendDanny() {
$('#outputDiv').append('<h3>' + response[0].whoseJoke + '</h3>');
$('#outputDiv').append('<p>' + response[0].jokeQuestion + '</p>');
$('#outputDiv').append('<p>' + response[0].punchLine + '</p>');
}

function appendLuke() {
$('#outputDiv').append('<h3>' + response[1].whoseJoke + '</h3>');
$('#outputDiv').append('<p>' + response[1].jokeQuestion + '</p>');
$('#outputDiv').append('<p>' + response[1].punchLine + '</p>');
}


function appendMillie() {
$('#outputDiv').append('<h3>' + response[2].whoseJoke + '</h3>');
$('#outputDiv').append('<p>' + response[2].jokeQuestion + '</p>');
$('#outputDiv').append('<p>' + response[2].punchLine + '</p>');
}

function appendDev() {
$('#outputDiv').append('<h3>' + response[3].whoseJoke + '</h3>');
$('#outputDiv').append('<p>' + response[3].jokeQuestion + '</p>');
$('#outputDiv').append('<p>' + response[3].punchLine + '</p>');
}

function appendScott() {
$('#outputDiv').append('<h3>' + response[4].whoseJoke + '</h3>');
$('#outputDiv').append('<p>' + response[4].jokeQuestion + '</p>');
$('#outputDiv').append('<p>' + response[4].punchLine + '</p>');
}
  } //end success
}); //end AJAX


}); // end doc ready
