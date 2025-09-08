// learning how to manipulate the DOM using JavaScript.

// 1. Selecting Elements
const header = document.getElementById('header');
const items = document.getElementsByClassName('item');
const paragraphs = document.getElementsByTagName('p');
const firstItem = document.querySelector('.item');
const allItems = document.querySelectorAll('.item');
const list = document.querySelector('#list');
const listItems = list.querySelectorAll('.item');

// 2. Changing innerHTML
header.innerHTML = 'Updated Header';
items[0].innerHTML = 'First Item Updated';
paragraphs[1].innerHTML = 'Second Paragraph Updated';
firstItem.innerHTML = 'First Item via QuerySelector';
allItems.forEach((item, index) => {
    item.innerHTML = `Item ${index + 1} Updated`;
});
listItems.forEach((item, index) => {
    item.innerHTML = `List Item ${index + 1} Updated`;
});

// 3. Changing Styles
header.style.color = 'blue';
items[1].style.backgroundColor = 'lightgray';
paragraphs[0].style.fontSize = '20px';
firstItem.style.border = '2px solid black';
allItems.forEach(item => {
    item.style.padding = '10px';
});
listItems.forEach(item => {
    item.style.margin = '5px 0';
});
article.style.fontFamily = 'Arial, sans-serif';
article.style.lineHeight = '1.6';
article.style.textAlign = 'justify';
article.style.backgroundColor = '#f9f9f9';
article.style.padding = '15px';
article.style.borderRadius = '8px';

// 4. Creating and Appending Elements
const newItem = document.createElement('div');
newItem.className = 'item';
newItem.innerHTML = 'Newly Created Item';
// Appending the new item to the list
list.appendChild(newItem);

// Creating and appending a new paragraph to the article
const newParagraph = document.createElement('p');
newParagraph.innerHTML = 'This is a newly created paragraph.';
// Appending the new paragraph to the article
article.appendChild(newParagraph);