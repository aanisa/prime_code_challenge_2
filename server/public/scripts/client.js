console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  $( '#addJokeButton' ).on( 'click', function(){
    console.log( 'addJokeButton on click');

    // var jokester = $('whoseJokeIn').val();
    // var joke = $('questionIn').val();
    // var punchline = $('punchlineIn').val();
    // console.log(jokester + joke + punchline);
    // $('#outputDiv').append('<p></p>')
  }); // end addJokeButton on click

$.ajax ({
  type: "GET",
  url: '/jokes',
  success: function (response) {
    console.log(response);
  }
});



}); // end doc ready
