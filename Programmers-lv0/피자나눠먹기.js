// // 문제 설명
// // 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

// 입출력 예 설명
// 입출력 예 #1

// 7명이 최소 한 조각씩 먹기 위해서 최소 1판이 필요합니다.
// 입출력 예 #2

// 1명은 최소 한 조각을 먹기 위해 1판이 필요합니다.
// 입출력 예 #3

// 15명이 최소 한 조각씩 먹기 위해서 최소 3판이 필요합니다.

// 걸린시간 : 10분 -> 삼항연산자 사용! 피자한판에 7조각이니 매개변수로 들어오는 피자판수를 7로 나눠서 계산
function solution(n) {
    return  n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
}

// 피자를 먹는 사람 -> n명 (매개변수)
// 7명 ->1판, 1명 ->1판 15명 -> 3판...
// 모든사람이 한조각 이상 먹기위한 피자의수?
// -> 피자 한판을 n명으로 나눈다?
//1. 7조각을 1~7명이 먹을때 => 1판
//2. 7조각 8~14명 => 2판
// 3. 7조각 15~21명 => 3판
///4. 7조각 22~28명 =>4판