// // 문제 설명
// // 머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.


// 입출력 예 설명
// 입출력 예 #1

// ["aya", "yee", "u", "maa"]에서 발음할 수 있는 것은 "aya"뿐입니다. 따라서 1을 return합니다.
// 입출력 예 #2

// ["ayaye", "uuuma", "yeye", "yemawoo", "ayaayaa"]에서 발음할 수 있는 것은 "aya" + "ye" = "ayaye", "ye" + "ma" + "woo" = "yemawoo"로 2개입니다. "yeye"는 같은 발음이 연속되므로 발음할 수 없습니다. 따라서 2를 return합니다.


function solution(babbling) {
    let answer = 0;
  
    // forEach() 메서드로 babbling을 하나씩 확인합니다.
    for (let word of babbling) {
  
      // 정규식을 이용하여 연속된 같은 발음이 있는지 체크합니다.
      // 연속된 같은 발음이 있다면 continue를 통해 다음 단어로 넘어갑니다.
      if (/(aya|ye|woo|ma)\1+/g.test(word)) continue;
  
      // 정규식을 이용해 발음할 수 있는 단어만 있는지 체크합니다.
      // 발음할 수 있는 단어만 있다면 answer을 1 증가시킵니다.
      if (/^(aya|ye|woo|ma)+$/g.test(word)) {
        answer++;
      }
    }
  
    return answer;
  }