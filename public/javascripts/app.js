

(function (fn, $) {
    $(document).ready(function () {
        var main = fn();
        main.initCurrentPage()
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
    function initCurrentPage(){
        var location = window.location.href;
        if(location.indexOf('about') > -1){
            $('.mdl-navigation__link').removeClass('is-active'); 
            $('.mdl-navigation__link:contains(About)').addClass('is-active');
        }else if(location.indexOf('contact') > -1){
            $('.mdl-navigation__link').removeClass('is-active'); 
            $('.mdl-navigation__link:contains(Contact)').addClass('is-active'); 
        }else{
            $('.mdl-navigation__link').removeClass('is-active'); 
            $('.mdl-navigation__link:contains(Portfolio)').addClass('is-active');  
        }
        console.log(location)
    }


    return {
        about: about,
        initCurrentPage: initCurrentPage
    }
}