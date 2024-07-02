// 문제 설명
// 당신은 1~n 사이의 수가 적힌 카드가 하나씩 있는 카드 뭉치와 동전 coin개를 이용한 게임을 하려고 합니다. 카드 뭉치에서 카드를 뽑는 순서가 정해져 있으며, 게임은 다음과 같이 진행합니다.

// 처음에 카드 뭉치에서 카드 n/3장을 뽑아 모두 가집니다. (n은 6의 배수입니다.) 당신은 카드와 교환 가능한 동전 coin개를 가지고 있습니다.
// 게임은 1라운드부터 시작되며, 각 라운드가 시작할 때 카드를 두 장 뽑습니다. 카드 뭉치에 남은 카드가 없다면 게임을 종료합니다. 뽑은 카드는 카드 한 장당 동전 하나를 소모해 가지거나, 동전을 소모하지 않고 버릴 수 있습니다.
// 카드에 적힌 수의 합이 n+1이 되도록 카드 두 장을 내고 다음 라운드로 진행할 수 있습니다. 만약 카드 두 장을 낼 수 없다면 게임을 종료합니다.
// 예를 들어 n = 12, coin = 4이고 [3, 6, 7, 2, 1, 10, 5, 9, 8, 12, 11, 4] 순서대로 카드를 뽑도록 카드 뭉치가 섞여 있습니다.

// 처음에 3, 6, 7, 2 카드 4장(= n/3)과 동전 4개(= coin)를 가지고 시작합니다. 다음 라운드로 진행하기 위해 내야 할 카드 두 장에 적힌 수의 합은 13(= n+1)입니다. 다음과 같은 방법으로 최대 5라운드까지 도달할 수 있습니다.

// 1라운드에서 뽑은 카드 1, 10을 동전 두 개를 소모해서 모두 가집니다. 카드 3, 10을 내고 다음 라운드로 진행합니다. 이때 손에 남은 카드는 1, 2, 6, 7이고 동전이 2개 남습니다.
// 2라운드에서 뽑은 카드 5, 9를 동전을 소모하지 않고 모두 버립니다. 카드 6, 7을 내고 다음 라운드로 진행합니다. 이때 손에 남은 카드는 1, 2고 동전이 2개 남습니다.
// 3라운드에서 뽑은 카드 8, 12 중 동전 한 개를 소모해서 카드 12를 가집니다. 카드 1, 12을 내고 다음 라운드로 진행합니다. 이때 손에 남은 카드는 2이고 동전이 1개 남습니다.
// 4라운드에서 뽑은 카드 11, 4 중 동전 한 개를 소모해서 카드 11을 가집니다. 카드 2, 11을 내고 다음 라운드로 진행합니다. 이때 손에 남은 카드와 동전은 없습니다.
// 5라운드에서 카드 뭉치에 남은 카드가 없으므로 게임을 종료합니다.
// 처음에 가진 동전수를 나타내는 정수 coin과 카드를 뽑는 순서대로 카드에 적힌 수를 담은 1차원 정수 배열 cards가 매개변수로 주어질 때, 게임에서 도달 가능한 최대 라운드의 수를 return 하도록 solution 함수를 완성해 주세요.

// 제한사항
// 0 ≤ coin ≤ n
// 6 ≤ cards의 길이 = n < 1,000
// cards[i]는 i+1번째로 뽑는 카드에 적힌 수를 나타냅니다.
// 1 ≤ cards[i] ≤ n
// cards의 원소는 중복되지 않습니다.
// n은 6의 배수입니다.
// 입출력 예
// coin	cards	result
// 4	[3, 6, 7, 2, 1, 10, 5, 9, 8, 12, 11, 4]	5
// 3	[1, 2, 3, 4, 5, 8, 6, 7, 9, 10, 11, 12]	2
// 2	[5, 8, 1, 2, 9, 4, 12, 11, 3, 10, 6, 7]	4
// 10	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]	1
// 입출력 예 설명
// 입출력 예 #1

// 문제 예시와 같습니다.

// 입출력 예 #2

// 처음에 1, 2, 3, 4 카드 4장과 동전 3개를 가지고 시작합니다. 다음 라운드로 진행하기 위해 내야 할 카드 두 장에 적힌 수의 합은 13입니다. 다음과 같은 방법으로 최대 2라운드까지 도달할 수 있습니다.

// 1라운드에서 뽑은 카드 5, 8을 동전 두 개를 소모해서 모두 가집니다. 카드 5, 8을 내고 다음 라운드로 진행합니다. 이때 손에 남은 카드는 1, 2, 3, 4이고 동전이 1개 남습니다.
// 2라운드에서 뽑은 카드 6, 7중 남은 동전 한 개로 어떤 카드를 골라도 카드에 적힌 수의 합이 13이 되도록 카드 두 장을 낼 수 없으므로 게임이 종료됩니다.
// 따라서 2를 return 하면 됩니다.

// 입출력 예 #3

// 처음에 5, 8, 1, 2 카드 4장과 동전 2개를 가지고 시작합니다. 다음 라운드로 진행하기 위해 내야 할 카드 두 장에 적힌 수의 합은 13입니다. 다음과 같은 방법으로 최대 4라운드까지 도달할 수 있습니다.

// 1라운드에서 뽑은 카드 9, 4를 동전을 소모하지 않고 모두 버립니다. 카드 5, 8을 내고 다음 라운드로 진행합니다. 이때 손에 남은 카드는 1, 2고 동전이 2개 남습니다.
// 2라운드에서 뽑은 카드 12, 11를 동전 두 개를 소모해서 모두 가집니다. 카드 1, 12를 내고 다음 라운드로 진행합니다. 이때 손에 남은 카드는 2, 11이고 남은 동전이 없으므로 더 이상 카드를 추가로 가질 수 없습니다.
// 3라운드에서 뽑은 카드 3, 10을 모두 버립니다. 카드 2, 11을 내고 다음 라운드로 진행합니다. 이때 손에 남은 카드와 동전은 없습니다.
// 4라운드에서 뽑은 카드 6, 7을 모두 버립니다. 카드에 적힌 수의 합이 13이 되도록 카드 두 장을 낼 수 없으므로 게임이 종료됩니다.
// 따라서 4를 return 하면 됩니다.

// 입출력 예 #4

// 처음에 1, 2, 3, 4, 5, 6 카드 6장과 동전 10개를 가지고 시작합니다. 다음 라운드로 진행하기 위해 내야 할 카드 두 장에 적힌 수의 합은 19입니다. 1라운드에서 카드 7, 8 두 장을 모두 가져도 합이 19가 되도록 카드 두 장을 낼 수 없으므로 최대 1라운드까지만 도달할 수 있습니다.

// 따라서 1을 return 하면 됩니다.

/* eslint-disable no-param-reassign */
class Heap {
    constructor(compare) {
      this.arr = [];
      this.compare = compare;
  
      this.getParentIndex = (i) => Math.floor((i - 1) / 2);
      this.getLeftChild = (i) => i * 2 + 1;
      this.getRightChild = (i) => i * 2 + 2;
      this.swap = (idx1, idx2) => {
        [
          [
            this.arr[idx1], this.arr[idx2],
          ],
        ] = [
          [
            this.arr[idx2], this.arr[idx1],
          ],
        ];
      };
    }
  
    bubbleUp() {
      let index = this.arr.length - 1;
      let parentIndex = this.getParentIndex(index);
  
      while (index && this.compare(this.arr[parentIndex], this.arr[index])) {
        this.swap(parentIndex, index);
        index = parentIndex;
        parentIndex = this.getParentIndex(index);
      }
    }
  
    bubbleDown() {
      let index = 0;
      let leftIndex = this.getLeftChild(index);
      let rightIndex = this.getRightChild(index);
  
      while (
        (this.arr[leftIndex]
          && this.compare(this.arr[index], this.arr[leftIndex])
        ) || (
          this.arr[rightIndex]
          && this.compare(this.arr[index], this.arr[rightIndex])
        )) {
        const targetIndex = (
          this.arr[rightIndex] && this.compare(this.arr[leftIndex], this.arr[rightIndex])
        ) ? rightIndex : leftIndex;
  
        this.swap(index, targetIndex);
  
        index = targetIndex;
        leftIndex = this.getLeftChild(index);
        rightIndex = this.getRightChild(index);
      }
    }
  
    push(x) {
      this.arr.push(x);
      this.bubbleUp();
    }
  
    pop() {
      if (this.arr.length === 1) return this.arr.pop();
  
      const value = this.arr[0];
      this.arr[0] = this.arr.pop();
      this.bubbleDown();
  
      return value;
    }
  
    size() {
      return this.arr.length;
    }
  }
  
  function solution(coin, cards) {
    const minHeap = new Heap((parent, child) => parent > child);
    const maxHeap = new Heap((parent, child) => parent < child);
  
    const discardedCards = new Array(cards.length + 1).fill(false);
    const onHandCards = new Array(cards.length + 1).fill(false);
    const initHandCards = new Array(cards.length + 1).fill(false);
  
    const indexMap = cards
      .map((card, index) => [card, index])
      .sort((a, b) => a[0] - b[0])
      .map((info) => info[1]);
  
    const getOppositeCardIndex = (cardIndex) => indexMap[cards.length - cards[cardIndex]];
    const getOppositeCard = (cardIndex) => cards.length + 1 - cards[cardIndex];
    const initSize = cards.length / 3;
  
    let result = 1;
    let couples = 0;
  
    for (let i = 0; i < initSize; i += 1) {
      if (!discardedCards[cards[i]]) {
        if (getOppositeCardIndex(i) < initSize) {
          couples += 1;
          discardedCards[cards[i]] = true;
          discardedCards[getOppositeCard(i)] = true;
        } else {
          onHandCards[cards[i]] = true;
          initHandCards[cards[i]] = true;
        }
      }
    }
  
    const getCouples = () => {
      while (minHeap.size()) {
        const minIndex = minHeap.pop();
        const oppoCard = cards[minIndex];
        const card = cards[getOppositeCardIndex(minIndex)];
  
        if (onHandCards[card] && onHandCards[oppoCard]) {
          couples += 1;
  
          discardedCards[card] = true;
          onHandCards[card] = false;
  
          discardedCards[oppoCard] = true;
          onHandCards[oppoCard] = false;
  
          break;
        }
      }
    };
  
    const getCoin = () => {
      while (maxHeap.size()) {
        const maxIndex = maxHeap.pop();
        const oppoCard = cards[maxIndex];
        const card = cards[getOppositeCardIndex(maxIndex)];
  
        if (onHandCards[card] && !initHandCards[card]) {
          coin += 1;
  
          discardedCards[card] = true;
          onHandCards[card] = false;
  
          if (onHandCards[oppoCard] && !initHandCards[oppoCard]) {
            coin += 1;
  
            onHandCards[oppoCard] = false;
          }
  
          discardedCards[oppoCard] = true;
  
          break;
        }
      }
    };
  
    for (let i = initSize; i < cards.length; i += 2) {
      if (!discardedCards[getOppositeCard(i)]
      && !discardedCards[cards[i]]) {
        onHandCards[cards[i]] = true;
        minHeap.push(getOppositeCardIndex(i));
        maxHeap.push(getOppositeCardIndex(i));
        coin -= 1;
      }
  
      if (!discardedCards[getOppositeCard(i + 1)]
      && !discardedCards[cards[i + 1]]) {
        onHandCards[cards[i + 1]] = true;
        minHeap.push(getOppositeCardIndex(i + 1));
        maxHeap.push(getOppositeCardIndex(i + 1));
        coin -= 1;
      }
  
      while (coin < 0) {
        getCoin();
      }
  
      if (!couples) getCouples();
  
      if (!couples) {
        break;
      }
  
      result += 1;
      couples -= 1;
    }
  
    return result;
  }
