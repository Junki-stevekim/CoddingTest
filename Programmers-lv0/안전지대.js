// // 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
// // image.png
// // 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
// // 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.



// 입출력 예 설명
// 입출력 예 #1

// (3, 2)에 지뢰가 있으므로 지뢰가 있는 지역과 지뢰와 인접한 위, 아래, 좌, 우, 대각선 총 8칸은 위험지역입니다. 따라서 16을 return합니다.
// 입출력 예 #2

// (3, 2), (3, 3)에 지뢰가 있으므로 지뢰가 있는 지역과 지뢰와 인접한 위, 아래, 좌, 우, 대각선은 위험지역입니다. 따라서 위험지역을 제외한 칸 수 13을 return합니다.
// 입출력 예 #3

// 모든 지역에 지뢰가 있으므로 안전지역은 없습니다. 따라서 0을 return합니다.


function solution(board) {
    let result = 0
    // 전체 순회
    for(let i = 0 ; i < board.length ; i ++) {
        for(let j = 0 ; j < board[i].length ; j ++) {
            // board[i][j]의 값이 1인경우 상하좌우 및 대각선 검사를 실행
            if(board[i][j] === 1) {
                // 상하 좌우를 2로 변경하되 이는 해당 칸이 0인 경우에만 해당 즉 폭탄은 건들지 않는다.
                // 맨 윗줄이 아닌 경우
                if(i !== 0 && board[i-1][j] !== 1) {
                    board[i-1][j] = 2    
                }
                // 맨 아랫줄이 아닌 경우
                if(i !== board.length-1 && board[i+1][j] !== 1) {
                    board[i+1][j] = 2
                }
                // 맨 왼쪽이 아닌 경우
                if(j !== 0 && board[i][j-1] !== 1) {
                    board[i][j-1] = 2
                }
                // 맨 오른쪽이 아닌 경우
                if(j !== board[i].length-1 && board[i][j+1] !== 1) {
                    board[i][j+1] = 2
                }
                // 맨 대각선 윗 왼쪽이 아닌 경우
                if(i !== 0 && j !== 0 && board[i-1][j-1] !== 1) {
                    board[i-1][j-1] = 2
                }
                // 맨 대각선 윗 오른쪽이 아닌 경우
                if(i !== 0 && j !== board[i].length-1 && board[i-1][j+1] !== 1) {
                    board[i-1][j+1] = 2
                }
                // 맨 대각선 아랫 왼쪽이 아닌 경우
                if(i !== board.length-1 && j !== 0 && board[i+1][j-1] !== 1) {
                    board[i+1][j-1] = 2
                }
                // 맨 대각선 아랫 오른쪽이 아닌 경우
                if(i !== board.length-1 && j !== board[i].length-1 && board[i+1][j+1] !== 1) {
                    board[i+1][j+1] = 2
                }
            }
        }
    }
    board.forEach(a => a.forEach(b => b === 0 ? result++ : null))
    return result
}