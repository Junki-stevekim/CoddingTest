// 문제 설명
// [본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]

// 당신은 행렬에 적용할 수 있는 두 가지 연산을 만들었습니다.

// ShiftRow
// 모든 행이 아래쪽으로 한 칸씩 밀려납니다. 즉, 모든 행에 대해서 i번째 행은 i+1번째 행이 됩니다. (마지막 행은 1번째 행이 됩니다.)
// ShiftRow의 예 Untitled Diagram.drawio (52).png
// 왼쪽 행렬이 초기 상태이고 오른쪽 행렬이 ShiftRow를 한 번 시행한 뒤의 행렬입니다.
// 1번째 행에 있던 [1,2,3]이 2번째 행으로, 2번째 행에 있던 [4,5,6]이 3번째 행으로, 3번째 행에 있던 [7,8,9]가 1번째 행이 된 것을 확인할 수 있습니다.
// Rotate
// 행렬의 바깥쪽에 있는 원소들을 시계 방향으로 한 칸 회전시킵니다.
// 행렬의 바깥쪽에 있는 원소들은 첫 행, 첫 열, 끝 행, 끝 열에 포함되는 원소들입니다.
// 한 칸 회전시킨다는 것은 이 원소들이 시계 방향으로 한 칸씩 밀려난다는 것을 의미합니다. 즉, 다음 4개의 연산이 동시에 시행됩니다.
// 첫 행에서 끝 열에 있는 원소를 제외한 첫 행의 모든 원소는 오른쪽으로 한 칸 이동합니다.
// 끝 열에서 끝 행에 있는 원소를 제외한 끝 열의 모든 원소는 아래쪽으로 한 칸 이동합니다.
// 끝 행에서 첫 열에 있는 원소를 제외한 끝 행의 모든 원소는 왼쪽으로 한 칸 이동합니다.
// 첫 열에서 첫 행에 있는 원소를 제외한 첫 열의 모든 원소는 위쪽으로 한 칸 이동합니다.
// Rotate의 예 Untitled Diagram.drawio (51).png
// 왼쪽 행렬이 초기 상태이고 오른쪽 행렬이 Rotate를 한 번 시행한 뒤의 행렬입니다.
// 바깥쪽에 있는 값들이 시계 방향으로 한 칸씩 이동한 것을 확인할 수 있습니다.
// 당신은 행렬에 연산을 여러 번 시행하려고 합니다.
// 행렬의 초기 상태를 담고 있는 2차원 정수 배열 rc, 시행할 연산을 순서대로 담고 있는 문자열 배열 operations가 매개변수로 주어졌을 때, 연산을 차례대로 시행한 후의 행렬 상태를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ rc의 행 길이(=행렬의 가로 길이) ≤ 50,000
// rc의 모든 행의 길이는 동일합니다.
// 2 ≤ rc의 열 길이(=행렬의 세로 길이) ≤ 50,000
// rc의 모든 열의 길이는 동일합니다.
// 4 ≤ rc의 행 길이 x rc의 열 길이 ≤ 100,000
// rc[i][j] 는 i+1번째 행 j+1번째 열에 있는 원소를 나타냅니다.
// 1 ≤ rc[i][j] ≤ 1,000,000
// 1 ≤ operations의 길이 ≤ 100,000
// operations의 원소는 "ShiftRow" 혹은 "Rotate"입니다.
// 정확성 테스트 케이스 제한 사항

// 2 ≤ rc의 행 길이(=행렬의 가로 길이) ≤ 1,000
// rc의 모든 행의 길이는 동일합니다.
// 2 ≤ rc의 열 길이(=행렬의 세로 길이) ≤ 1,000
// rc의 모든 열의 길이는 동일합니다.
// 4 ≤ rc의 행 길이 x rc의 열 길이 ≤ 10,000
// 1 ≤ operations의 길이 ≤ 100
// 효율성 테스트 케이스 제한 사항

// 주어진 조건 외 추가 제한사항 없습니다.
// 입출력 예
// rc	operations	result
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]	["Rotate", "ShiftRow"]	[[8, 9, 6], [4, 1, 2], [7, 5, 3]]
// [[8, 6, 3], [3, 3, 7], [8, 4, 9]]	["Rotate", "ShiftRow", "ShiftRow"]	[[8, 3, 3], [4, 9, 7], [3, 8, 6]]
// [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]	["ShiftRow", "Rotate", "ShiftRow", "Rotate"]	[[1, 6, 7 ,8], [5, 9, 10, 4], [2, 3, 12, 11]]
// 입출력 예 설명
// 입출력 예#1

// Untitled Diagram.drawio (50).png

// 위 그림은 ”Rotate”와 ”ShiftRow”를 차례대로 실행한 결과입니다.

// 따라서 [[8, 9, 6], [4, 1, 2], [7, 5, 3]]을 return 해야 합니다.

// 입출력 예#2

// Untitled Diagram.drawio (49).png

// 위 그림은 ”Rotate”, ”ShiftRow”, "ShiftRow"를 차례대로 실행한 결과입니다.

// 따라서 [[8, 3, 3], [4, 9, 7], [3, 8, 6]]을 return 해야 합니다.

// 입출력 예#3

// Untitled Diagram.drawio (54).png

// 위 그림은 ”ShiftRow”, ”Rotate”, ”ShiftRow”, ”Rotate”를 차례대로 실행한 결과입니다.

// 따라서 [[1, 6, 7 ,8], [5, 9, 10, 4], [2, 3, 12, 11]]을 return 해야 합니다.

// 제한시간 안내

// 정확성 테스트 : 10초
// 효율성 테스트 : 언어별로 작성된 정답 코드의 실행 시간의 적정 배수


class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class Deque {
    constructor() {
      this.init();
    }
  
    init() {
      this.count = 0;
      this.front = null;
      this.rear = null;
    }
  
    unshift(value) {
      const node = new Node(value);
  
      if (!this.front) {
        this.front = node;
        this.rear = node;
      } else {
        const cachedPrevFront = this.front;
        cachedPrevFront.prev = node;
  
        this.front = node;
  
        node.next = cachedPrevFront;
      }
  
      this.count += 1;
      return this.count;
    }
  
    shift() {
      if (this.count === 0) return null;
  
      const value = this.front.value;
  
      if (this.count === 1) {
        this.init();
      } else {
        this.front = this.front.next;
        this.front.prev = null;
        this.count -= 1;
      }
  
      return value;
    }
  
    push(value) {
      const node = new Node(value);
  
      if (this.count === 0) {
        this.front = node;
        this.rear = node;
      } else {
        const cachedPrevRear = this.rear;
        cachedPrevRear.next = node;
  
        node.prev = cachedPrevRear;
  
        this.rear = node;
      }
  
      this.count += 1;
  
      return this.count;
    }
  
    pop() {
      if (this.count === 0) return;
  
      const value = this.rear.value;
  
      if (this.count === 1) {
        this.init();
      } else {
        this.rear = this.rear.prev;
        this.rear.next = null;
        this.count -= 1;
      }
  
      return value;
    }
  
    getValue(idx) {
      if (idx >= this.count) return;
      let node = this.front;
  
      for (let i = 0; i < idx; i += 1) {
        node = node.next;
      }
  
      return node.value;
    }
  
    get rawArray() {
      let arr = [];
      let node = this.front;
  
      for (let i = 0; i < this.count; i += 1) {
        arr.push(node.value);
        node = node.next;
      }
  
      return arr;
    }
  
    get length() {
      return this.count;
    }
  }
  
  class Queue {
    constructor(queue) {
      this.queue = Array.isArray(queue) ? queue : [];
      this.rear = this.queue.length;
      this.front = 0;
    }
  
    enqueue(val) {
      this.queue.push(val);
      this.rear += 1;
    }
  
    dequeue() {
      const value = this.queue[this.front];
      delete this.queue[this.front];
  
      this.front += 1;
      return value;
    }
  
    get length() {
      return this.rear - this.front;
    }
  }
  
  class MatrixCommandar {
    constructor({ commands }) {
      this.taskQueue = new Queue();
      this._init(commands);
    }
  
    get TYPE_SHIFT_ROW() {
      return 'ShiftRow';
    }
  
    get TYPE_ROTATE() {
      return 'Rotate';
    }
  
    _init(commands) {
      let prev = null;
      let count = 0;
  
      for (let i = 0; i < commands.length; i += 1) {
        const nowCommands = commands[i];
  
        if (prev === null || prev === nowCommands) {
          count += 1;
        } else {
          this.taskQueue.enqueue([prev, count]);
  
          count = 1;
        }
  
        prev = nowCommands;
  
        if (i === commands.length - 1) {
          this.taskQueue.enqueue([prev, count]);
        }
      }
    }
  
    command() {
      if (!this.taskQueue.length) return;
  
      // [command, runCount]
      return this.taskQueue.dequeue();
    }
  
    get commandLength() {
      return this.taskQueue.length;
    }
  }
  
  class Matrix {
    constructor(matrix) {
      this.left = new Deque();
      this.right = new Deque();
      this.main = new Deque();
  
      this._init(matrix);
    }
  
    _init(matrix) {
      for (let i = 0; i < matrix.length; i += 1) {
        const row = matrix[i];
        const deque = new Deque();
  
        row.forEach((val) => {
          deque.push(val);
        });
  
        this.left.push(deque.shift());
        this.right.push(deque.pop());
        this.main.push(deque);
      }
    }
  
    rotate(count) {
      let remainCount = count % (this.main.front.value.length * 2 + this.left.length + this.right.length);
  
      while (remainCount) {
        remainCount -= 1;
  
        this.main.front.value.unshift(this.left.shift());
        this.right.unshift(this.main.front.value.pop());
        this.main.rear.value.push(this.right.pop());
        this.left.push(this.main.rear.value.shift());
      }
    }
  
    shiftRow(count) {
      let remainCount = count % this.main.length;
  
      while (remainCount) {
        remainCount -= 1;
  
        this.main.unshift(this.main.pop());
  
        this.left.unshift(this.left.pop());
        this.right.unshift(this.right.pop());
      }
    }
  }
  
  class RotateMatrixArrayPrinterStrategy {
    constructor(matrix) {
      this.matrix = matrix;
    }
  
    print() {
      let result = [];
  
      const leftArr = this.matrix.left.rawArray;
      const mainArr = this.matrix.main.rawArray;
      const rightArr = this.matrix.right.rawArray;
  
      for (let i = 0; i < mainArr.length; i += 1) {
        const row = [];
  
        row.push(leftArr[i]);
        row.push(...mainArr[i].rawArray);
        row.push(rightArr[i]);
  
        result.push(row);
      }
  
      return result;
    }
  }
  
  class MatrixCalculator {
    constructor({ commands, matrix, printerStrategy }) {
      this.commandar = commands;
      this.matrix = matrix;
      this.printerStrategy = printerStrategy;
    }
  
    run() {
      while (this.commandar.commandLength) {
        const [command, count] = this.commandar.command();
  
        if (command === this.commandar.TYPE_SHIFT_ROW) {
          this.matrix.shiftRow(count);
        }
  
        if (command === this.commandar.TYPE_ROTATE) {
          this.matrix.rotate(count);
        }
      }
    }
  
    getResult() {
      return this.printerStrategy.print();
    }
  }
  
  const solution = (rc, operations) => {
    const matrix = new Matrix(rc);
  
    const matrixCalculator = new MatrixCalculator({
      commands: new MatrixCommandar({ commands: operations }),
      matrix,
      printerStrategy: new RotateMatrixArrayPrinterStrategy(matrix),
    });
  
    matrixCalculator.run();
  
    return matrixCalculator.getResult();
  };