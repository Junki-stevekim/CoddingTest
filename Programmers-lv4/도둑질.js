// 문제 설명
// 도둑이 어느 마을을 털 계획을 하고 있습니다. 이 마을의 모든 집들은 아래 그림과 같이 동그랗게 배치되어 있습니다.

// image.png

// 각 집들은 서로 인접한 집들과 방범장치가 연결되어 있기 때문에 인접한 두 집을 털면 경보가 울립니다.

// 각 집에 있는 돈이 담긴 배열 money가 주어질 때, 도둑이 훔칠 수 있는 돈의 최댓값을 return 하도록 solution 함수를 작성하세요.

// 제한사항
// 이 마을에 있는 집은 3개 이상 1,000,000개 이하입니다.
// money 배열의 각 원소는 0 이상 1,000 이하인 정수입니다.
// 입출력 예
// money	return
// [1, 2, 3, 1]	4


function solution(money) {
    const n = money.length;

    // 첫 번째 집을 털 경우
    const dp1 = Array(n).fill(0);
    dp1[0] = money[0];
    dp1[1] = Math.max(money[0], money[1]);
    for (let i = 2; i < n - 1; i++) {  // n-1 집까지만 고려합니다.
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + money[i]);
    }

    // 마지막 집을 털 경우
    const dp2 = Array(n).fill(0);
    dp2[0] = 0;  // 첫 번째 집은 털지 않습니다.
    dp2[1] = money[1];
    for (let i = 2; i < n; i++) {
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + money[i]);
    }

    // dp1은 마지막 집을 털지 않았으므로 -2가 가장 큰 값, dp2는 털었으므로 -1이 가장 큰 값
    return Math.max(dp1[n - 2], dp2[n - 1]);
}