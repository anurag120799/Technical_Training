var xhr_1=new XMLHttpRequest();
var url_1="https://api.chucknorris.io/jokes/random"
xhr_1.onreadystatechange=function(){
    console.log(xhr_1.responseText);
    var str_1=xhr_1.responseText;
    var obj_1=JSON.parse(str_1);
    output.innerHTML=
    console.log(obj_1);
}