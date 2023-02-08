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

var titles = document.querySelector('.title');

console.log(titles);

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = '#f4f4f4'
}

