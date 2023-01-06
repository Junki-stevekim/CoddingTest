// // 문제 설명
// // 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.


// 입출력 예 설명
// 입출력 예 #1

// "hello"의 각 문자를 세 번씩 반복한 "hhheeellllllooo"를 return 합니다.


// 걸린시간 - 15분 
function solution(my_string, n) {
    var answer = '';
    let cnt =0 ;
    while(cnt < my_string.length){ //배열을 반복해서 원소를 꺼내주고, answer에 값을 더해준다.
        const repeatCharacter =my_string[cnt];
        let repeatCnt = 0 ;
        while(repeatCnt < n){
            answer = answer + repeatCharacter;
            repeatCnt = repeatCnt + 1;
        }
        
        cnt = cnt+1;
    }
    return answer;
}