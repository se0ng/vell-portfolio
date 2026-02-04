//     open menu
jQuery(function ($) {
    $('.menu-btn').on('click', function () {
        $('.header').toggleClass('open');
    });

    $('.category-btn').on('click', function () {
        $('.categories').toggleClass('open');
    });
});

$(document).ready(function () {
    $('.works-item').modaal({
        type: 'inline',
        overlay_opacity: .7,
        animation: 'fade'
    });
});