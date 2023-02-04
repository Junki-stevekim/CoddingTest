// // 문제 설명
// // 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.


// 입출력 예 설명
// 입출력 예 #1

// 3, 10, 28 중 20과 가장 가까운 수는 28입니다.
// 입출력 예 #2

// 10, 11, 12 중 13과 가장 가까운 수는 12입니다.

function solution(array, n) {
    let answer = [];
    
    array.forEach((item) => {
        answer.push(Math.abs(item - n));
    })
    
    const min = Math.min(...answer);
    
    let check = [];
    
    for(let index = 0; index < answer.length; index++){
        if(answer[index] === min){
            check.push(array[index]);
        }
    }
    
    return Math.min(...check);
}