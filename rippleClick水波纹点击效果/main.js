$(function () {
    $('.h-btn').on('mousedown', function (e) {
        var width = $(this).outerWidth();
        var height = width;
        var wave = $('<i class="wave"></i>').appendTo($(this));
        var colorMap = $(this).css('backgroundColor').replace('rgb(', '').replace(')', '').split(',').map(function (i) {
            return Number(i) - 20;
        });
        var bgColor = 'rgb(' + colorMap.join(',') + ')';
        $(this).append(wave);
        wave.css({
            width: width,
            height: height,
            left: e.pageX - $(this).offset().left - width / 2,
            top: e.pageY - $(this).offset().top - height / 2,
            background: bgColor
        });
            setTimeout(function () {
                wave.remove();
            }, 1000);
        }).on('mouseup', function() {
            $('wave').fadeOut(750);
        })
});
