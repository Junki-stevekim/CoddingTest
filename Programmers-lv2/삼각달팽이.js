// 정수 n이 매개변수로 주어집니다. 다음 그림과 같이 밑변의 길이와 높이가 n인 삼각형에서 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행한 후, 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return 하도록 solution 함수를 완성해주세요.

// examples.png

// 제한사항
// n은 1 이상 1,000 이하입니다.
// 입출력 예
// n	result
// 4	[1,2,9,3,10,8,4,5,6,7]
// 5	[1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
// 6	[1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]
// 입출력 예 설명
// 입출력 예 #1

// 문제 예시와 같습니다.
// 입출력 예 #2

// 문제 예시와 같습니다.
// 입출력 예 #3

// 문제 예시와 같습니다.

function solution(n) {
    let graph = [];
    let answer = [];
    //초기값을 위해서 -1로 변수 지정
    let y = -1
    let x = 0
    let number = 1
    // 요소가 모두 0인 배열 생성
    for (let i = 1; i < n + 1; i++) {
        let tmp = Array(i).fill(0)
        graph.push(tmp)
    }
    
    for (let i=0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // 밑으로 내려간다.
            if (i % 3 === 0) {
                y +=1
            // 오른쪽으로 간다.
            }else if (i % 3 === 1) {
                x += 1
            //위로 올라간다.
            }else{
                y -= 1
                x -= 1
            }
            graph[y][x] = number
            number += 1
        }
    }
    //graph[i]를 차례대로 answer에 추가
    for (let i = 0; i < n; i++) {
        answer = answer.concat(graph[i])
    }
    
    return answer;
}