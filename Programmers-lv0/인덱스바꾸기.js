// // 문제 설명
// // 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.


// 입출력 예 설명
// 입출력 예 #1

// "hello"의 1번째 인덱스인 "e"와 2번째 인덱스인 "l"을 바꾸면 "hlelo"입니다.
// 입출력 예 #2

// "I love you"의 3번째 인덱스 "o"와 " "(공백)을 바꾸면 "I l veoyou"입니다.

function solution(my_string, num1, num2) {
    const result = [...my_string]
     // num 간의 문자열을 변환함
     result.splice(num1, 1, my_string[num2])
     result.splice(num2, 1, my_string[num1])
     return result.join("")
 }