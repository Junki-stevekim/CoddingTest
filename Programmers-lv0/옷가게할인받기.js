// // 문제 설명
// // 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// // 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.


// 입출력 예 설명
// 입출력 예 #1

// 150,000원에서 5%를 할인한 142,500원을 return 합니다.
// 입출력 예 #2

// 580,000원에서 20%를 할인한 464,000원을 return 합니다.



//걸린시간 : 10분 -> 초기 if문 값을 10만원으로 설정했더니 계속테스트에러.. 초기값을 50만원을 주고 순차적으로 할인율을 적용해서 값을 구해야 에러발생이없었다.
function solution(price) {
    var answer = 0;
    
    if(price >=500000){
        return Math.floor(price * 0.8); //20%할인 -> *0.8
    }else if (price >=300000){
        return Math.floor(price * 0.9); // 10프로할인 -> *0.9
    }else if(price >= 100000){
           return Math.floor(price * 0.95); // 5프로할인 -> *0.95
    }
    
    return price;
}