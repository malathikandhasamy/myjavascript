var num=document.querySelector('.forms:nth-child(1)');
var output=document.querySelector('.forms:nth-child(2)');
var butt=document.querySelector('.button1');
butt.addEventListener('click',reverse);
function reverse()
{
    var s=num.value;
    var result=s.split("").reverse().join("");
    output.value=result;
}

