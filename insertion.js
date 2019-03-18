// Insertion sort


/* Pseudo code

insertionSort(array)
    
    for loop through length provide
      compare and switch array[i] with array[i + 1]

1. Start at n = 1  <------------------------------------------\
                                                              |
2. Take item n in array                                       |
                                                              |
3. swap it backwards until it reaches the correct place       |
      ^               |                                       |
      \---------------/                                       |
4. n = n + 1                                                  |
                                                              |
5. repeat ----------------------------------------------------/

(1, 2, (3), 4, 5)


    length = length + 1

    if length == array.length
      break

    [1, 2, 4, 5, 3]
    partly sorted
    [1, 2, 4, 5, x]
    not yet sorted
    [x, x, x, x, 3]
*/

function insertionSort(array) {
    let length = 1;
    let temp;
    let count;
    while(length < array.length){
      count = length;
      while(count != 0){
        if(array[count] < array[count - 1]){
          temp = array[count];
          array[count] = array[count - 1];
          array[count - 1] = temp;   
        }
        count = count -1;
      }
      length = length + 1;
    }
    console.log(array)
}

let randomArray = [9, 1, 3, 4, 5, 2, 0, -4];

function insertionSort2(array) {
    let temp;
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j <= i; j++) {
            if (array[i] < array[i - j]) {
                temp = array[i];
                array[i] = array[i - j];
                array[i - j] = temp;
            }
        }
    }
    return array;
}

insertionSort2(randomArray);