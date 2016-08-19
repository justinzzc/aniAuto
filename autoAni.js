(function ($){

  function autoAni(item) {
        var delay = 0, duration = null;
        var $item = $(item);

        function runItemAni() {
        //delay
            if ($item.attr('ani-delay')) {
                delay = parseInt($item.attr('ani-delay'));
                $item.css({
                    'animation-delay': delay + 'ms',
                    '-webkit-animation-delay': delay + 'ms',
                    '-ms-animation-delay': delay + 'ms',
                    '-woz-animation-delay': delay + 'ms'
                });
            }
        //duration
            if ($item.attr('ani-duration')) {
                duration = parseInt($item.attr('ani-duration'));
                $item.css({
                    'animation-duration': duration + 'ms',
                    '-webkit-animation-duration': duration + 'ms',
                    '-ms-animation-duration': duration + 'ms',
                    '-woz-animation-duration': duration + 'ms'
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

            $item.addClass('animated');

            $item.removeClass('ani-auto');

        //scroll
            if ($item.hasClass('ani-scroll')) {
                var offset = $item.attr('ani-scroll-offset');

                if (offset) {
                    if (offset.indexOf('%')) {
                        offset = parseFloat(offset);
                        if (offset.toString() == 'NaN') {
                            offset = 0;
                        } else {
                            offset = offset / 100 * $('body').height()
                        }
                    }else{
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
        if ($item.attr('ani-trigger')) {
            var triggerSelector = $item.attr('ani-trigger');
            $(triggerSelector).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                if(!$item.hasClass('animated')){
                    runItemAni();
                }
            });
        } else {
            runItemAni();
        }

        //console.log('[' + $item.attr('id') + ']==>delay:' + delay);
    }
    
    //api
    
    $.autoAni=function (dom){
      var autoAniItems = $('.ani-auto',dom && $(dom));
      $.each(autoAniItems, function (index, item) {
          autoAni(item);
      });
    }
    
})(jQuery);
