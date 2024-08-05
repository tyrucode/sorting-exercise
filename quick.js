/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return;
    }
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
    return arr;
}

function pivot(arr, left, right) {
    let pivotValue = arr[right];
    let partitionIndex = left;
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;  
}

function swap(arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

/*
quickSort accepts an array, left index, and right index
*/


module.exports = quickSort;