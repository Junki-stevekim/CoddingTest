// // 문제 설명
// // 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.


// 입출력 예 설명
// 입출력 예 #1

// "aAb1B2cC34oOp"안의 한자리 자연수는 1, 2, 3, 4 입니다. 따라서 1 + 2 + 3 + 4 = 10 을 return합니다.
// 입출력 예 #2

// "1a2b3c4d123Z"안의 한자리 자연수는 1, 2, 3, 4, 1, 2, 3 입니다. 따라서 1 + 2 + 3 + 4 + 1 + 2 + 3 = 16 을 return합니다.


// 걸린시간 : 20분
function solution(my_string) {
    const num = my_string.split("");
    let result = 0;
    
    for(let i = 0; i < num.length; i++){
      //하나하나 잘렸을 때 number면 result에 담아서 더해주는 코드
      //split하면 배열로 만들어지니 forEach로 넣어도 될것같음!
      if(Number(num[i])) 
      result += Number(num[i])
    }
    return result
  }