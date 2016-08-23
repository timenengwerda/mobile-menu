$(document).ready(function () {
    $('.menu-toggle').click(function() {
        var menu = $(this).parents('.menu');
        if (menu) {
            menu.toggleClass('opened');
        }
    });

    function menuOutOfScreen (menu) {
        menu.css('top', menu.outerHeight() * -1);
    }

    menuOutOfScreen($('.menu ul'));
});