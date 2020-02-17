// creation of sub array with maximum sum
function contiguousSubArrayCreation(array) {
    // check for non empty array
    if (array.length < 1) {
        console.log('Enter an non-empty array');
        return;
    }
    // check for non integers in array
    if (array.some(isNaN)) {
        console.log('Enter an non-empty array of integers');
        return;
    }
    let subArray = [];
    let maxSum = 0, currentMaxSum = 0, start = 0, end = 0, previousEnd = 0;
    for (let i=0; i < array.length; i++) {
        currentMaxSum += array[i]; 
    
        if (maxSum < currentMaxSum) 
        { 
            maxSum = currentMaxSum; 
            start = previousEnd; 
            end = i; 
        } 

        if (currentMaxSum < 0) 
        { 
            currentMaxSum = 0; 
            previousEnd = i + 1; 
        } 
    }
    subArray = array.slice(start, end + 1);
    console.log('The maximum sum is '+ maxSum);
    console.log('the sub array is ' + subArray);

}
contiguousSubArrayCreation([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]);