
/*function load() {
	var mydata = JSON.parse(data);
	document.write(mydata[0].name);
	document.write(mydata[0].age);
	
}*/

function load() {
	var mydata = JSON.parse(data);
	
	var text = "";
	var i;
	for (i = 0; i < mydata.length; i++) { 
		text += mydata[i].name + "<br>";
	}	
	document.getElementById("demo").innerHTML = text;

}

