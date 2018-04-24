$(function() {

    $('button').click(function() {
        $('button').text('Generating Doggo...');
        $.get('https://dog.ceo/api/breeds/image/random', function(data) {
            $('.doggo').append('<img src="'+ data.message +'" />');

            $('button').text('Generate Doggo');
        });

    });


});