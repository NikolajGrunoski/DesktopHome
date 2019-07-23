

function bubbleSort(items) {

    //buble sort
    for (var i = 0; i < items.length; i++) {
        //Notice that j < (length - i)
        for (var j = 0; j < (items.length - i - 1); j++) {
            //Compare the adjacent positions
            if (items[j] > items[j + 1]) {
                //Swap the numbers
                var tmp = items[j];  //Temporary variable to hold the current number
                items[j] = items[j + 1]; //Replace current number with adjacent number
                items[j + 1] = tmp; //Replace adjacent number with current number
            }
        }
    }

    console.log(niza);
}

var arrayLength = prompt('Vnesi broj'); // Pascal case
// arrayLength = parseInt(arrayLength);
arrayLength = Number(arrayLength);
var niza = [];

for (var i = 0; i < arrayLength; i++) {
    // var vnes = prompt('Vnesi broj pod index: ' + i);
    var vnes = prompt(`Vnesi broj pod index ${i}`);
    vnes = Number(vnes);
    if (!isNaN(vnes)) {
        niza.push(vnes);
    }
}

bubbleSort(niza);


// function sumTwoNumber(a, b){ 
//     return a + b ;
// }

// var sum  = (a, b) => a + b;
// sum(3, 4);

// button.addEventListener('click', () => {
// })

