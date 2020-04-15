$(document).ready(function(){

$(".item-list2 a").on("mouseenter",function(e){
    var miPerk = $(e.currentTarget).attr('class');
    console.log(miPerk);  

    if(miPerk=="strenght")
    {
        $("#strenght").css({
            "display":"block"
        });
    }
    else{ $("#strenght").css({"display":"none"}); }

    if(miPerk=="killshot")
    {
        $("#killshot").css({
            "display":"block"
        });
    }
    else{ $("#killshot").css({"display":"none"}); }

    if(miPerk=="carisma")
    {
        $("#carisma").css({
            "display":"block"
        });
    }
    else{ $("#carisma").css({"display":"none"}); }

    if(miPerk=="hacker")
    {
        $("#hacker").css({
            "display":"block"
        });
    }
    else{ $("#hacker").css({"display":"none"}); }

    if(miPerk=="seller")
    {
        $("#seller").css({
            "display":"block"
        });
    }
    else{ $("#seller").css({"display":"none"}); }

})



})