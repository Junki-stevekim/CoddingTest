// 문제 설명
// 1 x 1 크기의 칸들로 이루어진 직사각형 격자 형태의 미로에서 탈출하려고 합니다. 각 칸은 통로 또는 벽으로 구성되어 있으며, 벽으로 된 칸은 지나갈 수 없고 통로로 된 칸으로만 이동할 수 있습니다. 통로들 중 한 칸에는 미로를 빠져나가는 문이 있는데, 이 문은 레버를 당겨서만 열 수 있습니다. 레버 또한 통로들 중 한 칸에 있습니다. 따라서, 출발 지점에서 먼저 레버가 있는 칸으로 이동하여 레버를 당긴 후 미로를 빠져나가는 문이 있는 칸으로 이동하면 됩니다. 이때 아직 레버를 당기지 않았더라도 출구가 있는 칸을 지나갈 수 있습니다. 미로에서 한 칸을 이동하는데 1초가 걸린다고 할 때, 최대한 빠르게 미로를 빠져나가는데 걸리는 시간을 구하려 합니다.

// 미로를 나타낸 문자열 배열 maps가 매개변수로 주어질 때, 미로를 탈출하는데 필요한 최소 시간을 return 하는 solution 함수를 완성해주세요. 만약, 탈출할 수 없다면 -1을 return 해주세요.

// 제한사항
// 5 ≤ maps의 길이 ≤ 100
// 5 ≤ maps[i]의 길이 ≤ 100
// maps[i]는 다음 5개의 문자들로만 이루어져 있습니다.
// S : 시작 지점
// E : 출구
// L : 레버
// O : 통로
// X : 벽
// 시작 지점과 출구, 레버는 항상 다른 곳에 존재하며 한 개씩만 존재합니다.
// 출구는 레버가 당겨지지 않아도 지나갈 수 있으며, 모든 통로, 출구, 레버, 시작점은 여러 번 지나갈 수 있습니다.
// 입출력 예
// maps	result
// ["SOOOL","XXXXO","OOOOO","OXXXX","OOOOE"]	16
// ["LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"]	-1
// 입출력 예 설명
// 입출력 예 #1

// 주어진 문자열은 다음과 같은 미로이며

// image1

// 다음과 같이 이동하면 가장 빠른 시간에 탈출할 수 있습니다.

// image2

// 4번 이동하여 레버를 당기고 출구까지 이동하면 총 16초의 시간이 걸립니다. 따라서 16을 반환합니다.

// 입출력 예 #2

// 주어진 문자열은 다음과 같은 미로입니다.

// image3

// 시작 지점에서 이동할 수 있는 공간이 없어서 탈출할 수 없습니다. 따라서 -1을 반환합니다.


function solution(maps) {
    let start = [];  // 스타트 위치
    let lever = [];  // 레버 위치
    
    /*  1) start-lever, lever-end 두번을 나눠 최단 
        거리를 구하기 위해 두개의 map을 생성한다.  */
    const maps2 = maps.map(item => item.split(''));  
    const maps3 = maps.map(item => item.split('')); 
    
    // 2) 반복문을 통해 시작, 레버 위치를 찾는다.
    for(let i=0; i<maps.length; i++) {
        for(let j=0; j<maps[i].length; j++) {
            if(maps[i][j] === "S") start = [i,j];
            else if(maps[i][j] === "L") lever = [i,j]
        }
    }
    
    // 3)  start-lever 최단거리 시간
    const a = target(start, [...maps2], "L");
    // 4) lever-end 최단거리 시간
    const b = target(lever, [...maps3], "E");
    
    // 5) 둘중에 하나라도 거쳐가지 못한다면 -1를 반환한다.
    if(a === -1 || b === -1) return -1
    
    // 6) 거쳐간다면 최단거리 합을 반환한다.
    return a+b;
}

// 7) 최단거리 구하는 함수
function target(start, arr, target) {
    let time = 0;                 // 걸리는 시간
    const dx = [-1, 1, 0, 0];     // 상하좌우 행열 좌표
    const dy = [0, 0, -1, 1];
    const q = [start];         
    const n = arr.length;          // 좌표 값의 범위를 제한하는 n, m
    const m = arr[0].length;   
    arr[start[0]][start[1]] = 'X'; // 시작 위치를 막기
    
    // 8) 너비탐색(BFS) 
    while(q.length > 0) {
    
        // 9) q의 길이가 변하면 안되기 때문에 변수로 선언한다.
        // 한 사이클(이동가능 좌표들)의 횟수가 push로 변하기 때문에 값 고정
        let size = q.length;
        for(let i=0; i<size; i++) {
            const [x, y] = q.shift();
           
            // 10) 상하좌우 반복
            for(let j=0; j<4; j++) {
                let nx = x + dx[j];
                let ny = y + dy[j];
                
                // 11) 좌표 값 범위에 있으면서 벽(X)이 아니라면 
                if(nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] !== 'X') {
                    // 12) target이랑 만나게 되면 걸리는 시간을 반환한다.
                    if(arr[nx][ny] === target) {
                         return time+1;
                    } 
                    
                    // 13) 현재 좌표를 q에 넣고 다시 갈 수 없게 벽으로 막는다.
                    q.push([nx, ny]);
                    arr[nx][ny] = 'X';
                }
            }
        }
        // 14) 한 사이클이 끝나면 1초 증가
        time++;
    }
    // 15) target을 만나지 못한다면 -1 반환
    return -1;
}