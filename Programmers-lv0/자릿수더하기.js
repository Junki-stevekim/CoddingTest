// // 문제 설명
// // 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요


// 입출력 예 설명
// 입출력 예 #1

// 1 + 2 + 3 + 4 = 10을 return합니다.
// 입출력 예 #2

// 9 + 3 + 0 + 2 + 1 + 1 = 16을 return합니다.


function solution(n) {
    let answer = 0;
    // 정수n을 문자열로변환
    let eachNumber= n.toString();
    // 문자열로 변환한 정수n을 나눠주기
    let splitEachNumber=eachNumber.split("");
    
    //반복문을 통해 각각의자리수 숫자로변환후 더해주기
    for(let i=0; i<splitEachNumber.length; i++){
        answer += Number(splitEachNumber[i]);
    }
    return answer;
}