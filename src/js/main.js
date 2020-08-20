$(function () {
    $('.item').click(function (e) {
        if($(this).hasClass('disabled')) {
            return;
        }
        $(this).toggleClass('selected');
    })

    $('.item-cta').click(function (e) {

        $(this).parent().prev().toggleClass('selected');
    })
})