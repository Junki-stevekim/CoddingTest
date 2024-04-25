// 문제 설명
// n명의 권투선수가 권투 대회에 참여했고 각각 1번부터 n번까지 번호를 받았습니다. 권투 경기는 1대1 방식으로 진행이 되고, 만약 A 선수가 B 선수보다 실력이 좋다면 A 선수는 B 선수를 항상 이깁니다. 심판은 주어진 경기 결과를 가지고 선수들의 순위를 매기려 합니다. 하지만 몇몇 경기 결과를 분실하여 정확하게 순위를 매길 수 없습니다.

// 선수의 수 n, 경기 결과를 담은 2차원 배열 results가 매개변수로 주어질 때 정확하게 순위를 매길 수 있는 선수의 수를 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 선수의 수는 1명 이상 100명 이하입니다.
// 경기 결과는 1개 이상 4,500개 이하입니다.
// results 배열 각 행 [A, B]는 A 선수가 B 선수를 이겼다는 의미입니다.
// 모든 경기 결과에는 모순이 없습니다.
// 입출력 예
// n	results	return
// 5	[[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]	2
// 입출력 예 설명
// 2번 선수는 [1, 3, 4] 선수에게 패배했고 5번 선수에게 승리했기 때문에 4위입니다.
// 5번 선수는 4위인 2번 선수에게 패배했기 때문에 5위입니다.

function solution(n, results) {
  
    let answer = 0;
    
    // 각 선수들의 경기 결과를 담을 그래프를 초기화한다.
    const list = new Array(n)
      .fill("")
      .map((v) => ({ rank: {}, win: [], loose: [] }));
    
  
    // 그래프에 경기 결과 값을 추가한다.
    results.forEach(([win, loose]) => {
      list[win - 1].win.push(loose - 1);
      list[loose - 1].loose.push(win - 1);
    });
  
    // 각 정점에 연결된 간선을 순회하며 순위를 확인하는 재귀 함수
    function findRank(node, type, visited) {
      visited[node] = true;
      if (list[node].rank[type]) {
        return list[node].rank[type];
      }
  
      if (list[node][type].length < 1) {
        return 0;
      }
  
      let rank = 0;
  
      list[node][type].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          rank += 1 + findRank(v, type, visited);
        }
      });
  
      return rank;
    }
  
    // 각 선수 정점을 순회한다.
    for (let i = 0; i < n; i++) {
      // 나보다 앞선 순위의 선수들의 숫자
      const winner = findRank(i, "loose", new Array(n).fill(false));
      
      // 나보다 뒤 순위의 선수들의 숫자
      const looser = findRank(i, "win", new Array(n).fill(false));
  
      // 나보다 앞선 순위의 선수와 뒤 선수의 숫자가 전체 참가자 수 - 1과 같다면, 내 순위는 정확하다.
      if (winner + looser === n - 1) {
        answer++;
      }
    }
  
    return answer;
  }