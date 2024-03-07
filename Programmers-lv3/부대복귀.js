// 문제 설명
// 강철부대의 각 부대원이 여러 지역에 뿔뿔이 흩어져 특수 임무를 수행 중입니다. 지도에서 강철부대가 위치한 지역을 포함한 각 지역은 유일한 번호로 구분되며, 두 지역 간의 길을 통과하는 데 걸리는 시간은 모두 1로 동일합니다. 임무를 수행한 각 부대원은 지도 정보를 이용하여 최단시간에 부대로 복귀하고자 합니다. 다만 적군의 방해로 인해, 임무의 시작 때와 다르게 되돌아오는 경로가 없어져 복귀가 불가능한 부대원도 있을 수 있습니다.

// 강철부대가 위치한 지역을 포함한 총지역의 수 n, 두 지역을 왕복할 수 있는 길 정보를 담은 2차원 정수 배열 roads, 각 부대원이 위치한 서로 다른 지역들을 나타내는 정수 배열 sources, 강철부대의 지역 destination이 주어졌을 때, 주어진 sources의 원소 순서대로 강철부대로 복귀할 수 있는 최단시간을 담은 배열을 return하는 solution 함수를 완성해주세요. 복귀가 불가능한 경우 해당 부대원의 최단시간은 -1입니다.

// 제한사항
// 3 ≤ n ≤ 100,000
// 각 지역은 정수 1부터 n까지의 번호로 구분됩니다.
// 2 ≤ roads의 길이 ≤ 500,000
// roads의 원소의 길이 = 2
// roads의 원소는 [a, b] 형태로 두 지역 a, b가 서로 왕복할 수 있음을 의미합니다.(1 ≤ a, b ≤ n, a ≠ b)
// 동일한 정보가 중복해서 주어지지 않습니다.
// 동일한 [a, b]가 중복해서 주어지지 않습니다.
// [a, b]가 있다면 [b, a]는 주어지지 않습니다.
// 1 ≤ sources의 길이 ≤ 500
// 1 ≤ sources[i] ≤ n
// 1 ≤ destination ≤ n
// 입출력 예
// n	roads	sources	destination	result
// 3	[[1, 2], [2, 3]]	[2, 3]	1	[1, 2]
// 5	[[1, 2], [1, 4], [2, 4], [2, 5], [4, 5]]	[1, 3, 5]	5	[2, -1, 0]
// 입출력 예 설명
// 입출력 예 #1

// 지역 2는 지역 1과 길로 연결되어 있기 때문에, 지역 2에서 지역 1의 최단거리는 1입니다.
// 지역 3에서 지역 1로 이동할 수 있는 최단경로는 지역 3 → 지역 2 → 지역 1 순으로 이동하는 것이기 때문에, 지역 3에서 지역 1의 최단거리는 2입니다.
// 따라서 [1, 2]를 return합니다.
// 입출력 예 #2

// 지역 1에서 지역 5의 최단경로는 지역 1 → 지역 2 → 지역 5 또는 지역 1 → 지역 4 → 지역 5 순으로 이동하는 것이기 때문에, 최단거리는 2입니다.
// 지역 3에서 지역 5로 가는 경로가 없기 때문에, 지역 3에서 지역 5로 가는 최단거리는 -1입니다.
// 지역 5에서 지역 5는 이동할 필요가 없기 때문에, 최단거리는 0입니다.
// 따라서 [2, -1, 0]을 return합니다.


class MinHeap {
    constructor() {
        this.heap = [null];
    }

    insert(item) {
          // 트리의 마지막 위치부터 순서대로 계산
        let current = this.heap.length;
        while (current > 1) {
            const parent = Math.floor(current / 2);
              // cost 비교 후 위치 변경
            if (this.heap[parent].cost > item.cost) {
                this.heap[current] = this.heap[parent];
                current = parent;
            // 만약 cost 가 같을 경우 node를 기준으로 위치 변경
            } else if (this.heap[parent].cost === item.cost) {
                if (this.heap[parent].node > item.node) {
                    this.heap[current] = this.heap[parent];
                    current = parent;
                } else break;
            } else break;
        }
          //current 값이 위의 반복문을 통해 알맞은 위치로 왔다. 따라서 핻당 위치에 값 배치
        this.heap[current] = item;
    }

    remove() {
        let min = this.heap[1];
        if (this.heap.length > 2) {
          // 우선순위 큐에서 최상단을 제거하기 때문에 최상단 제거
          // 마지막 위치의 노드에 있는 값을 최상단으로 옮김
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);

              // 최상단부터 아래로 내려가며 비교
            let current = 1;
            let leftChild = current * 2;
            let rightChild = current * 2 + 1;
              // 이진 트리이기 때문에 왼쪽 자식이 있는 것으로 자식 노드가 있는지 판단
            while (this.heap[leftChild]) {
                let compareItem = leftChild;
                  // 오른쪽 자식이 있을 경우, 왼쪽 자식과 오른쪽 자식 노드 비교 
                  // 비교 후 compareItem에 내가 비교할 노드 저장
                if (this.heap[rightChild] && this.heap[compareItem].cost > this.heap[rightChild].cost) {
                    compareItem = rightChild;
                } else if (this.heap[rightChild] && this.heap[compareItem].cost === this.heap[rightChild].cost) {
                    if (this.heap[compareItem].node > this.heap[rightChild].node) {
                        compareItem = rightChild;
                    }
                }
                  // 위의 과정으로 더 작은 자식 노드가 compareItem에 들어간다. 
                  // 따라서 compareItem과 부모 노드를 비교 
                  // 만약 자식 노드가 더 클 경우 위치 변경 
                if (this.heap[current].cost > this.heap[compareItem].cost) {
                    [this.heap[current], this.heap[compareItem]] = [this.heap[compareItem], this.heap[current]];
                    current = compareItem;
                } else if (this.heap[current].cost === this.heap[compareItem].cost) {
                    if (this.heap[current].node > this.heap[compareItem].node) {
                        [this.heap[current], this.heap[compareItem]] = [this.heap[compareItem], this.heap[current]];
                          // 위치 변경후 해당 위치에서 다시 반복문 진행
                        current = compareItem;
                    } else break;
                } else break;
                // current 값이 바뀌었기 때문에 자식 노드도 바꿔줌
                leftChild = current * 2;
                rightChild = current * 2 + 1;
            }
        } else if (this.heap.length === 2) {
            this.heap.splice(1, 1);
        } else {
            return null;
        }
        return min;
    }

    getMin() {
        return this.heap[1];
    }

    getSize() {
        return this.heap.length - 1;
    }

    getHeap() {
        return this.heap;
    }
}

function solution(n, roads, sources, destination) {
    let answer = [];

    let list = Array.from({length: n + 1}, () => []);

    for (let i = 0; i < roads.length; i++) {
        const [start, end] = roads[i];
        list[start].push({node: end, cost: 1});
        list[end].push({node: start, cost: 1});
    }

    let shortest = Array.from({length: n + 1}, () => Infinity);
    console.log(list);
    const priorityQueue = new MinHeap();
    const visited = new Array(n + 1).fill(false);

    // 시작 지점 값 초기화
    priorityQueue.insert({node: destination, cost: 0});
    shortest[destination] = 0;
    // 우선순위 큐를 이용한 BFS기반의 코드 
    while (priorityQueue.getSize()) {
        const TopOfPrioriyQueue = priorityQueue.remove();
        const now = TopOfPrioriyQueue.node;

        // 현 위치 값의 visited를 체크
        if (!visited[now]) {
            visited[now] = true;

          // 반복문으로 연결되어 있는 노드를 돌며 최단거리 갱신
          // 최단 거리 갱신 후 다음 노드와 cost를 증가 시켜주고 우선 순위큐에 삽입
            for (const node of list[now]) {
                const pathNodeCost = node.cost;
                const fullCost = TopOfPrioriyQueue.cost + pathNodeCost;
                shortest[node.node] = Math.min(shortest[node.node], fullCost);
                priorityQueue.insert({node: node.node, cost: fullCost});
            }
        }
    }

  // 출력을 위해 answer 배열에 삽입
    for (let i = 0; i < sources.length; i++) {
        if (shortest[sources[i]] === Infinity) {
            answer.push(-1);
        } else {
            answer.push(shortest[sources[i]]);
        }
    }

    return answer;
}