const container = document.querySelector('.container')

function test (num) {
    const widthAndHeight = 350; //Width and Height of grid Container
    const pixelSquare = (widthAndHeight/num)+'px';


    for (let i = 0 ; i < num ; i++) {
        let row = document.createElement('div')
        for (let j = 0 ; j < num ;j++) {
            let squares = document.createElement('div')
            squares.setAttribute("class","box")
            row.appendChild(squares)
            container.appendChild(row)
            squares.style.height=pixelSquare
            squares.style.width=pixelSquare
            squares.style.margin = '0px';
            squares.style.border ='1px solid rgba(179,179,179,1)';
            squares.style.boxSizing = 'border-box';


            // mouse enter event listener
            // squares.addEventListener("mouseenter",function() {
            //     squares.style.backgroundColor="red"
            // })
            // squares.addEventListener("mouseleave",function(e) {
            //     squares.style.backgroundColor = 'white'
            // })
        }
        
        
    }
}
test(4)


// const btn = document.querySelector('#refresh')
// btn.addEventListener('click',   )


// // function userinput() {
// //     // let x = prompt("enter grid size")
// //     let x = 5
// //     console.log(x)
// //     test(x)
// // }

// // function reload() {
// //     test(16)

// // }


function createGridSquares(pixel) {
    const widthAndHeight = 350; //Width and Height of grid Container
    const pixelSquare = (widthAndHeight/pixel)+'px';
    const totalPixels = pixel*pixel;
    for (let i = 1; i <= totalPixels; i++) {
        let innerD = document.createElement('div');
        innerD.classList.add('innerDivs');
        container.appendChild(innerD);
        innerD.style.backgroundColor = '#cbcfc2';
        innerD.style.height = pixelSquare;
        innerD.style.width = pixelSquare;
        innerD.style.margin = '0px';
        innerD.style.border ='1px solid rgba(179,179,179,1)';
        innerD.style.boxSizing = 'border-box';
    }
}
// createGridSquares(16)