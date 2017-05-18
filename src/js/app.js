// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include lib/flipclock.min.js
//=include lib/TweenMax.min.js

sayHello();

$(document).ready(function() {


    TweenMax.fromTo('.arrow-down', 0.7, {y:"-=5"}, {y:"+=10", yoyo:true, repeat:-1});


    $('a[href^="#scroll"]').click(function(){

        let scrollId = $(this).attr("href");

        $('html, body').animate({
            scrollTop:$(scrollId).offset().top
        }, 'slow');

        return false;
    });


    let clock = $('.countdown__timer').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        countdown: true,
        showSeconds: false,
        language:'ru-ru',
        callbacks: {
            stop: function () {
                $('.countdown__message').html('Марафон завершен!');
            }
        }
    });

    let startDate = 'May 31 2017 12:00:00';
    let finalDate = new Date(startDate);
    let currentDate = Date.now();
    let remaining = finalDate - currentDate;
    remaining /=1000;

    clock.setTime(remaining);
    clock.start();
});
