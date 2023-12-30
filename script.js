const gridContainer = document.querySelector('.grid');

const slider = document.querySelector('#slider')

const sliderValue = document.querySelector('#sliderValue')

const clearBtn = document.querySelector('#clear')

const rainbowBtn = document.querySelector('#rainbow')

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
let rainbowMode = false;
document.addEventListener('mousedown', ()=> {
  isMouseDown = true;
});

document.addEventListener('mouseup', ()=> {
    isMouseDown = false;
  });


gridContainer.addEventListener('mousemove', (e) => {
  const rainbowFunct = () => {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    return `rgb(${R}, ${G}, ${B})`;
  };
  if (isMouseDown) {
    let target = e.target;
    if (target.classList.contains('grid-div')) {
      if (rainbowMode) {
        target.style.backgroundColor = rainbowFunct();
      } else {
        target.style.backgroundColor = document.getElementById("colorPicker").value;
      }
    }
  }
});

slider.addEventListener('input', (e)=>{
  clearGrid();
  addGrid(e.target.value)
  sliderValue.textContent = e.target.value
} )

clearBtn.addEventListener('click', ()=> {
  let grid = document.querySelectorAll(".grid-div"); 
  grid.forEach((div) => {
    div.style.backgroundColor = 'white';
  })
})

rainbowBtn.addEventListener('click', ()=> {
  if (rainbowMode){
    rainbowMode = false;
    rainbowBtn.classList.remove("pressed");
  } else{
    rainbowMode = true;
    rainbowBtn.classList.toggle("pressed");
  }
})

//prevents div crawling by holding down
gridContainer.addEventListener('dragstart', (e) => {
  e.preventDefault();
});

