// // 문제 설명
// // 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.


// 입출력 예 설명
// 입출력 예 #1

// 3 - 4 = -3 은 틀린 수식이므로 "X", 5 + 6 = 11 은 옳은 수식이므로 "O" 입니다. 따라서 ["X", "O"]를 return합니다.
// 입출력 예 #2

// 19 - 6 = 13 은 옳은 수식이므로 "O", 5 + 66 = 71 은 옳은 수식이므로 "O", 5 - 15 = 63 은 틀린 수식이므로 "X", 3 - 1 = 2는 옳은 수식이므로 "O" 따라서 ["O", "O", "X", "O"]를 return합니다.


function solution(quiz) {

    // 들어온 문자열 배열을 map() 메서드를 통해 하나씩 확인한다.
    return quiz.map((n) => {
  
      // 배열 구조 분해를 통해 식과 값을 나눈다.
      // ex) evaluation: "3 - 4", answer: "-3"
      const [evaluation, answer] = n.split(" = ");
  
      // eval() 메서드는 주어진 코드를 평가하는 메서드로 
      // 문자열 식을 넣으면 그에 대한 값을 반환해준다.
      // eval()에서 가져온 값과 미리 구해둔 answer의 값이 같으면 O 아니면 X를 반환한다.
      return eval(evaluation) === Number(answer) ? "O" : "X";
    });
  }