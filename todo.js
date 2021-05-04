var button = document.getElementById("addbutton");
var input = document.getElementById("Items");
var unorderlist= document.getElementById("unorderlist");


button.addEventListener("click", function(){
let paragraph= document.createElement('P');
paragraph.innerText= Items.value;
paragraph.classList="para"
unorderlist.appendChild(paragraph);

Items.value=""

paragraph.addEventListener("click",function(){
	paragraph.style.textDecoration="line-through";
})
paragraph.addEventListener("dblclick",function(){
unorderlist.removeChild(paragraph);
	
})
	 
});