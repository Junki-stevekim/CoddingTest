// // 문제 설명
// // "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.


// 입출력 예 설명
// 입출력 예 #1

// n이 3이므로 첫째 줄에 * 1개, 둘째 줄에 * 2개, 셋째 줄에 * 3개를 출력합니다.


//걸린시간 20분 -> 갈수록 어려워진다...
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n =(Number(input[0]));
    let line =1; // line별로 *자를 반복문을 돌려 추가해준다.
    while(line <= n){
        
        let starStr="";
        let cnt =0;
        while(cnt <line){
            
            starStr = starStr+"*"
            cnt = cnt+1;
        }
        
        console.log(starStr);
        line = line + 1;
    }
    
});