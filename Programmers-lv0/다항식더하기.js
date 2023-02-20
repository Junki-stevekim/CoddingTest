// // 문제 설명
// // 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.


// 입출력 예 설명
// 입출력 예 #1

// "3x + 7 + x"에서 동류항끼리 더하면 "4x + 7"입니다.
// 입출력 예 #2

// "x + x + x"에서 동류항끼리 더하면 "3x"입니다.


function solution(polynomial) {
    // 모든 식은 더하기이기 때문에 " + "를 기준으로 문자열을 배열로 만들어줍니다.
    // ex) ["3x", "7", "x"]
    const newArray = polynomial.split(" + ");
  
    let xNum = 0;
    let num = 0;
  
    // 분리해둔 arr을 forEach() 메서드를 이용해 하나씩 확인한다.
    newArray.forEach((n) => {
  
      // includes() 메서드를 이용해 학인 중인 요소에 x가 포함되어 있는지 확인한다.
      if (n.includes("x")) {
        // x가 포함되어있다면 replace() 메서드를 이용해 x를 제거해주고
        // 만약 x를 제거하였는데 공백일 경우 "1"을 넣어준다.
        const strVal = n.replace("x", "") || "1";
  
        // 구한 값을 정수로 바꾸어 더해준다.
        xNum += parseInt(strVal, 10);
      } else {
  
        // x가 포함되지 않았다면 숫자이므로 정수형으로 바꾸어 더해준다.
        num += parseInt(n);
      }
    });
  
    let answer = [];
    // "계수 1은 생략합니다." 제한사항을 참고하여
    // 구해둔 xNum이 1을 경우 공백으로 아니면 그대로 입력하고 뒤에 x를 붙여준다.
    if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
    if (num) answer.push(num);
  
    // 배열을 join() 메서드를 이용해 +를 넣어 문자열로 만들고 반환한다.
    return answer.join(" + ");
  }
  
  console.log(solution("3x + 7 + x")); // "4x + 7"
  console.log(solution("x + x + x")); // "3x"