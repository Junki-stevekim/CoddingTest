// // 최댓값 만들기 (2)
// // 문제 설명
// // 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.


// 입출력 예 설명
// 입출력 예 #1

// 두 수의 곱중 최댓값은 -3 * -5 = 15 입니다.
// 입출력 예 #2

// 두 수의 곱중 최댓값은 10 * 24 = 240 입니다.
// 입출력 예 #3

// 두 수의 곱중 최댓값은 20 * 30 = 600 입니다.


function solution(numbers) {
    const BruteForce = []
    // 모든 경우의 수를 구함
    for(let i = 0 ; i < numbers.length; i ++) {
        for(let j = 0 ; j < numbers.length; j++) {
            if(i !== j) {
                BruteForce.push(numbers[i] * numbers[j])    
            }
        }
    }
    
    //최댓값 출력
    return Math.max(...BruteForce)
}