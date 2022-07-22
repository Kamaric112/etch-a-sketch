const container = document.querySelector('.container')
let row
let squares
let randomise = "no"
let bgColor ="red"


function createGrid (num) {
    const widthAndHeight = 500; //Width and Height of grid Container
    const pixelSquare = (widthAndHeight/num)+'px'

    for (let i = 0 ; i < num ; i++) {
         row = document.createElement('div')
        for (let j = 0 ; j < num ;j++) {
            let squares = document.createElement('div')
            squares.setAttribute("class","box")
            row.appendChild(squares)
            //set grid style
            squares.style.height=pixelSquare
            squares.style.width=pixelSquare
            squares.style.margin = '0px'
            squares.style.border ='1px solid rgba(179,179,179,1)'
            squares.style.boxSizing = 'border-box'
        }
        container.appendChild(row)
    }
}

function userinput() {
    let x = prompt("ENTER GRID SIZE BELOW 100")
    if (0 < x && x <= 100) {
        createGrid(x)
    } else if (typeof(x)==="string" || x > 100){
        return prompt("ERROR! RETURN GRID SIZE AS NUMBER AND BELOW 100")
    }
//     else if (x > 100) {
//         return prompt("ERROR! RETURN GRID SIZE BELOW 100")
//     }
 }

userinput()

//CHANGE COLOR WHEN HOLDING DOWN MOUSE (NOT HOVERING)
document.addEventListener("mousedown", applyColor)
document.addEventListener("mouseup", stopColor)

// randomize color or default color - red
function applyColor() {
    const color = document.querySelectorAll(".box")
    color.forEach((div) => {
        div.addEventListener("mousemove",function(e){
            if (randomise ==="no") {
                this.style.backgroundColor=`${bgColor}`
            }
            else {
                let o = Math.round, r = Math.random, s = 255;
                this.style.backgroundColor='rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')'
            }
        })
})}

function stopColor() {
    const divs = document.querySelectorAll(".box");
    divs.forEach((div) => {
      div.replaceWith(div.cloneNode(true));
    })
}

// RESET BACKGROUND COLOURS

const resetBackgrounds = () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((div) => {
    div.style.backgroundColor="white"
    })
}

//EVENT LISTENER
const BTN_CLEAR_GRID =document.getElementById("clear")
BTN_CLEAR_GRID.addEventListener("click",() => resetBackgrounds())

const BTH_RANDOM = document.querySelector('#random')
BTN_RANDOM=addEventListener("click",function(){
    (randomise = `${randomise === "yes" ? "no" : "yes"}`)
})

const BTN_INPUT_GRID = document.getElementById("inputgrid");
BTN_INPUT_GRID.addEventListener("click", function(){
    window.location.reload()
})
