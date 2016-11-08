/**
 * create by zzc 2016-08-19
 *
 * JQuery Plugin [ aniAuto ]
 * A jquery plugin based on animate.css
 *
 * Repository:   https://github.com/justinzzc/aniAuto.git
 *
 */

(function ($) {


    function autoAni(item, options) {
        var delay = 0, duration = null;
        var $item = $(item);

        /*init hide*/
        var initHide = (undefined != $item.attr('ani-init-hide'));
        if (initHide) {
            $item.hide();
        }

        function runItemAni() {
            if (initHide) {
                $item.show();
            }

            /*delay*/
            if ($item.attr('ani-delay')) {
                delay = $item.attr('ani-delay');
                $item.css({
                    'animation-delay': delay,
                    '-webkit-animation-delay': delay,
                    '-ms-animation-delay': delay,
                    '-woz-animation-delay': delay
                });
            }
            /*duration*/
            if ($item.attr('ani-duration')) {
                duration = $item.attr('ani-duration');
                $item.css({
                    'animation-duration': duration,
                    '-webkit-animation-duration': duration,
                    '-ms-animation-duration': duration,
                    '-woz-animation-duration': duration
                });
            }
            /*iteration*/
            if ($item.attr('ani-iteration')) {
                var iterationCount = $item.attr('ani-iteration');
                $item.css({
                    'animation-iteration-count': iterationCount,
                    '-webkit-animate-iteration-count': iterationCount,
                    '-ms-animate-iteration-count': iterationCount,
                    '-woz-animate-iteration-count': iterationCount
                });
            }

            $item.removeClass('ani-auto');

            /*restart trigger the animation*/
            $item.css('animation-name', 'this_is_an_unavailable_animation_name_to_trigger_animate_refresh');
            setTimeout(function () {
                $item.addClass('animated');
                $item.css('animation-name', '');
            }, 1);


            /*scroll*/
            if (undefined != $item.attr('ani-scroll')) {
                var offset = $item.attr('ani-scroll-offset');

                if (offset) {
                    if (offset.indexOf('%')) {
                        offset = parseFloat(offset);
                        if (offset.toString() == 'NaN') {
                            offset = 0;
                        } else {
                            offset = offset / 100 * $('body').height()
                        }
                    } else {
                        offset = parseFloat(offset);
                        if (offset.toString() == 'NaN') {
                            offset = 0;
                        } else {
                            offset = offset / 100 * $('body').height()
                        }
                    }
                } else {
                    offset = 0;
                }

                $item.one('webkitAnimationStart mozAnimationStart MSAnimationStart oanimationStart animationStart', function (e) {
                    if ($(e.currentTarget).hasClass('animated')) {
                        var top = $item.offset().top + offset;
                        $('body,html').animate({scrollTop: top});
                    }
                });

            }


            if (undefined != $item.attr('ani-start')) {
                var host = (options && options.methods) || window,
                    mName = $item.attr('ani-start');
                $item.one('webkitAnimationStart mozAnimationStart MSAnimationStart oanimationStart animationStart', function (e) {
                    var method = host[mName];
                    method && method($(this));
                });
            }

            if (undefined != $item.attr('ani-end')) {
                var host = (options && options.methods) || window,
                    mName = $item.attr('ani-end');
                $item.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                    var method = host[mName];
                    method && method($(this));
                });
            }

        }

        /*trigger*/
        if ($item.attr('ani-trigger')) {
            var triggerSelector = $item.attr('ani-trigger');
            $(triggerSelector).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                if (!$item.hasClass('animated') && $(e.currentTarget).hasClass('animated')) {
                    runItemAni();
                }
            });
        } else {
            runItemAni();
        }

    }

    /*api*/

    /**
     * @param dom parentDom 范围容器节点
     */
    $.aniAuto = function (dom, options) {
        var autoAniItems = $('.ani-auto', dom && $(dom));
        $.each(autoAniItems, function (index, item) {
            autoAni(item, options);
        });
    }

})(jQuery);
