// // 정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
// // num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다. 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.


// 입출력 예 설명
// 입출력 예 #1

// num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 2 * 4 배열로 변경한 [[1, 2], [3, 4], [5, 6], [7, 8]] 을 return합니다.
// 입출력 예 #2

// num_list가 [100, 95, 2, 4, 5, 6, 18, 33, 948] 로 길이가 9이고 n이 3이므로 3 * 3 배열로 변경한 [[100, 95, 2], [4, 5, 6], [18, 33, 948]] 을 return합니다.



//걸린시간:10분 2차원 배열, 3차원배열 어렵게 생각하지말자, 배열의 원소가 또하나의 배열이면 2차원! 원소의 원소가 배열이면 3차원!
function solution(num_list, n) {
    const result = [];
    let tempArray=[]; //임시배열 값이 변할수있으니 let선언
     for(let i=0;i<num_list.length; i++){
        const item=num_list[i];
        tempArray.push(item); //배열의 원소를 뽑아서 임시배열에 저장
        if(tempArray.length === n){  // 임시배열의 길이가 N이랑 같으면
            result.push(tempArray); // 임시배열의 원소를 결과값에넣어주고
            tempArray=[]; // 초기화
        }
    }
    return result;
}