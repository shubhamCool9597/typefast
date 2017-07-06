$(document).ready(function(){
// $('#searchText').typefast({
// urlstart:"https://en.wikipedia.org/w/api.php?action=opensearch&search=",
// urlend:"&format=json&callback=?",
// textHighlight:true,
// mouseEvent:true,
// keyboardEvent:true,
// autocomplete:true
// });

$('#searchText').typefast({
urlstart:"http://35.154.56.172/api/project-search/Gurgaon/",
urlend:"/Flats",
mouseEvent:true,
keyboardEvent:true,
autocomplete:true,
textHighlight:true,
keyArr:['data'],
key:'name'
});
})
