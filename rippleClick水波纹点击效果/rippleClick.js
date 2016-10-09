$(function () {
    var count = 0;
    var maxCount = 0;
    var countText = $('.current-count span');
    var maxCountText = $('.max-count span');
    var body = $('body');
    var wrapWidth = body.width(),
        wrapHeight = body.height();
    var setting = {
        click: true,
        mousemove: false,
        randomColor: false,
        auto: false
    };
    var ripple = function (e) {
        var x = e.pageX || e.left;
        var y = e.pageY || e.top;
        var rippleWrap = $('<div class="ripple-big"></div><div class="ripple-small"></div>');
        rippleWrap.appendTo(body).css({
            left: x - 25,
            top: y - 25
        });
        if (setting.randomColor) {
            var borderColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
            // var borderColor = randomColor({luminosity: 'light'}); // 这个更漂亮
            rippleWrap.css("border-color", borderColor);
        }
        countText.text(++count);
        maxCount = count > maxCount ? count : maxCount;
        maxCountText.text(maxCount);
        setTimeout(function () {
            rippleWrap.remove();
            countText.text(--count);
        }, 2200);
    };

    var auto = function () {
        if (setting.auto) {
            ripple({
                left: Math.random() * wrapWidth,
                top: Math.random() * wrapHeight
            });
        }
        requestAnimationFrame(auto);
    };
    auto();

    $(document).on('change', 'input', function () {
        setting[this.id] = this.checked;
    });

    body.on('click', function (e) {
        if (!setting.click) return;
        ripple(e);
    }).on('mousemove', function (e) {
        if (!setting.mousemove) return;
        ripple(e);
    })
});
