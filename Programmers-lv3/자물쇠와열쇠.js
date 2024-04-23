// 문제 설명
// 고고학자인 "튜브"는 고대 유적지에서 보물과 유적이 가득할 것으로 추정되는 비밀의 문을 발견하였습니다. 그런데 문을 열려고 살펴보니 특이한 형태의 자물쇠로 잠겨 있었고 문 앞에는 특이한 형태의 열쇠와 함께 자물쇠를 푸는 방법에 대해 다음과 같이 설명해 주는 종이가 발견되었습니다.

// 잠겨있는 자물쇠는 격자 한 칸의 크기가 1 x 1인 N x N 크기의 정사각 격자 형태이고 특이한 모양의 열쇠는 M x M 크기인 정사각 격자 형태로 되어 있습니다.

// 자물쇠에는 홈이 파여 있고 열쇠 또한 홈과 돌기 부분이 있습니다. 열쇠는 회전과 이동이 가능하며 열쇠의 돌기 부분을 자물쇠의 홈 부분에 딱 맞게 채우면 자물쇠가 열리게 되는 구조입니다. 자물쇠 영역을 벗어난 부분에 있는 열쇠의 홈과 돌기는 자물쇠를 여는 데 영향을 주지 않지만, 자물쇠 영역 내에서는 열쇠의 돌기 부분과 자물쇠의 홈 부분이 정확히 일치해야 하며 열쇠의 돌기와 자물쇠의 돌기가 만나서는 안됩니다. 또한 자물쇠의 모든 홈을 채워 비어있는 곳이 없어야 자물쇠를 열 수 있습니다.

// 열쇠를 나타내는 2차원 배열 key와 자물쇠를 나타내는 2차원 배열 lock이 매개변수로 주어질 때, 열쇠로 자물쇠를 열수 있으면 true를, 열 수 없으면 false를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// key는 M x M(3 ≤ M ≤ 20, M은 자연수)크기 2차원 배열입니다.
// lock은 N x N(3 ≤ N ≤ 20, N은 자연수)크기 2차원 배열입니다.
// M은 항상 N 이하입니다.
// key와 lock의 원소는 0 또는 1로 이루어져 있습니다.
// 0은 홈 부분, 1은 돌기 부분을 나타냅니다.
// 입출력 예
// key	lock	result
// [[0, 0, 0], [1, 0, 0], [0, 1, 1]]	[[1, 1, 1], [1, 1, 0], [1, 0, 1]]	true
// 입출력 예에 대한 설명
// 자물쇠.jpg

// key를 시계 방향으로 90도 회전하고, 오른쪽으로 한 칸, 아래로 한 칸 이동하면 lock의 홈 부분을 정확히 모두 채울 수 있습니다.

const rotate = (matrix) => {
    return matrix[0].map((val, index) => matrix.map(row => row[index]).reverse());
}
const checkMatch = (arr, N) => {
    for (let i = N; i < N*2; i++) {
        for (let j = N; j < N*2; j++) {
            if (arr[i][j] !== 1) return false;
        }
    }
    return true;
}
function solution(key, lock) {
    let answer = false;
    const M = key.length;
    const N = lock.length;
    const extendedLock = Array.from({length: N * 3}, () => Array(N * 3).fill(null));
    
    // key에 있는 돌기의 갯수가 lock의 홈 갯수보다 작으면 열쇠로 자물쇠를 열수 없음
    if (key.flat().filter(x => x === 1) < lock.flat().filter(x => x === 0)) return false;  
    
    for (let i = N; i < N * 2; i++) {
        for (let j = N; j < N * 2; j++) {
            extendedLock[i][j] = lock[i - N][j - N];
        }
    }
let currKey = Array.from(key);
    for (let x = 0; x < 4; x++) {
        for (let i = 0; i <= extendedLock.length - M; i++) {
            for (let j = 0; j <= extendedLock.length - M; j++) {
                const newLock = extendedLock.map((arr) => arr.slice());
for (let a = 0; a < M; a++) {
                    for (let b = 0; b < M; b++) {
                        newLock[i + a][j + b] = extendedLock[i + a][j + b] + currKey[a][b];
                    }
                }
                if (checkMatch(newLock, N)) return true;
            }
        }
// 시계방향으로 90도 회전
        currKey = rotate(currKey);
    }
    
    return answer;
}