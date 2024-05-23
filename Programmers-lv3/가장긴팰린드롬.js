// 문제 설명
// 앞뒤를 뒤집어도 똑같은 문자열을 팰린드롬(palindrome)이라고 합니다.
// 문자열 s가 주어질 때, s의 부분문자열(Substring)중 가장 긴 팰린드롬의 길이를 return 하는 solution 함수를 완성해 주세요.

// 예를들면, 문자열 s가 "abcdcba"이면 7을 return하고 "abacde"이면 3을 return합니다.

// 제한사항
// 문자열 s의 길이 : 2,500 이하의 자연수
// 문자열 s는 알파벳 소문자로만 구성
// 입출력 예
// s	answer
// "abcdcba"	7
// "abacde"	3
// 입출력 예 설명
// 입출력 예 #1
// 4번째자리 'd'를 기준으로 문자열 s 전체가 팰린드롬이 되므로 7을 return합니다.

// 입출력 예 #2
// 2번째자리 'b'를 기준으로 "aba"가 팰린드롬이 되므로 3을 return합니다.

// ※ 공지 - 2023년 8월 21일 테스트케이스가 추가되었습니다. 기존에 제출한 코드가 통과하지 못할 수도 있습니다.


function solution(s) {
    let answer = 1;
    const len = s.length;
    const dp = new Array(len).fill().map(_ => new Array(len).fill(false));
    
    for(let i = 0; i < len; i++) {
      dp[i][i] = true;
    }
    
    for(let i = 0; i < len - 1; i++) {
      if(s[i] === s[i+1]) {
        dp[i][i+1] = true;
        answer = 2;
      }
    }
    
    for(let i = 3; i <= len; i++) {
      for(let start = 0; start <= len - i; start++) {
        const end = start + i - 1;
        if(s[start] === s[end] && dp[start+1][end-1]) {
          dp[start][end] = true;
          answer = Math.max(answer, i);
        }
      }
    }
    
    return answer;
  }