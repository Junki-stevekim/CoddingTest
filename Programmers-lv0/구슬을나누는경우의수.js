// // 문제 설명
// // 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

// 입출력 예 #1

// 서로 다른 구슬 3개 중 2개를 고르는 경우의 수는 3입니다.
// 입출력 예 #2

// 서로 다른 구슬 5개 중 3개를 고르는 경우의 수는 10입니다


//걸린시간 : 35분 기본수학 팩토리얼을 이용해서 푸는문제. 테스트 케이스에서 30이상의 수는 변수범위초과로 BigInt활용하여 풀이.
function factorial(n){
    let bigN = BigInt(n);
    
    if(bigN === BigInt(1) || bigN === BigInt(0)){
        return BigInt(1);
    }
    
    return bigN * factorial(bigN - BigInt(1));
}

function solution(balls, share) {
    const n = balls;
    const m = share;
    
    return factorial(n) / (factorial(n - m) * factorial(m));  
}