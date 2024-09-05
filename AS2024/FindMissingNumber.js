
function findMissingNumber(arr) {
    const n = arr.length + 1;
    const sumOfFirstN = (n * (n + 1)) / 2;

    let sumOfArray = 0;
    for (let i = 0; i < n - 1; i++) {
        sumOfArray = sumOfArray + arr[i];
    }

    let missingNumber = sumOfFirstN - sumOfArray;

    return missingNumber;
}

const arr = [2, 1, 5, 4, 6, 9, 7, 8, 10];
const missingNumber = findMissingNumber(arr);
console.log("Missing Number: ", missingNumber);
