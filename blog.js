
/*
JS
NAME: Blog Project
AUTHOR:By Celal GEZER
DATE:09.05.2023
VERSION:v.1
*/
darkMode=()=>{
    let darkButton=document.body.classList.toggle("dark_mode_classlist")
}
$(function(){
const searchData=["Adıyaman","Bandırma","Cize","Diyarbakır","Erdemli","Mardin"];
$("#tags").autocomplete({
    source:searchData
});
}
);