// // 문제 설명
// // 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.


// 입출력 예 설명
// 입출력 예 #1

// numbers 가 [1, 2, 3]이고 direction이 "right" 이므로 오른쪽으로 한 칸씩 회전시킨 [3, 1, 2]를 return합니다.
// 입출력 예 #2

// numbers 가 [4, 455, 6, 4, -1, 45, 6]이고 direction이 "left" 이므로 왼쪽으로 한 칸씩 회전시킨 [455, 6, 4, -1, 45, 6, 4]를 return합니다.

//걸린시간 -> 25분 JS의 내장 배열 메소드를 사욯아지말고 원시적으로 풀어보자.
// right -> 마지막원소를 처음에 넣어주고  첫번째 원소를맨마지막에 넣어줌.
// left = 첫번째 원소를 제외한 나머지원소를 넣어주고,마지막에 첫번째 원소를 넣어준다
function solution(numbers, direction) {
    const answer = [];
    if(direction === 'right'){
    answer.push(numbers[numbers.length-1]); //마지막원소를 첫째에넣어준다.
        for(let i=0; i<numbers.length-1; i++){
            answer.push(numbers[i]);
        }
        }else{
            for(let i=1; i<numbers.length; i++){
                answer.push(numbers[i]); //첫번째원소를 제외하고 넣어줌
            }
            answer.push(numbers[0]); //첫번째원소를마지막에넣어줌
        }
    return answer;
}
