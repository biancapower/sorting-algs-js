
// Bubble sort!


/*
sort(array) 

    while termination not achieved
      for loop through the whole array
        if no sorting occur 
          break the loop
        compare and sort num n and n+1

    note: this doesn't work for the last comparison case

    while? do-while?
*/
let numArray = ["pineapple", NaN, "cherry", "Raspberry"];

function bubbleSort(array) {
    let unsorted = true;
    let temp;
    while(unsorted) { // so unsorted = false will break the loop

        console.log(array);
        unsorted = false;
        for (let i = 0; i + 1 < array.length; i++) {
            if (array[i + 1] < array[i]) {
                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                unsorted = true;
            } 
        }
    }
}

bubbleSort(numArray);
console.log(numArray);