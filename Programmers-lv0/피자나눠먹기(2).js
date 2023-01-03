// 

// 걸린시간 -> 8분. 간단한? 수학문제였으나 규칙생각하느라 오래걸렸다!.
function solution(n) {
    var answer = 0;
    let pizzaCount = 1;
    while(true){
        if(pizzaCount * 6 % n ===0){
            answer = pizzaCount;
            break;
        }
        pizzaCount = pizzaCount +1;
    }
    return answer;
}


// 한판에 6조각 . 
// 1명 -> 1판. 2명 ->1판. 3명->1판..
// 4명 -> 2(12조각판 5명->5판(30조각)
// 피자판수에 조각을 곱해주고  n명으로 나눌때 나누어지면 정답.