

function dragIt(event) {
	event.dataTransfer.setData("text", event.target.id);
}

function dropIt(event) {
	var theData = event.dataTransfer.getData("text");
	var theDraggedElement = document.getElementById(theData);
	event.target.appendChild(theDraggedElement);
	event.preventDefault();
}