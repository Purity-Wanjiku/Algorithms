// No.1
function mergeSort(num){
    if (num.length <= 1) {
        return num;
    }

    const middle = Math.floor(num.length / 2);
    const left = mergeSort(num.slice(0, middle));
    const right = mergeSort(num.slice(middle));

    return mergeSort(left, right);
}

function merge(left, right){
    const result = [];
    let a = 0;
    let b = 0;

    while (a < left.length && b < right.length){
        if (left (a)< right [b]){
            result.push(left[a]);
            a++; 
        }else {
            result.push(right[b]);
            b++;
        }
    }
    return result.concat(left.slice(a)).concat(right.slice(b));
}

function binarySearch(arr, target){
    let leftIndex= 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex){
        const middle = Math.floor((leftIndex + rightIndex)/2);

        if (arr[middle] === target){
            return middle;
        }else if(arr[middle] < target){
            rightIndex = middle - 1;
        }
    }
    return null
}

const num = [45, 12, 6, 89, 2, 5];
const target = 6;

const sortedNum = mergeSort(num);
const targetIndex = binarySearch(sortedNum, target);

console.log(targetIndex);

// No.2

function mergeSortDescending(arr){
if (arr.length <= 1) {
    return arr;
}
const middle = Math.floor (arr.length / 2);
const leftIndex = arr.slice(0, middle);
const rightIndex = arr.slice(midlle);

return mergeDescending (mergeSortDescending(leftIndex), mergeSortDescending(rightIndex));
}

function mergeDescending(left, right){
    let get = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if (left[leftIndex] >= right[rightIndex]){
            get.push(left[leftIndex]);
            leftIndex++;
        }else {
            get.push(right[rightIndex]);
            rightIndex++
        }
    }
return get.concat (left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let num2 = [123, 89, 5, 23, 9, 56];
let sortedNum2 = mergeSortDescending(num2);
console.log(sortedNum2);


//No.3

function mergedSorted(num3){
    if (num3.length <= 1) {
        return num3;
    }

    const middle = Math.floor(num3.length / 2);
    const left = mergeSort(num3.slice(0, middle));
    const right = mergeSort(num3.slice(middle));

    return merge(leftIndex, rightIndex);
}

function merged(leftIndex, rightIndex){
    const result = [];
    let c = 0;
    let d = 0;

    while (c < left.length && d < right.length){
        if (left (c)< right [d]){
            result.push(left[c]);
            c++; 
        }else {
            result.push(right[d]);
            d++;
        }
    }
    return result.concat(leftIndex.slice(c)).concat(rightIndex.slice(d));
}

function binarySearch(arr11, target){
    let leftIndex= 0;
    let rightIndex = arr1.length - 1;

    while (leftIndex <= rightIndex){
        const middle = Math.floor((leftIndex + rightIndex)/2);

        if (arr1[middle] === target){
            return middle;
        }else if(arr1[middle] < target){
            rightIndex = middle - 1;
        }
    }
    return null
}

const num3 = [1, 4, 78, 2, 67, 3];
const targeted = 34;

const sortedNum3 = mergeSort(num3);
const TargetIndex = binarySearch(sortedNum3, target);

console.log(TargetIndex);

