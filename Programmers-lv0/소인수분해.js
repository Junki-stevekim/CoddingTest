// // 문제 설명
// // 소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.


// 입출력 예 설명
// 입출력 예 #1

// 12를 소인수분해하면 2 * 2 * 3 입니다. 따라서 [2, 3]을 return합니다.
// 입출력 예 #2

// 17은 소수입니다. 따라서 [17]을 return 해야 합니다.
// 입출력 예 #3

// 420을 소인수분해하면 2 * 2 * 3 * 5 * 7 입니다. 따라서 [2, 3, 5, 7]을 return합니다.


function solution(n) {
    const smallNumber = []
    let idx = 2
    // n이 0이 될때까지
    while(n !== 1) {
        // n의 약수라면 배열에 추가
        if(n%idx === 0) {
            smallNumber.push(idx)
            n/=idx
            idx = 2
        } else {
            idx += 1
        }
    }
    // 중복 제거하여 반환
    return Array.from(new Set(smallNumber))
}