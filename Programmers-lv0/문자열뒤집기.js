// // 문제 설명
// // 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

// 입출력 예 설명
// 입출력 예 #1

// my_string이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.
// 입출력 예 #2

// my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.\

//걸린시간 : 10분.  JS내에 배열을 뒤집는 내장메서드가 없으니 배열메서드를활용!
function solution(my_string) {
    
    
    return my_string.split("").reverse().join("");
}

// 1. split() 메서드를 사용해 새 배열을 반환하기
//2. reverse() 메서드를 사용해 새 배열의 순서를 뒤집기
//3. join() 메서드를 사용해 배열의 모든 요소를 문자열로 결합하기
//4. 3번값을 리턴해준다.