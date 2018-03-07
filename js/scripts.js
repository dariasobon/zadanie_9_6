
var list = document.getElementById('list');  //choose ul element
var add = document.getElementById('addElem');//choose button

add.addEventListener('click',function () { 
var liElements = list.getElementsByTagName('li'); 
var element = document.createElement('li'); 
element.innerHTML= "item " + liElements.length; 
list.appendChild(element); 
}); 