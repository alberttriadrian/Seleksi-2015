function load() {
	var mycoal = JSON.parse(coal_export);
	
	var text = "";
	var i;
	for (i = 0; i < mycoal.length; i++) { 
		text += mycoal[i].nama_entitas + "<br>";
	}	
	document.getElementById("demo").innerHTML = text;

}
