$(function(){

    $(".header_inner nav ul li.switch a").on("click", function(){
        $("body").toggleClass("switchMode");
        Event.preventDefault;
    });

});