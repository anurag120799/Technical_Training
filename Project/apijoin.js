//XHR is a process to integrate API in the form of
// an Object - It is Method
//XHR: XML HttpRequest
var xhr_1=new XMLHttpRequest();
console.log(xhr_1);
//To get User Input Two Methods are there POST & GET
var url_1="https://api.chucknorris.io/jokes/random"
xhr_1.onreadystatechange=function(){
    console.log(xhr_1.readyState);
}
if(xhr_1.readySTate ==4 && xhr_1.status==200){
    console.log(xhr_1.responseText);
    var str_1=xhr_1.responseText;
    var obj_1=JSON.parse(str_1);
    console.log(obj_1);
}

xhr_1.open("GET",url_1);
xhr_1.send();
console.log(xhr_1);