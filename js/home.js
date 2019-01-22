const $modal = $('#contact-modal');
const $contactIcon = $('.contact-arrow');



$contactIcon.on('click', function() {
    if($contactIcon.hasClass('up')) {
        $contactIcon.removeClass('up');
        $contactIcon.addClass('down');

        $contactIcon.css('transform', 'rotate(180deg)');
        $modal.slideDown();

    } else if ($contactIcon.hasClass('down')) {
        $contactIcon.removeClass('down');
        $contactIcon.addClass('up');

        $contactIcon.css('transform', 'rotate(0deg)');
        $modal.slideUp();
    }

});

