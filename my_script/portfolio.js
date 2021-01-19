//아코디언메뉴
$("#test").on('click', function () {

    function slideDown(target) {
        slideUp();
        $(target).addClass('on').next().slideDown();
    }
    
    function slideUp() {
        $('dt').removeClass('on').next().slideUp();
    };
    $(this).hasClass('on') ? slideUp() : slideDown($(this));
    
    })