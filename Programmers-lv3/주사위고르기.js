// 문제 설명
// A와 B가 n개의 주사위를 가지고 승부를 합니다. 주사위의 6개 면에 각각 하나의 수가 쓰여 있으며, 주사위를 던졌을 때 각 면이 나올 확률은 동일합니다. 각 주사위는 1 ~ n의 번호를 가지고 있으며, 주사위에 쓰인 수의 구성은 모두 다릅니다.

// A가 먼저 n / 2개의 주사위를 가져가면 B가 남은 n / 2개의 주사위를 가져갑니다. 각각 가져간 주사위를 모두 굴린 뒤, 나온 수들을 모두 합해 점수를 계산합니다. 점수가 더 큰 쪽이 승리하며, 점수가 같다면 무승부입니다.

// A는 자신이 승리할 확률이 가장 높아지도록 주사위를 가져가려 합니다.

// 다음은 n = 4인 예시입니다.

// 주사위	구성
// #1	[1, 2, 3, 4, 5, 6]
// #2	[3, 3, 3, 3, 4, 4]
// #3	[1, 3, 3, 4, 4, 4]
// #4	[1, 1, 4, 4, 5, 5]
// 예를 들어 A가 주사위 #1, #2를 가져간 뒤 6, 3을 굴리고, B가 주사위 #3, #4를 가져간 뒤 4, 1을 굴린다면 A의 승리입니다. (6 + 3 > 4 + 1)
// A가 가져가는 주사위 조합에 따라, 주사위를 굴린 1296가지 경우의 승패 결과를 세어보면 아래 표와 같습니다.

// A의 주사위	승	무	패
// #1, #2	596	196	504
// #1, #3	560	176	560
// #1, #4	616	184	496
// #2, #3	496	184	616
// #2, #4	560	176	560
// #3, #4	504	196	596
// A가 승리할 확률이 가장 높아지기 위해선 주사위 #1, #4를 가져가야 합니다.

// 주사위에 쓰인 수의 구성을 담은 2차원 정수 배열 dice가 매개변수로 주어집니다. 이때, 자신이 승리할 확률이 가장 높아지기 위해 A가 골라야 하는 주사위 번호를 오름차순으로 1차원 정수 배열에 담아 return 하도록 solution 함수를 완성해 주세요. 승리할 확률이 가장 높은 주사위 조합이 유일한 경우만 주어집니다.

// 제한사항
// 2 ≤ dice의 길이 = n ≤ 10
// n은 2의 배수입니다.
// dice[i]는 i+1번 주사위에 쓰인 6개의 수를 담고 있습니다.
// dice[i]의 길이 = 6
// 1 ≤ dice[i]의 원소 ≤ 100
// 입출력 예
// dice	result
// [[1, 2, 3, 4, 5, 6], [3, 3, 3, 3, 4, 4], [1, 3, 3, 4, 4, 4], [1, 1, 4, 4, 5, 5]]	[1, 4]
// [[1, 2, 3, 4, 5, 6], [2, 2, 4, 4, 6, 6]]	[2]
// [[40, 41, 42, 43, 44, 45], [43, 43, 42, 42, 41, 41], [1, 1, 80, 80, 80, 80], [70, 70, 1, 1, 70, 70]]	[1, 3]
// 입출력 예 설명
// 입출력 예 #1

// 문제 예시와 같습니다.

// 입출력 예 #2

// 주사위	구성
// #1	[1, 2, 3, 4, 5, 6]
// #2	[2, 2, 4, 4, 6, 6]
// A가 주사위 #2를 가져갔을 때 승리할 확률이 가장 높습니다. A가 #2, B가 #1 주사위를 굴린 결과에 따른 승패는 아래 표와 같습니다.

// 주사위 결과	1 (B)	2 (B)	3 (B)	4 (B)	5 (B)	6 (B)
// 2 (A)	승	무	패	패	패	패
// 2 (A)	승	무	패	패	패	패
// 4 (A)	승	승	승	무	패	패
// 4 (A)	승	승	승	무	패	패
// 6 (A)	승	승	승	승	승	무
// 6 (A)	승	승	승	승	승	무
// 입출력 예 #3

// 주사위	구성
// #1	[40, 41, 42, 43, 44, 45]
// #2	[43, 43, 42, 42, 41, 41]
// #3	[1, 1, 80, 80, 80, 80]
// #4	[70, 70, 1, 1, 70, 70]
// A가 가져가는 주사위 조합에 따라, 주사위를 굴린 1296가지 경우의 승패 결과를 세어보면 아래 표와 같습니다.

// A의 주사위	승	무	패
// #1, #2	704	16	576
// #1, #3	936	24	336
// #1, #4	360	24	912
// #2, #3	912	24	360
// #2, #4	336	24	936
// #3, #4	576	16	704
// 따라서 A가 주사위 #1, #3을 가져갔을 때 승리할 확률이 가장 높습니다.

function solution(dice) {
    const len = dice.length;
    const groupSize = len / 2;
    const dices = new Array(len).fill(0).map((_,index)=>index+1)
    
    // A가 뽑을 조합의 경우를 구하는 함수
    const getCombinations = (array, selectNumber) => {
        const results = [];
        
        if(selectNumber === 1){
            return array.map((element) => [element]);
        }
        
        array.forEach((fixed, index, origin) => {
            const rest = origin.slice(index+1);
            const combinations = getCombinations(rest, selectNumber - 1);
            const attached = combinations.map((combination) => [fixed, ...combination]);
            results.push(...attached);
        });
        
        return results;
    }
    
    // A가 가지는 주사위 조합을 저장
    const groups = getCombinations(dices, groupSize);
    const oppoGroups = groups.map((elemA) => {
        return dices.filter(elemB => !elemA.includes(elemB));
    })
    
    // 선택한 주사위로 가질 수 있는 모든 합을 구하는 함수
    const getSums = (combo) => {
        const sums = [];
    
        const calSums = (count, sum) => {
            if (count === groupSize) {
                sums.push(sum);
                return;
            }
            
            for (let i=0; i<6; i++) {
                calSums(count + 1, sum + dice[combo[count] - 1][i]);
            }
        }
        calSums(0,0)
        
        return sums.sort((a,b) => a-b);
    }
        
    // A가 가질 수 있는 경우 하나에 대해 B가 가지는 주사위를 구하고
    // A의 모든 합과 B의 모든 합을 비교해서 
    // A가 이기는 경우의 수가 가장 큰 것을 고른다.
    
    let answer;
    let wins = 0;
    const groupLen = groups.length;
    
    for (let k=0; k < groupLen; k++) {
        let nowWins = 0;
        
        const sumA = getSums(groups[k]);
        const sumB = getSums(oppoGroups[k]);
        
        const lenA = sumA.length;
        const lenB = sumB.length;
        
        let pointer = 0;
        
        for (let i=0; i<lenA; i++) {
            for (let j=pointer; j<lenB; j++) {
                if (sumA[i] <= sumB[j]) { 
                    pointer = j;
                    break; 
                }
                nowWins++;
            }
            nowWins += pointer
        }
        
        if (nowWins > wins) {
            wins = nowWins;
            answer = groups[k];
        }
    }
    
    return answer;    
}