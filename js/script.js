$(document).ready(function () {
    
    $('.scroll-arrow').click(function () {
        $("html, body").animate({ scrollTop: "722px" }, 1000);
    });
    
    var width = $(window).width();
    
    if (width > 0 && width <= 768) {
        $('#bg-video').remove();
        $('.scroll-arrow').remove();
    }
});