window.onload = function(){
var data = [
	{id:1 ,username:"Lenny",sex:"男"},
	{id:2 ,username:"Jenny",sex:"女"},
	{id:3 ,username:"Heidi",sex:"女"},
	{id:4 ,username:"Sid",sex:"男"}

];


var oTab = document.getElementById('table');
var oTbody = document.getElementById('tablebody');

	for(var i=0;i<data.length;i++){
		var oTr = document.createElement('tr');
		var oTd = document.createElement('td');
		oTd.innerHTML = data[i].id;
		oTbody.appendChild(oTr);
		oTr.appendChild(oTd);



		var oTd = document.createElement('td');
		oTd.innerHTML = data[i].username;
		oTr.appendChild(oTd);
		oTbody.appendChild(oTr);


		

		
	}


}