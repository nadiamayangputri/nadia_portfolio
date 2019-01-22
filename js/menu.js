const $menu = $('.menu');
const $toggle = $('.menu-icon');


$toggle.on('click', function() {
    if($toggle.hasClass('close')) {
        $toggle.removeClass('close');
        $toggle.addClass('open');

        $menu.slideDown();

    } else if ($toggle.hasClass('open')) {
        $toggle.removeClass('open');
        $toggle.addClass('close');

        $menu.slideUp();

    }

});