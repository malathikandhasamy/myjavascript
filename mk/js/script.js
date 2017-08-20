var $num = document.querySelector('.form-control .form-form1:nth-child(1)');
console.log($num);
var $output=document.querySelector('.form-control .form-form1:nth-child(2)');
var $button=document.querySelector('.buttonclick button');
$button.addEventListener('click',otpNumber);
function otpNumber()
{
	var s=$num.value;
	console.log(s);
	var num=[s.split("")];
	console.log(num);
	console.log(num.length);
	
//var max=0;
//console.log(s.length);
/*for(var i=0;i<s.length;i++)
{
	console.log(s[i]);
	if(s[i]>=max)
	{
		s[i]=max;
	}
	console.log(s[i]);
}*/
console.log("hello");
}
