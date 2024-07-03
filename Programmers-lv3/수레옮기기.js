// 문제 설명
// n x m 크기 격자 모양의 퍼즐판이 주어집니다.

// 퍼즐판에는 빨간색 수레와 파란색 수레가 하나씩 존재합니다. 각 수레들은 자신의 시작 칸에서부터 자신의 도착 칸까지 이동해야 합니다.
// 모든 수레들을 각자의 도착 칸으로 이동시키면 퍼즐을 풀 수 있습니다.

// 당신은 각 턴마다 반드시 모든 수레를 상하좌우로 인접한 칸 중 한 칸으로 움직여야 합니다. 단, 수레를 움직일 때는 아래와 같은 규칙이 있습니다.

// 수레는 벽이나 격자 판 밖으로 움직일 수 없습니다.
// 수레는 자신이 방문했던 칸으로 움직일 수 없습니다.
// 자신의 도착 칸에 위치한 수레는 움직이지 않습니다. 계속 해당 칸에 고정해 놓아야 합니다.
// 동시에 두 수레를 같은 칸으로 움직일 수 없습니다.
// 수레끼리 자리를 바꾸며 움직일 수 없습니다.
// 예를 들어, 아래 그림처럼 n = 3, m = 2인 퍼즐판이 있습니다.

// rb_horse1.jpg

// 속이 빨간색인 원은 빨간색 수레를 나타냅니다.
// 속이 파란색인 원은 파란색 수레를 나타냅니다.
// 테두리가 빨간색인 원은 빨간색 수레의 도착 칸을 나타냅니다.
// 테두리가 파란색인 원은 파란색 수레의 도착 칸을 나타냅니다.
// 위 퍼즐판은 아래와 같은 순서로 3턴만에 풀 수 있습니다.

// rb_horse2.jpg

// 빨간색 사선이 처진 칸은 빨간색 수레가 방문했던 칸을 나타냅니다. 규칙에 따라 빨간색 수레는 빨간색 사선이 처진 칸(방문했던 칸)으로는 이동할 수 없습니다.
// 파란색 사선이 처진 칸은 파란색 수레가 방문했던 칸을 나타냅니다. 규칙에 따라 파란색 수레는 파란색 사선이 처진 칸(방문했던 칸)으로는 이동할 수 없습니다.
// rb_horse3.jpg

// 위처럼 동시에 수레를 같은 칸으로 움직일 수는 없습니다.
// 퍼즐판의 정보를 나타내는 2차원 정수 배열 maze가 매개변수로 주어집니다. 퍼즐을 푸는데 필요한 턴의 최솟값을 return 하도록 solution 함수를 완성해 주세요. 퍼즐을 풀 수 없는 경우 0을 return 해주세요.

// 제한사항
// 1 ≤ maze의 길이 (= 세로 길이) ≤ 4

// 1 ≤ maze[i]의 길이 (= 가로 길이) ≤ 4
// maze[i][j]는 0,1,2,3,4,5 중 하나의 값을 갖습니다.
// maze[i][j]	의미
// 0	빈칸
// 1	빨간 수레의 시작 칸
// 2	파란 수레의 시작 칸
// 3	빨간 수레의 도착 칸
// 4	파란 수레의 도착 칸
// 5	벽
// 빨간 수레의 시작 칸, 빨간 수레의 도착 칸, 파란 수레의 시작 칸, 파란 수레의 도착 칸은 퍼즐판에 1개씩 존재합니다.
// 입출력 예
// maze	result
// [[1, 4], [0, 0], [2, 3]]	3
// [[1, 0, 2], [0, 0, 0], [5, 0 ,5], [4, 0, 3]]	7
// [[1, 5], [2, 5], [4, 5], [3, 5]]	0
// [[4, 1, 2, 3]]	0
// 입출력 예 설명
// 입출력 예 #1

// 문제 예시와 같습니다.

// 입출력 예 #2

// rb_horse4.jpg

// 7턴만에 퍼즐을 풀 수 있습니다. 다른 방법으로도 퍼즐을 풀 수 있지만 7턴보다 빠르게 풀 수는 없습니다.

// 입출력 예 #3

// rb_horse5.jpg

// 다음 턴에 파란색 수레가 파란색 수레의 도착 칸에 위치한 후 고정되어 빨간색 수레가 빨간색 수레의 도착 칸에 도착할 수 없게 됩니다.
// 퍼즐을 풀 수 없으므로 0을 return 해야 합니다.

// 입출력 예 #4

// rb_horse6.jpg

// 수레는 서로 위치를 바꾸면서 움직일 수 없으므로 퍼즐을 풀 수 없습니다. 따라서 0을 return 해야 합니다.


function solution(maze) {
    let answer = [];
  
    const n = maze.length;
    const m = maze[0].length;
  
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    let bs;
    let rs;
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        switch(maze[i][j]) {
          case 2:
            bs = [i, j];
            break;
          case 1:
            rs = [i, j];
            break;
        }
      }
    }
  
    const visited = Array.from({ length: 2 }, () => 
      Array.from({ length: n }, () => 
        Array.from({ length: m}, () => 0)
      )
    );
    
    visited[0][bs[0]][bs[1]] = 1;
    visited[1][rs[0]][rs[1]] = 1;
  
    function check(a, b, ball) {
      return (0 <= a && a < n && 0 <= b && b < m) && visited[ball][a][b] === 0
    }
  
    function dfs(x, y, depth) {
      let [bx, by] = x;
      let [rx, ry] = y;
      if (maze[bx][by] === 4 && maze[rx][ry] === 3) {
        answer.push(depth)
        return
      } else if (maze[bx][by] !== 4 && maze[rx][ry] !== 3) {
        for (let i = 0; i < 4; i++) {
          let nbx = bx + dx[i];
          let nby = by + dy[i];
          if (check(nbx, nby, 0) && maze[nbx][nby] !== 5) {
            for (let d = 0; d < 4; d++) {
              let nrx = rx + dx[d];
              let nry = ry + dy[d];
              if (check(nrx, nry, 1) && !(nbx === nrx && nby === nry) && maze[nrx][nry] !== 5) {
                if (!((nbx === rx && nby === ry) && (bx === nrx && by === nry))) {
                  visited[0][nbx][nby] = 1
                  visited[1][nrx][nry] = 1
                  dfs([nbx, nby], [nrx, nry], depth + 1)
                  visited[0][nbx][nby] = 0
                  visited[1][nrx][nry] = 0
                }
              }
            }
          }
        }
      } else if (maze[bx][by] !== 4 && maze[rx][ry] === 3) {
        for (let i = 0; i < 4; i++) {
          let nbx = bx + dx[i];
          let nby = by + dy[i];
          if (check(nbx, nby, 0) && !(nbx === rx && nby === ry) && maze[nbx][nby] !== 5) {
            visited[0][nbx][nby] = 1
            dfs([nbx, nby], [rx, ry], depth + 1)
            visited[0][nbx][nby] = 0
          }
        }
      } else if (maze[bx][by] === 4 && maze[rx][ry] !== 3) {
        for (let i = 0; i < 4; i++) {
          let nrx = rx + dx[i];
          let nry = ry + dy[i];
          if (check(nrx, nry, 1) && !(bx === nrx && by === nry) && maze[nrx][nry] !== 5) {
            visited[1][nrx][nry] = 1
            dfs([bx, by], [nrx, nry], depth + 1)
            visited[1][nrx][nry] = 0
          }
        }
      };
    };
  
    dfs(bs, rs, 0);
  
    if (answer.length === 0) {
      return 0
    } else {
      return Math.min(...answer)
    }
  };