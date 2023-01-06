// // 문제 설명
// // 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

// 입출력 예 설명
// 입출력 예 #1

// "abcdef" 에서 "f"를 제거한 "abcde"를 return합니다.
// 입출력 예 #2

// "BCBdbe" 에서 "B"를 모두 제거한 "Cdbe"를 return합니다.


// 걸린시간 - 20분
function solution(my_string, letter) {
    var answer = ''; 
    let cnt =0;
    while(cnt<my_string.length){ //반복해서 값을 꺼내주고, 들어있지않은 문자를 추가해준다.
        if(my_string[cnt] !== letter){ //letter에 들어있지 않은 문자를 추가
            answer = answer + my_string[cnt];
        }
        cnt = cnt+1;
    }
    return answer;
}