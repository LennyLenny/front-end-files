window.onload = function(){
	document.body.bgColor = "#000";
	window.setInterval("start2()",1000);
}

function start2(){
	var oImg = document.createElement('img');
	oImg.setAttribute('src','mango.jpg');
	document.body.appendChild(oImg);
	var picWidth = getRandom(15,85);

	oImg.setAttribute('width',picWidth);
	
	var winHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight;
	var winWidth = window.inneWidth ? window.innerWidth : document.documentElement.clientWidth;
	var x = getRandom(0,winWidth);
	var y = getRandom(0,winHeight);
	oImg.setAttribute("style","position:absolute;left:"+x+"px;top:"+y+"px");
}

	function getRandom (min,max){
		var random = Math.random()*(max-min)+min;
		random = Math.floor(random);
		return random;
		
	}
