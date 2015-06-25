var input = ["Adaro Indonesia, PT","Allied Indo Coal, PT","Antang Gunung Meratus, PT","Arutmin Indonesia, PT"];

function load() {
	var mycoal = JSON.parse(coal_export);
	
	var text = "";
	var i;
	for (i = 0; i < mycoal.length; i++) {
		var j; 
		for (j = 0; j < input.length; j++ ){
			if (mycoal[i].nama_entitas == input[j]){
				text += mycoal[i].nama_entitas + "<br>";					
			}
		}

	}	
	document.getElementById("demo").innerHTML = text;

}
