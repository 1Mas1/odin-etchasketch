


function createGrid(gridSize) {
    const total = (gridSize * gridSize) + gridSize;
    const endRow = gridSize + 1;
    const grid = document.querySelector('.grid-container');
    var divArray = new Array();

    for (var i = 0; i < total; i++) 
    {
        divArray[i] = document.createElement('div');
        divArray[i].className = 'grid' + i;
        if (i % endRow === 0 ){
            divArray[i].style.cssText = 'border: 0; height 0; width: 100%;';
        } else {
            divArray[i].style.cssText = 'border:1px solid black; height:25px; width: 25px';
        }
        grid.appendChild(divArray[i]);
    }

}

createGrid(16)