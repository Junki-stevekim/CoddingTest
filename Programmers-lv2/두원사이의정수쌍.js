// 문제 설명
// x축과 y축으로 이루어진 2차원 직교 좌표계에 중심이 원점인 서로 다른 크기의 원이 두 개 주어집니다. 반지름을 나타내는 두 정수 r1, r2가 매개변수로 주어질 때, 두 원 사이의 공간에 x좌표와 y좌표가 모두 정수인 점의 개수를 return하도록 solution 함수를 완성해주세요.
// ※ 각 원 위의 점도 포함하여 셉니다.

// 제한 사항
// 1 ≤ r1 < r2 ≤ 1,000,000
// 입출력 예
// r1	r2	result
// 2	3	20
// 입출력 예 설명
// 입출력 예 설명.png
// 그림과 같이 정수 쌍으로 이루어진 점은 총 20개 입니다.


function solution(r1, r2) {
    var answer = 0;
    let smallR = Math.min(r1, r2)
    let bigR = Math.max(r1, r2)
    let smallRsqr = smallR * smallR
    let bigRsqr = bigR * bigR
    
    // smallRsqr <= x*x + y*y <= bigRsqr
    // smallRsqr - x*x <= y*y <= bigRsqr - x*x
    // x 는 0일때 구하고, y는 0일때 안구한 1사분면에 4곱하면 정답
    
    for(let x = 0 ; x <= bigR; x++){
        let yMin
        if(smallRsqr - x*x <= 0)
            yMin = 1
        else 
            yMin = Math.ceil(Math.sqrt(smallRsqr - x*x))
        let yMax = parseInt(Math.sqrt(bigRsqr - x*x))
        answer+= yMax - yMin + 1
    }
    
    return answer*4;
}