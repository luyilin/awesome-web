$(function () {
    $('.h-btn').on('mousedown', function (e) {
        var width = $(this).outerWidth();
        var wave = $('<i class="wave"></i>').appendTo($(this));
        var colorMap = $(this).css('backgroundColor').replace('rgb(', '').replace(')', '').split(',').map(function (i) {
            return Number(i) - 20;
        });
        var bgColor = 'rgb(' + colorMap.join(',') + ')';
        $(this).append(wave);
        wave.css({
            width: width,
            height: width,
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

/*
 原理:
 波纹产生在按钮内部，波纹的定位就是应该相对按钮的 position: absolute，所以这时的坐标应为：
 top:  鼠标垂直位置 - 按钮垂直偏移 - 波纹高度 / 2;
 left: 鼠标水平位置 - 按钮水平偏移 - 波纹宽度 / 2;
 */
