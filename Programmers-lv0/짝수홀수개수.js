// // 문제 설명
// // 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.


// 입출력 예 설명
// 입출력 예 #1

// [1, 2, 3, 4, 5]에는 짝수가 2, 4로 두 개, 홀수가 1, 3, 5로 세 개 있습니다.
// 입출력 예 #2

// [1, 3, 5, 7]에는 짝수가 없고 홀수가 네 개 있습니다.


//걸린시간 : 10분
function solution(num_list) {
    var answer = [];
    let even = []; //새 배열
   
  for(let i=0; i<num_list.length; i++){
      if(num_list[i] % 2 === 0){ // 배열의 원소 짝수홀수 판별 짝수면 새배열에 넣어줌
          even.push(i);
      }
  }
    answer =[even.length, num_list.length -even.length]; 
    return answer;
}
