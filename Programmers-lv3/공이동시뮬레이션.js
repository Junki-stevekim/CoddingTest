// 문제 설명
// n행 m열의 격자가 있습니다. 격자의 각 행은 0, 1, ..., n-1번의 번호, 그리고 각 열은 0, 1, ..., m-1번의 번호가 순서대로 매겨져 있습니다. 당신은 이 격자에 공을 하나 두고, 그 공에 다음과 같은 쿼리들을 날리고자 합니다.

// 열 번호가 감소하는 방향으로 dx칸 이동하는 쿼리 (query(0, dx))
// 열 번호가 증가하는 방향으로 dx칸 이동하는 쿼리 (query(1, dx))
// 행 번호가 감소하는 방향으로 dx칸 이동하는 쿼리 (query(2, dx))
// 행 번호가 증가하는 방향으로 dx칸 이동하는 쿼리 (query(3, dx))
// 단, 공은 격자 바깥으로 이동할 수 없으며, 목적지가 격자 바깥인 경우 공은 이동하다가 더 이상 이동할 수 없을 때 멈추게 됩니다. 예를 들어, 5행 × 4열 크기의 격자 내의 공이 3행 2열에 있을 때 query(3, 10) 쿼리를 받은 경우 공은 4행 2열에서 멈추게 됩니다. (격자의 크기가 5행 × 4열이므로, 0~4번 행과 0~3번 열로 격자가 구성되기 때문입니다.)

// 격자의 행의 개수 n, 열의 개수 m, 정수 x와 y, 그리고 쿼리들의 목록을 나타내는 2차원 정수 배열 queries가 매개변수로 주어집니다. n × m개의 가능한 시작점에 대해서 해당 시작점에 공을 두고 queries 내의 쿼리들을 순서대로 시뮬레이션했을 때, x행 y열에 도착하는 시작점의 개수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 109
// 1 ≤ m ≤ 109
// 0 ≤ x < n
// 0 ≤ y < m
// 1 ≤ queries의 행의 개수 ≤ 200,000
// queries의 각 행은 [command,dx] 두 정수로 이루어져 있습니다.
// 0 ≤ command ≤ 3
// 1 ≤ dx ≤ 109
// 이는 query(command, dx)를 의미합니다.
// 입출력 예
// n	m	x	y	queries	result
// 2	2	0	0	[[2,1],[0,1],[1,1],[0,1],[2,1]]	4
// 2	5	0	1	[[3,1],[2,2],[1,1],[2,3],[0,1],[2,1]]	2
// 입출력 예 설명
// 입출력 예 #1

// 다음 애니메이션은 4개의 가능한 시작점에 대한 모든 시뮬레이션을 나타낸 것입니다.
// ex1

// 어떤 곳에서 출발하더라도 항상 0행 0열에 도착하기 때문에, 4를 return 해야 합니다.
// 입출력 예 #2

// 다음 애니메이션은 10개의 가능한 시작점에 대한 모든 시뮬레이션을 나타낸 것입니다.
// ex2

// 0행 1열, 1행 1열에서 출발했을 때만 0행 1열에 도착하므로, 2를 return 해야 합니다.

function solution(n, m, x, y, queries) {
    // 방향 벡터를 설정합니다.
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    // 다음 범위를 계산하는 함수를 정의합니다.
    // 이 함수는 현재 범위(s, e)와 이동량, 그리고 최대값을 인자로 받아
    // 이동 후의 범위를 반환합니다.
    function calNextRange(s, e, move, max) {
        // 이동 후의 시작점과 종료점을 계산합니다.
        const nextS = (s === 0 && move > 0) ? 0 : s + move;
        const nextE = (e === max - 1 && move < 0) ? max - 1 : e + move;

        // 시작점과 종료점이 모두 범위를 벗어난 경우
        if ((nextS < 0 || nextS >= max) && (nextE < 0 || nextE >= max)) {
            return [-1, -1];
        }
        // 시작점만 범위를 벗어난 경우
        if (nextS < 0 && nextE >= 0 && nextE < max) {
            return [0, nextE];
        }
        // 종료점만 범위를 벗어난 경우
        if (nextE >= max && nextS >= 0 && nextS < max) {
            return [nextS, max - 1];
        }
        // 시작점과 종료점이 모두 범위 내에 있는 경우
        return [nextS, nextE];
    }

    // 시작점과 종료점을 설정합니다.
    let [sx, ex, sy, ey] = [x, x, y, y];

    // 쿼리들을 역순으로 처리합니다.
    for (let i = queries.length - 1; i >= 0; i--) {
        const [dir, cnt] = queries[i];

        // y 좌표를 기준으로 처리합니다.
        if (dir === 0 || dir === 1) {
            const res = calNextRange(sy, ey, cnt * dy[dir], m);
            if (res[0] === -1) return 0;
            [sy, ey] = res;
        } 
        // x 좌표를 기준으로 처리합니다.
        else {
            const res = calNextRange(sx, ex, cnt * dx[dir], n);
            if (res[0] === -1) return 0;
            [sx, ex] = res;
        }
    }
    // x 범위와 y 범위에 속하는 점의 개수를 곱하여 반환합니다.
    return BigInt(ex - sx + 1) * BigInt(ey - sy + 1);
}