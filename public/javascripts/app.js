

(function (fn, $) {
    $(document).ready(function () {
        var main = fn();
        if (location.href.indexOf('about') > -1) {
            main.about();
        }
    });

}(main, jQuery))



function main() {
    function about() {
        jQuery('.skillbar').each(function (i,e) {
            jQuery(e).find('.skillbar-bar').animate({
                width: jQuery(e).attr('data-percent')
            }, 6000);
        });
    }


    return {
        about: about
    }
}