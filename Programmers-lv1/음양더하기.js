// // 문제 설명
// // 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.


// 입출력 예 설명
// 입출력 예 #1

// signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
// 따라서 세 수의 합인 9를 return 해야 합니다.
// 입출력 예 #2

// signs가 [false,false,true] 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.
// 따라서 세 수의 합인 0을 return 해야 합니다.


function solution(absolutes, signs) {
    // 연산 결과를 저장할 변수
    let result = 0;
    // signs의 각 요소에 대해
    signs.forEach((e, i) => {
      // 요소가 true이면 result값에 같은 인덱스의 absolutes 요소를 더해줌
      if (e) result += absolutes[i];
      // 요소가 false이면 result값에 같은 인덱스의 absolutes 요소를 빼줌
      else result -= absolutes[i];
    });
    // result 반환
    return result;
  }