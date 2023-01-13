// /* 문제 설명
// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
// */


// 입출력 예 설명
// 입출력 예 #1

// 10 이하 합성수는 4, 6, 8, 9, 10 로 5개입니다. 따라서 5를 return합니다.
// 입출력 예 #1

// 15 이하 합성수는 4, 6, 8, 9, 10, 12, 14, 15 로 8개입니다. 따라서 8을 return합니다.

// 걸린시간 : 30분
function solution(n) {
    let count = 0
    for(let i = 1 ; i <= n; i ++) {
        isMixNumber(i) ? count++ : null
    }
    return count
}

// 합성수인지 판별하는 함수
function isMixNumber(num) {
    let count = 0
    // 약수의 개수를 셈
    for(let i = 1 ; i <= (num/2)<<0 ; i ++) {
        num%i === 0 ? count++ : null
    }
    return count >= 2 ? true : false
}