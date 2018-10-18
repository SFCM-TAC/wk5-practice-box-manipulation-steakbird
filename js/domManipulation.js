function changeBoxColors(color){
//     switch('color'){
// case "red":
//     redBox = document.querySelector('#boxes'), i=redBox.length;
//     while(i--)
//     redBox.style.backgroundColor ="red";
//     console.log('red click');
//     break;
// case "blue":
// var blue = document.querySelector('#boxes').style.backgroundColor = 'blue';
//     break;
// case "yellow":
// var yellow = document.querySelector('#boxes').style.backgroundColor = 'yellow';
//     break;
// }
// }
var red = document.getElementsByClassName("box");
//     while (i--) {
//         boxes[i].style.color = "red";
//         }
// var color = red;
//     changeBoxColors(red);
//     console.log('clicked');
for (var i = 0; i < red.length; i++ ){
    red[i].style.backgroundColor = red;
}
}
// function changeBoxColors(color) {
// switch(color) {
// case "red":
//     document.getElementById('boxes').style.backgroundColor = "red";
//     break;
// case "blue":
// document.getElementById('boxes').style.backgroundColor = "blue";
//     break;
// case "yellow":
// document.getElementById('boxes').style.backgroundColor = "yellow";
//     }
// default "gray":
//     document.getElementsByClassName('box').style.backgroundColor = "gray";
// changeBoxColors();
// }

//   console.log('Selected color: ' + color);


//   // TODO: Look at styles.css and choose a class
//   // to apply to all of the box elements in order
//   // to change their background color
//   // possible values of color are: 'red', 'blue', 'yellow'
//   // (consider using a switch statement!)
// }
//
//

function addBox() {
  //console.log('This will eventually add a new box, but for now, this message will suffice.');
  var boxList = document.querySelector('#boxes');
var newBox = document.createElement("div");
newBox.setAttribute('class', 'box gray');
boxList.appendChild(newBox);
console.log('And another one!');

}

//


function removeSelectedBoxes() {
var boxList = document.querySelector('#boxes');
var firstBox = boxList.firstElementChild;
boxList.removeChild(firstBox);
console.log('bye Boxy!');

}


//   // TODO: looke at styles.css and choose a class (or multiple classes)
//   // to apply in order to add a border around selected boxes or
//   // remove a border from deselected boxes
// }
//
function handleColorSelect(event) {

  changeBoxColors(event.target.id);
}
//
function attachListeners() {
  document.querySelectorAll('.box').forEach(function(box){
    box.addEventListener('click', handleBoxClick);
  });
  document.querySelectorAll('.color-selector').forEach(function(color){
    color.addEventListener('click', handleColorSelect);
  });
  document.querySelector('#addButton').addEventListener('click', addBox);
  document.querySelector('#removeButton').addEventListener('click', removeSelectedBoxes);
}
document.addEventListener("DOMContentLoaded", attachListeners);
