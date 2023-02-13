// // 제곱수 판별하기
// // 문제 설명
// // 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.


// 입출력 예 설명
// 입출력 예 #1

// 144는 12의 제곱이므로 제곱수입니다. 따라서 1을 return합니다.
// 입출력 예 #2

// 976은 제곱수가 아닙니다. 따라서 2를 return합니다.


function solution(n) {
    var answer = 0;
    //Math.sqrt(x) : 숫자 x의 제곱근을 반환한다.
    let sqrtOfnumber= Math.sqrt(n);
    
    // 제곱수판별 => 정수 n과 제곱근을 나눠서 나머지를 확인하여판별
    if(n % sqrtOfnumber === 0){
        answer = 1;
    }else{
        
        answer = 2;
    }
    return answer;
}