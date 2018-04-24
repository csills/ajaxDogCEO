$(function() {

    $.get('https://dog.ceo/api/breeds/list', function(response){
        
        $('select').append('<option>Choose a Dog Breed</option>');
        response.message.forEach(function(currentBreed){
            $('select').append('<option val= "'+ currentBreed +'">' + currentBreed + '</option>');
        });
    });


    $('select').change(function(){
        var dogBreed = $(this).val();
        var url = "https://dog.ceo/api/breed/"+ dogBreed +"/images/random";
        
        if (dogBreed != "Choose a Dog Breed") {
            $.get(url, function(response){
                $('.doggo').append('<img src="'+ response.message +'" />');
            });
        }
    });




    $('button').click(function() {
        $('button').text('Generating Doggo...');
        $.get('https://dog.ceo/api/breeds/image/random', function(response) {
            $('.doggo').append('<img src="'+ response.message +'" />');

            $('button').text('Generate Doggo');
        });

    })
    
});