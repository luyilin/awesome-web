$(function () {
    var count = 0;
    var maxCount = 0;
    var curCount = $('.current-count span');
    var rippleClick = function (e) {
        var x = e.pageX;
        var y = e.pageY;
        var rippleWrap = $('<div class="ripple-big"></div><div class="ripple-small"></div>')
        rippleWrap.appendTo('body').css({
            left: x - 25,
            top: y - 25
        });
        curCount.text(++count);
        maxCount = (count > maxCount) ? count : maxCount;
        $('.max-count span').text(maxCount);
        setTimeout(function () {
            rippleWrap.remove();
            curCount.text(--count);
        }, 2200);
    };
    $('body').on('click', function (e) {
        rippleClick(e);
    })
});
