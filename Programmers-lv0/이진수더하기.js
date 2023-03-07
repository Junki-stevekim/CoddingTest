// // 문제 설명
// // 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.


// 입출력 예 설명
// 입출력 예 #1

// 10 + 11 = 101 이므로 "101" 을 return합니다.
// 입출력 예 #2

// 1001 + 1111 = 11000 이므로 "11000"을 return합니다.




function solution(bin1, bin2) {
    const sum = parseInt(bin1, 2) + parseInt(bin2, 2)
    return sum.toString(2)
}