// 문제 설명
// 정우는 예술적 감각이 뛰어난 타일공입니다. 그는 단순한 타일을 활용하여 불규칙하면서도 화려하게 타일링을 하곤 합니다.

// 어느 날 정우는 가로 길이 n, 세로 길이 3 인 판을 타일링하는 의뢰를 맡았습니다. 아방가르드한 디자인 영감이 떠오른 정우는 다음과 같은 두 가지 종류의 타일로 타일링을 하기로 결정했습니다.
// 그림1.png
// 각 타일은 90도씩 회전할 수 있으며 타일의 개수는 제한이 없습니다.

// n이 주어졌을 때, 이 두 가지 종류의 타일로 n x 3 크기의 판을 타일링하는 방법의 수를 return 하도록 solution 함수를 완성해주세요.

// 제한 사항
// 1 ≤ n ≤ 100,000
// 결과는 매우 클 수 있으므로 1,000,000,007 로 나눈 나머지를 return합니다.
// 입출력 예
// n	result
// 2	3
// 3	10
// 입출력 예 설명
// 입출력 예 #1
// 그림2.png
// 위 그림과 같이 3 가지 방법으로 타일링할 수 있습니다.

// 입출력 예 #2
// 그림3.png
// 위 그림과 같이 10 가지 방법으로 타일링할 수 있습니다.


function solution(n) {
    const mod = 1000000007;
    const dp = [1, 1, 3, 10, 23, 62];
    for (let i = 6; i <= n; i++) {
      dp[i] = (dp[i - 1] + dp[i - 2] * 2 + dp[i - 3] * 6 + dp[i - 4] - dp[i - 6] + mod) % mod;
    }
    return dp[n];
  }