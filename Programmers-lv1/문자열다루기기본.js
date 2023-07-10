// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true



function solution(s) {
    // 길이가 4 혹은 6이 아니면 false 반환
    if (s.length !== 4 && s.length !== 6) return false;
    // 각 자리중에 숫자가 아닌 것이 하나라도 있으면 false 반환
    for (let i = 0; i < s.length; i++) {
      if (isNaN(Number(s[i]))) return false;
    }
    // 위의 모든 조건에 포함되지 않으면
    // (길이가 4 혹은 6이고, 숫자로만 구성되어 있으면) true 반환
    return true;
  }