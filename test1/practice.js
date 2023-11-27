let numli = [1, 3, 5, 7, 9];
let chose = [];
let visited = [0, 0, 0, 0, 0];
let max_n = 0;

function permutation(arr, r) {
  if (chose.length === r) {
    let num =
      Number(chose[0].toString() + chose[1].toString()) *
      Number(chose[2].toString() + chose[3].toString() + chose[4].toString());
    if (max_n < num) {
      num1 = [
        Number(chose[0].toString() + chose[1].toString()),
        Number(chose[2].toString() + chose[3].toString() + chose[4].toString()),
      ];
      max_n = num;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i] === 0) {
      chose.push(arr[i]);
      visited[i] = 1;
      permutation(arr, r);
      visited[i] = 0;
      chose.pop();
    }
  }
}

permutation(numli, 5);

console.log(max_n);
