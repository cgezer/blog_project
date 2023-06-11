
/*
JS
NAME: Blog Project
AUTHOR:By Celal GEZER
DATE:09.05.2023
VERSION:v.1
*/
/* DARK MODE*/
darkMode=()=>{
    let darkButton=document.body.classList.toggle("dark_mode_classlist")
}
/* SEARCH*/
$(function(){
const searchData=["Adıyaman","Bandırma","Cize","Diyarbakır","Erdemli","Mardin"];
$("#tags").autocomplete({
    source:searchData
});
}
);

/* BACK TOP */
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $("#back_top").fadeIn('slow');
        }else{
            $("#back_top").fadeOut('slow');
        }
    });
    $("#back_top").click(function(){
        $("html, body").animate({scrollTop:0},90,'easeInOutExpo');
        return false;
    })
});