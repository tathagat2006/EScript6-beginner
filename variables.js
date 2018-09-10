//Function hoisting.


// function getClothing(isCold) {
//     if(isCold) {
//         var freezing = 'Grab a jacket'
//     }else {
//         var hot = `it's a shorts kind of day`
//         console.log(freezing)
//     }
// }

//actually the above function looks like below... i.e. after variable hoisting.

//LINE 4 TO 11 IS EXACTLY SAME AS LINES 17 TO 26.

function getClothing(isCold) {

    var freezing, hot;
    if(isCold) {
        freezing = 'Grab a jacket'
    }else {
        hot = `it's a shorts kind of day`
        console.log(freezing)
    }
}

getClothing(false)