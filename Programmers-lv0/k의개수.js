// // 문제 설명
// // 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.



// 입출력 예 설명
// 입출력 예 #1

// 본문과 동일합니다.
// 입출력 예 #2

// 10부터 50까지 5는 15, 25, 35, 45, 50 총 5번 등장합니다. 따라서 5를 return 합니다.
// 입출력 예 #3

// 3부터 10까지 2는 한 번도 등장하지 않으므로 0을 return 합니다.



function solution(i, j, k) {
    let arr = []
    let arr2 = []
    let answer = 0;
    
    for(let a=i; a<=j; a++) {  			  //i 와 j 사이의 수를 가져오기
            arr.push(String(a).split('')) // 문자로 변환 + 자릿수별로 쪼개서 가져오기
            arr2 = arr[arr.length-1]      // i와 j 사이의 모든 수는 배열의 마지막 값
      		for(let b = 0; b<arr2.length; b++) { 
             							  // k와 같은 숫자 찾아서 answer에 담기
            if(arr2[b] === String(k)) answer ++
            }
    }
    return answer
}