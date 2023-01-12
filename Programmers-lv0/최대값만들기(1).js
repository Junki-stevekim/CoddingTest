// /* 최댓값 만들기 (1)
// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요. */


// 입출력 예 설명
// 입출력 예 #1

// 두 수의 곱중 최댓값은 4 * 5 = 20 입니다.
// 입출력 예 #1

// 두 수의 곱중 최댓값은 31 * 24 = 744 입니다.

// 걸린시간 -> 8분  배열을 sort메서드를 통해 내림차순으로 정렬해주고 값을 구해준다.
function solution(numbers) {
    let array = numbers.sort((a,b) => b-a)
  
  return array[0]*array[1];

}