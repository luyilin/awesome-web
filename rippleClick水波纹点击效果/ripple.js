(function ($) {
    var count = 0;
    var max = 0;
    var curCounter = $('#current-count span');
    var maxCounter = $('#max-count span');
    var container = $('body');
    var width = container.width();
    var height = container.height();
    var setting = {
        auto: false,
        click: true,
        mousemove: false,
        random: false
    };

    var createRipple = function (e) {
        var x = e.pageX || e.left;
        var y = e.pageY || e.top;
        var ripple = $('<div class="ripple-outer"></div><div class="ripple-inner"></div>');
        if (setting.random) {
            ripple.appendTo(container).css({
                left: x - 25,
                top: y - 25,
                borderColor: randomColor({
                    luminosity: 'light'
                })
            });
        } else {
            ripple.appendTo(container).css({
                left: x - 25,
                top: y - 25
            })
        }
        curCounter.text(++count);
        if (count > max) {
            maxCounter.text(max = count);
        }
        setTimeout(function () {
            ripple.remove();
            curCounter.text(--count);
        }, 2300);
    };

    var autoPlay = function () {
        if (setting.auto) {
            createRipple({
                left: Math.random() * width,
                top: Math.random() * height
            })
        }
        requestAnimationFrame(autoPlay);
    };
    autoPlay();

    $(document).on('change', 'input', function () {
        setting[this.id] = this.checked;
    });
    $(window).resize(function () {
        width = container.width();
        height = container.height();
    });

    container.click(function (e) {
        if (!setting.click) return;
        createRipple(e, this);
    }).mousemove(function (e) {
        if (!setting.mousemove) return;
        createRipple(e, this);
    });

})(jQuery);
