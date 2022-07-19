const container = document.querySelector('.container')

function makeRow(rowNum) {
    for (let i = 0 ; i < rowNum ; i++) {
        let div = document.createElement('div')
        for (let j = 0 ; j < rowNum; j++) {
            let square = document.createElement('div')
            square.setAttribute("class","box")
            div.append(square)
        }
        container.appendChild(div);
    }

} makeRow(4) 