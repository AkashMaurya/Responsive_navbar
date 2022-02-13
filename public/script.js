// For Responsive Menu
$(document).ready(function () {

    $('#show').click(function () {

        $('.second_nav').show();
        $('#show').hide();
        $('#cross').show();

    });

    $('#cross').click(function () {

        $('.second_nav').hide();
        $('#show').show();
        $('#cross').hide();

    });


});


// 