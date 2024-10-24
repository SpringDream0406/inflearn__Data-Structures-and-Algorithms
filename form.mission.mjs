// 퀵소트 구현 부분...(생략)

function quickSort(arr, leftIndex, rightIndex) {
  if (leftIndex <= rightIndex) {
    const pivotIndex = divide(arr, leftIndex, rightIndex);
    quickSort(arr, leftIndex, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, rightIndex);
  }
  if (leftIndex === 0 && rightIndex === arr.length - 1)
    changeMyCount(arr, rightIndex);
}

function changeMyCount(arr) {
  let maxCount = 0;
  let myIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].count > maxCount) maxCount = arr[i].count;
    if (arr[i].name === "나") myIndex = i;
  }
  arr[myIndex].count = maxCount;
}

function divide(arr, leftIndex, rightIndex) {
  const pivot = arr[leftIndex].count;
  let leftStartIndex = leftIndex + 1;
  let rightStartIndex = rightIndex;

  while (leftStartIndex <= rightStartIndex) {
    while (leftStartIndex <= rightIndex && arr[leftStartIndex].count <= pivot) {
      leftStartIndex++;
    }

    while (
      rightStartIndex >= leftIndex + 1 &&
      arr[rightStartIndex].count >= pivot
    ) {
      rightStartIndex--;
    }

    if (leftStartIndex <= rightStartIndex)
      swap(arr, leftStartIndex, rightStartIndex);
  }

  swap(arr, leftIndex, rightStartIndex);
  return rightStartIndex;
}

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

//

let user1 = {
  name: "홍길동",
  count: 5,
};

let user2 = {
  name: "임꺽정",
  count: 4,
};

let user3 = {
  name: "이순신",
  count: 3,
};

let user4 = {
  name: "나",
  count: 1,
};

let user5 = {
  name: "짱구",
  count: 5,
};

let arr = [user1, user2, user3, user4, user5];

console.log("===== 정렬 전 =====");
console.log(arr);

quickSort(arr, 0, arr.length - 1);

console.log("===== 정렬 후 =====");
console.log(arr);
