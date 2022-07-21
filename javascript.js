const container = document.querySelector('.container')
let row = document.createElement('div')

function test (num) {
    const widthAndHeight = 350; //Width and Height of grid Container
    const pixelSquare = (widthAndHeight/num)+'px';


    for (let i = 0 ; i < num ; i++) {
         row = document.createElement('div')
        for (let j = 0 ; j < num ;j++) {
            let squares = document.createElement('div')
            squares.setAttribute("class","box")
            row.appendChild(squares)
            squares.style.height=pixelSquare
            squares.style.width=pixelSquare
            squares.style.margin = '0px'
            squares.style.border ='1px solid rgba(179,179,179,1)'
            squares.style.boxSizing = 'border-box'


            // mouse enter event listener
            squares.addEventListener("mouseenter",function() {
                squares.style.backgroundColor="red"
            })
            // squares.addEventListener("mouseleave",function() {
            //     squares.style.backgroundColor = 'white'
            // })
        }
        container.appendChild(row)

    }
}


const btn = document.querySelector('#refresh')
btn.addEventListener('click', userinput)

// test(16)

function userinput() {
    let x = prompt("enter grid size")
    console.log(x)
    test(x)
}

const deleteBoxes = (num) => {
    const boxes = document.querySelectorAll(".box")
    boxes.forEach((div) => {
      row.removeChild(div)
    });
  };


const resetBackgrounds = () => {
const boxes = document.querySelectorAll(".box")
boxes.forEach((div) => {
    div.removeAttribute("style")
})
}

 const resetGrid = () => {
    deleteBoxes();
    num = 16;
    test(num);
};

      const BTN_RESET_GRID = document.getElementById("removecolor");6


    //   BTN_RESET_GRID.addEventListener("click", () => resetGrid());
    BTN_RESET_GRID.addEventListener("click", function(){
        window.location.reload()
    })

userinput()