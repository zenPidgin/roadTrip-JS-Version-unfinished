// random image header background
alert("Hello!");
console.log("document is ready");
var counter = 1;

setInterval(switchImg(counter),2000);

function switchImg(counter){
	console.log("switch called");
	if(counter =< 9){
		$("#header").addclass("header"+counter);
		counter += 1;
	}
}
