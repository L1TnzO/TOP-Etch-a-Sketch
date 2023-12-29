const gridContainer = document.querySelector('.grid');

const slider = document.querySelector('#slider')

//create elements
const gridDiv = document.createElement('div');
gridDiv.classList.add('grid-div');

const stackDiv = document.createElement('div')//a div that contains grid squares
stackDiv.classList.add('stack-div');

const addGrid = (n) => {
    for (let i = 0; i < n; i++) {
        const clonStack = stackDiv.cloneNode(true);

        for (let j = 0; j < n; j++) {
            const clonGrid = gridDiv.cloneNode(true);
            clonStack.appendChild(clonGrid);
        }

        gridContainer.appendChild(clonStack);
    }
}

const clearGrid = () => {
  while(gridContainer.firstChild){
    gridContainer.removeChild(gridContainer.firstChild);
  } 
}

addGrid(10);

let isMouseDown = false;

document.addEventListener('mousedown', ()=> {
  isMouseDown = true;
});

document.addEventListener('mouseup', ()=> {
    isMouseDown = false;
  });


document.addEventListener('mousemove', (e)=> {
    if (isMouseDown) {
      let target = e.target;
      console.log(target.tagName)
      if (target.classList.contains('grid-div')) {
        target.style.backgroundColor = document.getElementById("colorPicker").value;
      }
    }
  });

slider.addEventListener('input', (e)=>{
  clearGrid();
  addGrid(e.target.value)
} )

