$(document).ready(function() {
    // display current day in header
    $('#currentDay').text(moment().format('dddd' + ', ' + 'MMMM Do'));
    
    // checks currentHour against each hourBlock
    var checkHour = function() {

        currentHour = moment().format('HH');

        $('.time-block').each(function() {
            var hourBlock = parseInt($(this).attr('id').split('-')[1]); 

            if (currentHour > hourBlock) {
                $('.description').addClass('past');
            } else if (currentHour < hourBlock) {
                $('.description').removeClass('past');
                $('.description').addClass('future');
            } else {
                $('.description').removeClass('past');
                $('.description').removeClass('future');
                $('.description').addClass('present');
            }
            
        })
    };

    checkHour();

    // saving events to localStorage 
    $('.saveBtn').on('click', function() {
        var event = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(event, time);

    });

});

