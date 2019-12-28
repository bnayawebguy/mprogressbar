(function($) {
    "use strict";
    $.fn.mprogressbar = function(opt) {

        var options = $.extend({
            pbar_height: 30,
            pbar_margin: 40,
            pbar_color: '#eeeeee',
            pbar_border_size: 0,
            pbar_border_color: '#eeeeee',
            pbar_border_radius: 0,

            pgress_height: 30,
            pgress_width: 50,
            pgress_color: '#e55039',
            pgress_border_size: 0,
            pgress_border_color: '#e55039',
            pgress_border_radius: 0,
            title: 'Progress Counter',
            show_title: true,
            title_color: '#ffffff',
            title_size: 14,
            title_display: 'inside', // inside, outside
            duration: 1500,

            show_counter: true,
            counter_display: 'inside', // inside, outside, intact
            counter_size: 12,
            counter_padding: 0,
            counter_bgcolor: 'unset',
            counter_color: '#e55039',
            counter_border_radius: 0,
        }, opt);

        $.each(this, function(index, el) {
            var progressbar = $(el);
            var coptions = $(el).data();
            var eoptions = $.extend(options, coptions);

            if(eoptions.counter_display == 'inside' || eoptions.counter_display == 'outside') {
                $(el).append('<span class="title"></span><div class="progress"></div><span class="counter"></span>');
            } else {
                $(el).append('<span class="title"></span><div class="progress"><span class="counter"></span></div>');
            }

            var progress = progressbar.find('.progress');
            var counter = progressbar.find('.counter');
            var title = progressbar.find('.title');
            $(el).addClass('progressbar');

            $.fn.appyStyles(progressbar, progress, counter, title, eoptions);
        });
    };

    $.fn.appyStyles = function(progressbar, progress, counter, title, eoptions) {
        /** Progress Bar Styles **/
        progressbar.css({
            height: eoptions.pbar_height,
            backgroundColor: eoptions.pbar_color,
            borderWidth: eoptions.pbar_border_size,
            borderColor: eoptions.pbar_border_color,
            borderRadius: eoptions.pbar_border_radius,
            marginTop: eoptions.pbar_margin,
            marginBottom: eoptions.pbar_margin,
        });

        /** Progress Styles **/
        progress.css({
            height: eoptions.pgress_height,
            backgroundColor: eoptions.pgress_color,
            borderWidth: eoptions.pgress_border_size,
            borderColor: eoptions.pgress_border_color,
            borderRadius: eoptions.pgress_border_radius,
        });

        /** Title Styles **/
        if(eoptions.show_title == true) {
            title.text(eoptions.title);

            title.css({
                color: eoptions.title_color,
                fontSize: eoptions.title_size,
            });
            title.addClass(eoptions.title_display);
        }

        /** Progress Animation **/
        if(eoptions.show_counter == true) {
            counter.addClass(eoptions.counter_display);

            /** Counter Styles **/
            counter.css({
                color: eoptions.counter_color,
                fontSize: eoptions.counter_size,
                backgroundColor: eoptions.counter_bgcolor,
                padding: eoptions.counter_padding,
                borderRadius: eoptions.counter_border_radius
            });

            /** Progress Animation **/
            progress.animate({
                width: eoptions.pgress_width + "%",
            },
            {
                step: function(x) {
                    if(eoptions.show_counter == true) {
                        counter.text(Math.round(x) + "%");
                    }
                },
                duration: eoptions.duration
            });
        }
    }

})(jQuery);