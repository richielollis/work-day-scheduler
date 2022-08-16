$(document).ready(function() {
    // display current day in header
    $('#currentDay').text(moment().format('dddd' + ', ' + 'MMMM Do'));

    // add events from localStorage to corresponding .description
    $(".description").each(function() {
        $(this).val(localStorage.getItem($(this).parent().attr('id')));
    });
    
    // checks currentHour against each hourBlock
    var checkHour = function() {
        currentHour = moment().format('HH');

        $('.time-block').each(function() {
            var hourBlock = parseInt($(this).attr('id').split('-')[1]); 

            if (currentHour > hourBlock) {
                $(`#hour-${hourBlock}`).children('.description').addClass('past');
            } else if (currentHour < hourBlock) {
                $(`#hour-${hourBlock}`).children('.description').removeClass('past');
                $(`#hour-${hourBlock}`).children('.description').addClass('future');
            } else {
                $(`#hour-${hourBlock}`).children('.description').removeClass('past');
                $(`#hour-${hourBlock}`).children('.description').removeClass('future');
                $(`#hour-${hourBlock}`).children('.description').addClass('present');
            }  
        })
    };

    // run checkHour() to keep events and time properly refreshed  
    setInterval(checkHour(), 1000);
   
    // save events to localStorage 
    $('.saveBtn').on('click', function() {
        var event = $(this).siblings('.description').val();
        localStorage.setItem($(this).parent().attr('id'), event);
    });
});

