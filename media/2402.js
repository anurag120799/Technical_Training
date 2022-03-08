addEventListener("keydown", fkeydown);
function fkeydown(event){
    //console.log(event);
    console.log(event.keycode);
    console.log(event.ctrlKey);
    console.log(String.fromCharCode(event.keycode));
    document.body.style.background="lightgreen";
}