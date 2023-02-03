// // 문제 설명
// // 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

// // 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// // 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

// 입출력 예 설명
// 입출력 예 #1

// 가장 큰 변인 3이 나머지 두 변의 합 3과 같으므로 삼각형을 완성할 수 없습니다. 따라서 2를 return합니다.
// 입출력 예 #2

// 가장 큰 변인 6이 나머지 두 변의 합 5보다 크므로 삼각형을 완성할 수 없습니다. 따라서 2를 return합니다.
// 입출력 예 #3

// 가장 큰 변인 222가 나머지 두 변의 합 271보다 작으므로 삼각형을 완성할 수 있습니다. 따라서 1을 return합니다.

function solution(sides) {
    var answer = 0;
    // sides 를 계산하기 쉽게 오름차순으로 정렬해줍니다.
    sides.sort(function(a, b)  {
        return a - b;
    });
    
    // for 문으로 i 를 sides 배열 총 갯수만큼 차차 차차차 증가시켜줍니다.
    for(let i=0; i<sides.length; i++){
        // if 문을 사용해 sides[2]와 sides[0] + sides[1]의 값이 같을 때
        if(sides[2] >= sides[0] + sides[1]){
            // answer 에 2를 대입
            answer = 2;
        // 그게 아니라면
        } else {
            // answer 에 1 을 대입해줍니다.
            answer = 1;
        }
    }
    return answer;
}