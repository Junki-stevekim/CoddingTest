// // 문제 설명
// // 문자열 s가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 합니다.

// // 먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
// // 이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다. 처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
// // s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다.
// // 만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료합니다.
// // 문자열 s가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, 분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.


// 입출력 예 설명
// 입출력 예 #1
// s="banana"인 경우 ba - na - na와 같이 분해됩니다.

// 입출력 예 #2
// s="abracadabra"인 경우 ab - ra - ca - da - br - a와 같이 분해됩니다.

// 입출력 예 #3
// s="aaabbaccccabba"인 경우 aaabbacc - ccab - ba와 같이 분해됩니다.


function solution(s) {
    let answer = 0;
    let fixedChar = "";
    let cnt1 = 0;
    let cnt2 = 0;
  
    // 문자를 for of 문으로 하나씩 확인한다.
    for (let c of s) {
  
      // 첫 문자를 알아야하기 때문에
      // 미리 선언해둔 fixedChar이 공백이면
      // 첫 문자를 fixedChar에 넣어준다.
      if (!fixedChar) fixedChar = c;
      
      // 첫 문자와 들어온 c가 같다면 cnt1를 증가시킨다.
      if(fixedChar === c) cnt1++;
      // 첫 문자와 다르다면 cnt2를 증가시킨다.
      else cnt2++;
  
      // cnt1과 cnt2의 숫자가 같아지면
      // answer를 1 증가시키고 나머지를 초기화 한다.
      if (cnt1 === cnt2) {
          answer++;
          cnt1 = 0;
          cnt2 = 0;
          fixedChar = "";
      }
    }
  
    // 반복문이 끝났는데 fixedChar이 남아있는 경우는
    // 잔여 문자가 남아있는 경우이므로 answer을 1 증가시킨다.
    if (fixedChar) answer++;
  
    return answer;
  }