

//extracting object through grabing
function dragpoint(event) {
    event.dataTransfer.setData("Text", event.target.id);
}
//droping the object 
function droppoint(event) {
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    event.preventDefault();
}
//allow object to drag
function allowDropOption(event) {
    event.preventDefault();
}
