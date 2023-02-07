// // 문제 설명
// // 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.


// 입출력 예 설명
// 입출력 예 #1

// 소문자는 대문자로 대문자는 소문자로 바꾼 "CCCccc"를 return합니다.
// 입출력 예 #2

// 소문자는 대문자로 대문자는 소문자로 바꾼 "ABcDeFGHij"를 return합니다.

function solution(my_string) {
    let answer = '';
    
    for(let i = 0; i < my_string.length; i++) {
        let ch = my_string.charAt(i);
        
        if('a'.charCodeAt() <= ch.charCodeAt() && ch.charCodeAt() <= 'z'.charCodeAt()) {
            answer += ch.toUpperCase();
        }else if('A'.charCodeAt() <= ch.charCodeAt() && ch.charCodeAt() <= 'Z'.charCodeAt()) {
            answer += ch.toLowerCase();
        } else {
            answer += ch;
        }
    }
    
    return answer;
}