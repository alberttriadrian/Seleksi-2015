
function load() {
	var mydata = JSON.parse(data);
	document.write(mydata[0].name);
	document.write(mydata[0].age);
}
