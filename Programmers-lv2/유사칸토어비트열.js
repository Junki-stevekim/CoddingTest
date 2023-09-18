// 문제 설명
// 수학에서 칸토어 집합은 0과 1 사이의 실수로 이루어진 집합으로, [0, 1]부터 시작하여 각 구간을 3등분하여 가운데 구간을 반복적으로 제외하는 방식으로 만들어집니다.

// 남아는 칸토어 집합을 조금 변형하여 유사 칸토어 비트열을 만들었습니다. 유사 칸토어 비트열은 다음과 같이 정의됩니다.

// 0 번째 유사 칸토어 비트열은 "1" 입니다.
// n(1 ≤ n) 번째 유사 칸토어 비트열은 n - 1 번째 유사 칸토어 비트열에서의 1을 11011로 치환하고 0을 00000로 치환하여 만듭니다.
// 남아는 n 번째 유사 칸토어 비트열에서 특정 구간 내의 1의 개수가 몇 개인지 궁금해졌습니다.
// n과 1의 개수가 몇 개인지 알고 싶은 구간을 나타내는 l, r이 주어졌을 때 그 구간 내의 1의 개수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 20
// 1 ≤ l, r ≤ 5n
// l ≤ r < l + 10,000,000
// l과 r은 비트열에서의 인덱스(1-base)이며 폐구간 [l, r]을 나타냅니다.
// 입출력 예
// n	l	r	result
// 2	4	17	8
// 입출력 예 설명
// 2 번째 유사 칸토어 비트열은 "1101111011000001101111011" 입니다. 음영 표시된 부분은 폐구간 [4, 17] 이며 구간 내의 1은 8개 있습니다.


function solution(n, l, r) {
    const oneCnt = [0,1,2,2,3,4]
    
    const recur = (n,pos) => {
        
        if (n==1) return oneCnt[pos]
        const [share,remain] = [~~(pos/(5 ** (n-1))),pos%(5 ** (n-1))]
        
        if (share<2) return 4**(n-1) * share + recur(n-1,remain) 
        else if (share === 2) return 2 * 4**(n-1)
        else return 4**(n-1) * (share-1) + recur(n-1,remain)
        
    }
    return recur(n,r) - recur(n,l-1)
}