const headers = document.getElementsByTagName("h2"); //not an array, more of a container holding all dom elements
const list = document.getElementsByClassName("item");
const button = document.getElementById("submit"); //gets only a single element

console.log(headers[0]);
console.log(list.length);

//QuerySelector allows us to use CSS selectors
const header = document.querySelector('h2'); //will only return a single element
const headers3 = document.querySelectorAll('h2'); //will only all elements
const list2 = document.querySelector('.item'); //Returns first element of class list 

const list3 = document.querySelector('h2.item'); //selects first h2 element with item class
const list4 = document.querySelector('#list a');

console.log(headers);

//Node: any kind of building block in the html document
//Node list: can hold different types of nodes, mostly text, comment, and element nodes
//HTML list: can only hold element nodes 
//getElementsby... always creates an HTML collection , while querySelector creates a node list
//cannot create a for loop over an HTML collection 

//Can dynamially add elements to an HTML collection
const collectionItems = document.getElementsByClassName("item");
const newItem = document.createElement('li');
newItem.classList.add('item');
newItem.innerText = 'Item 3';

const todoList = document.getElementById('todo-list');
todoList.appendChild(newItem);

//update amount of items that we have 
const todoNr = document.getElementsByClassName('todo-nr')[0];
todoNr.innerText= collectionItems.length;

//QuerySelector will not automatically update itself like the HTML collection does
//can convert QuerySelector to dynamic as well by using the .children of the Node list 