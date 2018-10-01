function roverMove(matrixSize, cmds) {
    //create square matrix and fill with numbers
    //Use switch case to determine what command to follow
    //Add logic to determine if location is at the edge of matrix; based off of index maybe?
    //Given Formula: Cell Value = row*size + column


    let matrix = [];
    let position = [0,0]; //our starting position in the matrix; first index is row and second index is column
    let value = 0;
    // Creating our square matrix using a nested loop to assign cell values

    for(var i=0; i < matrixSize; i++) {
        matrix[i] = [];
        for(var j=0; j < matrixSize; j++) {
            matrix[i][j] = (i*matrixSize) + j //using the given formula for cell value
        }
    }

    //Iterating through the cmds array to move through the matrix using switch case
    //Using switch case to determine how to move through the matrix
    for (var i = 0; i < cmds.length; i++) { 
        switch(cmds[i]){
            case "UP":
                if (position[0] > 0) { //using if statements to determine if we are at the matrix boundary
                    position[0] -= 1;
                }
                break;
            case "DOWN":
                if (position[0] < matrixSize) {
                    position[0] += 1;
                }
                break;
            case "LEFT":
                if (position[1] > 0) {
                    position[1] -= 1;
                }
                break;
            case "RIGHT":
                if (position[1] < matrixSize) {
                    position[1] += 1;
                }
                break;
        }

        // console.log(cmds[i], position)
        // console.log(value = (position[0]*matrixSize) + position[1])
    }


    //Using switch case to determine how to move through the matrix
    return value = (position[0]*matrixSize) + position[1];
}

roverMove(4,["UP","DOWN",'RIGHT','RIGHT','LEFT','UP']);
