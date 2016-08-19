(function ($) {


    function autoAni(item) {
        var delay = 0, duration = null;
        var $item = $(item);

        //init hide
        var  initHide=(undefined != $item.attr('ani-init-hide'));
        if(initHide){
            $item.hide();
        }

        function runItemAni() {
            if(initHide){
                $item.show();
            }

            //delay
            if ($item.attr('ani-delay')) {
                delay = $item.attr('ani-delay');
                $item.css({
                    'animation-delay': delay,
                    '-webkit-animation-delay': delay,
                    '-ms-animation-delay': delay,
                    '-woz-animation-delay': delay
                });
            }
            //duration
            if ($item.attr('ani-duration')) {
                duration = $item.attr('ani-duration');
                $item.css({
                    'animation-duration': duration,
                    '-webkit-animation-duration': duration,
                    '-ms-animation-duration': duration,
                    '-woz-animation-duration': duration
                });
            }
            //iteration
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

            //restart trigger the animation
            $item.css('animation-name','this_is_an_unavailable_animation_name_to_trigger_animate_refresh');
            setTimeout(function(){
                $item.addClass('animated');
                $item.css('animation-name','');
            },1);



            //scroll
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


                var top = $item.offset().top + offset;

                $('body,html').animate({scrollTop: top});
                //console.log('[' + $item.attr('id') + ']==>top:' + top);
            }

        }

        //trigger
        if ( $item.attr('ani-trigger')) {
            var triggerSelector = $item.attr('ani-trigger');
            $(triggerSelector).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                if ($(e.currentTarget).hasClass('animated')) {
                    runItemAni();
                }
            });
        } else {
            runItemAni();
        }

        //console.log('[' + $item.attr('id') + ']==>delay:' + delay);
    }

    //api

    $.aniAuto = function (dom) {
        var autoAniItems = $('.ani-auto', dom && $(dom));
        $.each(autoAniItems, function (index, item) {
            autoAni(item);
        });
    }

})(jQuery);
