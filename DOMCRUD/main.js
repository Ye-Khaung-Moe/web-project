//<div> Welcome to Myanmar <div>


// C = Create 
const h1Element = document.createElement('h1');
const textNode = document.createTextNode('Welcome to Yangon');

h1Element.appendChild(textNode);

const tagCollection = document.getElementsByTagName('body'); //htmlCollection 

const bodyElement = tagCollection[0]

bodyElement.appendChild(h1Element)

// R = read 
const readH1Element = document.getElementsByTagName('h1')[0];
console.log('Text inside h1 element is:', readH1Element.textContent)


// U = Update 
readH1Element.textContent = "Welcome to Mandalay";
console.log('Text inside h1 element after is:', readH1Element.textContent);

// D = Delete 
readH1Element.remove();

