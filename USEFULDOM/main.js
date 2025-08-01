// Useful DOM method and properties

const bodyElement = document.getElementsByTagName("body")[0];
/*
const parentDiv = document.getElementsByClassName('parent')[0];
//parentDiv.innerHTML = '';

const DivId = document.getElementById('myid');
console.log('divwithid', DivId)

    <div class="parent">
        <div class="child">Child One</div>
        <div class="child">Chile Two</div>
    </div>
*/

const parentDiv = document.createElement("div");
parentDiv.classList.add('parent', 'testClass');
parentDiv.classList.remove('testClass');

const ChildDivOne = document.createElement("div");
ChildDivOne.classList.add('child');
ChildDivOne.append('childone');

const ChildDivTwo = document.createElement("div");
ChildDivTwo.classList.add('child');
ChildDivTwo.append('childtwo');

parentDiv.append(ChildDivOne, ChildDivTwo);

bodyElement.appendChild(parentDiv);

const styleTestDiv = document.getElementsByClassName('styleTest')[0];
console.log("Height", getComputedStyle(styleTestDiv).width);
console.log("color", getComputedStyle(styleTestDiv).backgroundColor);
