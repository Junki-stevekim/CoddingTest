// 문제 설명
// [본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]

// 당신은 코딩 테스트를 준비하기 위해 공부하려고 합니다. 코딩 테스트 문제를 풀기 위해서는 알고리즘에 대한 지식과 코드를 구현하는 능력이 필요합니다.

// 알고리즘에 대한 지식은 알고력, 코드를 구현하는 능력은 코딩력이라고 표현합니다. 알고력과 코딩력은 0 이상의 정수로 표현됩니다.

// 문제를 풀기 위해서는 문제가 요구하는 일정 이상의 알고력과 코딩력이 필요합니다.

// 예를 들어, 당신의 현재 알고력이 15, 코딩력이 10이라고 가정해보겠습니다.

// A라는 문제가 알고력 10, 코딩력 10을 요구한다면 A 문제를 풀 수 있습니다.
// B라는 문제가 알고력 10, 코딩력 20을 요구한다면 코딩력이 부족하기 때문에 B 문제를 풀 수 없습니다.
// 풀 수 없는 문제를 해결하기 위해서는 알고력과 코딩력을 높여야 합니다. 알고력과 코딩력을 높이기 위한 다음과 같은 방법들이 있습니다.

// 알고력을 높이기 위해 알고리즘 공부를 합니다. 알고력 1을 높이기 위해서 1의 시간이 필요합니다.
// 코딩력을 높이기 위해 코딩 공부를 합니다. 코딩력 1을 높이기 위해서 1의 시간이 필요합니다.
// 현재 풀 수 있는 문제 중 하나를 풀어 알고력과 코딩력을 높입니다. 각 문제마다 문제를 풀면 올라가는 알고력과 코딩력이 정해져 있습니다.
// 문제를 하나 푸는 데는 문제가 요구하는 시간이 필요하며 같은 문제를 여러 번 푸는 것이 가능합니다.
// 당신은 주어진 모든 문제들을 풀 수 있는 알고력과 코딩력을 얻는 최단시간을 구하려 합니다.

// 초기의 알고력과 코딩력을 담은 정수 alp와 cop, 문제의 정보를 담은 2차원 정수 배열 problems가 매개변수로 주어졌을 때, 모든 문제들을 풀 수 있는 알고력과 코딩력을 얻는 최단시간을 return 하도록 solution 함수를 작성해주세요.

// 모든 문제들을 1번 이상씩 풀 필요는 없습니다. 입출력 예 설명을 참고해주세요.

// 제한사항
// 초기의 알고력을 나타내는 alp와 초기의 코딩력을 나타내는 cop가 입력으로 주어집니다.
// 0 ≤ alp,cop ≤ 150
// 1 ≤ problems의 길이 ≤ 100
// problems의 원소는 [alp_req, cop_req, alp_rwd, cop_rwd, cost]의 형태로 이루어져 있습니다.
// alp_req는 문제를 푸는데 필요한 알고력입니다.
// 0 ≤ alp_req ≤ 150
// cop_req는 문제를 푸는데 필요한 코딩력입니다.
// 0 ≤ cop_req ≤ 150
// alp_rwd는 문제를 풀었을 때 증가하는 알고력입니다.
// 0 ≤ alp_rwd ≤ 30
// cop_rwd는 문제를 풀었을 때 증가하는 코딩력입니다.
// 0 ≤ cop_rwd ≤ 30
// cost는 문제를 푸는데 드는 시간입니다.
// 1 ≤ cost ≤ 100
// 정확성 테스트 케이스 제한사항

// 0 ≤ alp,cop ≤ 20
// 1 ≤ problems의 길이 ≤ 6
// 0 ≤ alp_req,cop_req ≤ 20
// 0 ≤ alp_rwd,cop_rwd ≤ 5
// 1 ≤ cost ≤ 10
// 효율성 테스트 케이스 제한사항

// 주어진 조건 외 추가 제한사항 없습니다.
// 입출력 예
// alp	cop	problems	result
// 10	10	[[10,15,2,1,2],[20,20,3,3,4]]	15
// 0	0	[[0,0,2,1,2],[4,5,3,1,2],[4,11,4,0,2],[10,4,0,4,2]]	13
// 입출력 예 설명
// 입출력 예 #1

// 코딩력 5를 늘립니다. 알고력 10, 코딩력 15가 되며 시간이 5만큼 소요됩니다.
// 1번 문제를 5번 풉니다. 알고력 20, 코딩력 20이 되며 시간이 10만큼 소요됩니다. 15의 시간을 소요하여 모든 문제를 풀 수 있는 알고력과 코딩력을 가질 수 있습니다.
// 입출력 예 #2

// 1번 문제를 2번 풉니다. 알고력 4, 코딩력 2가 되며 시간이 4만큼 소요됩니다.
// 코딩력 3을 늘립니다. 알고력 4, 코딩력 5가 되며 시간이 3만큼 소요됩니다.
// 2번 문제를 2번 풉니다. 알고력 10, 코딩력 7이 되며 시간이 4만큼 소요됩니다.
// 4번 문제를 1번 풉니다. 알고력 10, 코딩력 11이 되며 시간이 2만큼 소요됩니다. 13의 시간을 소요하여 모든 문제를 풀 수 있는 알고력과 코딩력을 가질 수 있습니다.
// 제한시간 안내

// 정확성 테스트 : 10초
// 효율성 테스트 : 언어별로 작성된 정답 코드의 실행 시간의 적정 배수

function createHeap() {
    const list = [],
      compare = (parent, child) => {
        // [0]은 알고력, [1]은 코딩력, [2]는 비용
        if (parent[2] == child[2]) {
          return parent[0] + parent[1] > child[0] + child[1];
        }
        return parent[2] < child[2];
      };
  
    const swap = (i, j) => {
      const tmp = list[i];
      list[i] = list[j];
      list[j] = tmp;
    };
  
    const push = (value) => {
      list.push(value);
      // 삽입할 때 트리의 끝에서 시작해서 전부 비교하며 올라간다.
      let i = list.length - 1;
      let parentIndex = Math.floor((i + 1) / 2) - 1;
      while (i != 0 && !compare(list[parentIndex], list[i])) {
        swap(i, parentIndex);
        i = parentIndex;
        parentIndex = Math.floor((i + 1) / 2) - 1;
      }
    };
  
    const pop = () => {
      const value = list[0];
      list[0] = list[list.length - 1];
      list.pop();
      // 현재 노드 N, 부모 노드 (N-1) / 2, 왼쪽자식노드 (N*2) + 1, 오른쪽자식노드 (N*2) + 2
      let parentIndex = 0;
      let leftChildIndex = 2 * (parentIndex + 1) - 1;
      let rightChildIndex = leftChildIndex + 1;
      // 트리에서 pop을 하면,
      // 뒤에서 빼주고 그걸 최상위 노드로 이동시켜준다음에
      // 전체 트리를 순회해서 최소값/최대값이 최상위노드가 되도록 유지시켜줘야 한다.
      while (leftChildIndex < list.length) {
        let swapIndex = -1;
        if (leftChildIndex == list.length - 1) {
          if (!compare(list[parentIndex], list[leftChildIndex]))
            swap(parentIndex, leftChildIndex);
          break;
        }
        // 부모와 왼쪽자식 비교
        else if (compare(list[parentIndex], list[leftChildIndex])) {
          if (compare(list[parentIndex], list[rightChildIndex])) break;
          else {
            swapIndex = rightChildIndex;
          }
        }
        // 왼쪽자식 오른쪽자식 비교
        else {
          if (compare(list[leftChildIndex], list[rightChildIndex]))
            swapIndex = leftChildIndex;
          else swapIndex = rightChildIndex;
        }
        if (swapIndex >= 0) {
          swap(parentIndex, swapIndex);
          parentIndex = swapIndex;
          rightChildIndex = 2 * (parentIndex + 1);
          leftChildIndex = rightChildIndex - 1;
        }
      }
      return value;
    };
  
    return { push, pop, list };
  }
  
  function speed(problem) {
    const [_, __, alpRwd, copRwd, cost] = problem;
    return (alpRwd + copRwd) / cost;
  }
  
  function solution(alp, cop, problems) {
    // 비용이 적게 드는 순으로 정렬한다.
    const sortedProblems = problems.filter((p) => speed(p) > 1);
    sortedProblems.sort((a, b) => speed(a) - speed(b));
  
    // reduce를 사용해서 목표 알고력/코딩력을 구한다.
    const targetPoint = problems.reduce(
      (score, problem) => {
        return [Math.max(score[0], problem[0]), Math.max(score[1], problem[1])];
      },
      [0, 0]
    );
  
    let answer =
      Math.max(0, targetPoint[0] - alp) + Math.max(0, targetPoint[1] - cop);
  
    // costBoard[알고력][코딩력]을 셋팅해준다.
    // 최단 거리를 찾는 것이므로 Infinity로 잡아준다.
    const costBoard = new Array(targetPoint[0] + 1)
      .fill(undefined)
      .map(() => new Array(targetPoint[1] + 1).fill(Infinity));
  
    // 힙을 생성해주고 시작 알고력/코딩력과 비용을 셋팅해준다.
    const heap = createHeap();
    heap.push([alp, cop, 0]);
  
    // 힙을 사용해서 bfs를 진행한다.
    while (heap.list.length) {
      // 뒤에서 빼준다.
      let [currAlp, currCop, cost] = heap.pop();
      // 현재 알고력/코딩력, 비용을 셋팅해주고
      currAlp = Math.min(targetPoint[0], currAlp);
      currCop = Math.min(targetPoint[1], currCop);
      // 2차원 배열 [알고력][코딩력]에 계속 최솟값을 업데이트해준다.
      // 더 적은 비용을 만나면 업데이트해준다.
      if (costBoard[currAlp][currCop] > cost) {
        // 더 적은 비용을 만났을 때 (한번 비용을 만났을 때 관련 있는 노드들을 전부 처리해주니까 좋으므로)
        // 알고력 줄과 코딩력 줄을 각각 순회하며 최솟값으로 전부 업데이트해준다.
        for (let i = currAlp; i >= alp; i--) {
          if (costBoard[i][currCop] > cost) {
            costBoard[i][currCop] = cost;
          }
        }
        for (let i = currCop; i >= cop; i--) {
          if (costBoard[currAlp][i] > cost) {
            costBoard[currAlp][i] = cost;
          }
        }
        // 그리고 해당 보드를 비용으로 업데이트해준다.
        costBoard[currAlp][currCop] = cost;
  
        sortedProblems.forEach((p) => {
          const [alp_req, cop_req, alp_rwd, cop_rwd, problemCost] = p;
          // 문제를 못 푼 경우는 건너 뛰고
          if (alp_req > currAlp || cop_req > currCop) return;
          // 문제를 푼 경우 현재 알고력/코딩력을 증가시켜줘야 한다.
          heap.push([currAlp + alp_rwd, currCop + cop_rwd, cost + problemCost]);
        });
        // 그리고 문제를 푸는 게 아니라 직접 시간을 써서 알고력/코딩력을 증가시키는 경우도 고려해준다.
        if (currAlp < targetPoint[0]) heap.push([currAlp + 1, currCop, cost + 1]);
        if (currCop < targetPoint[1]) heap.push([currAlp, currCop + 1, cost + 1]);
      }
    }
  
    return costBoard[targetPoint[0]][targetPoint[1]];
  }