//Query Selector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'sold 4px #ccc'

// var input=document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color =  'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'pink';


//Query Selector All

// var titles = document.querySelector('.title');

// console.log(titles);

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = '#f4f4f4'
// }

var itemList = document.querySelector('#items');
// parentnode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// //childNodes
// console.log(itemList.childNodes);   

// //childNodes
// console.log(itemList.children);
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor = 'yellow';

// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.backgroundColor = 'pink';

//Creating a div
var newDiv = document.createElement('div');

// Add a class
newDiv.className = 'hello';

// Add ID
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to Div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);
