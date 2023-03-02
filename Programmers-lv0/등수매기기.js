// // 문제 설명
// // 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.


// 입출력 예 설명
// 입출력 예 #1

// 평균은 각각 75, 70, 55, 65 이므로 등수를 매겨 [1, 2, 4, 3]을 return합니다.
// 입출력 예 #2

// 평균은 각각 75, 75, 40, 95, 95, 100, 20 이므로 [4, 4, 6, 2, 2, 1, 7] 을 return합니다.
// 공동 2등이 두 명, 공동 4등이 2명 이므로 3등과 5등은 없습니다.


function solution(score) {
    // 1. score의 길이와 동일하고, 모든 요소가 1인 배열을 선언한다.
  let answer = new Array(score.length).fill(1)
  
  // 2. score 배열의 각 평균 점수를 계산한 배열 avg를 선언한다.
  const avg = score.map(e => (e[0]+e[1])/2); 

 // 3. 이중 for문을 사용, i번째 값보다 큰 j값이 있다면 i의 값에 1을 더한다.
  for(let i = 0; i < avg.length; i++){
      for(let j = 0; j <avg.length; j++){
          if(avg[i]<avg[j]) answer[i]++;
      }
  }
  
  return answer;
}