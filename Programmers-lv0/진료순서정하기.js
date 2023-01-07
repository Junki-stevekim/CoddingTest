// // 문제 설명
// // 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.


// 입출력 예 설명
// 입출력 예 #1

// emergency가 [3, 76, 24]이므로 응급도의 크기 순서대로 번호를 매긴 [3, 1, 2]를 return합니다.
// 입출력 예 #2

// emergency가 [1, 2, 3, 4, 5, 6, 7]이므로 응급도의 크기 순서대로 번호를 매긴 [7, 6, 5, 4, 3, 2, 1]를 return합니다.
// 입출력 예 #3

// emergency가 [30, 10, 23, 6, 100]이므로 응급도의 크기 순서대로 번호를 매긴 [2, 4, 3, 5, 1]를 return합니다.


// 걸린시간: 25분 문제 파악이 더 어려웠고.. 구현방법이 생각이 안났다!
function solution(emergency) {
   
    let newEmergencyArray= [];
    let cnt = 0;
    
    while(cnt<emergency.length){
        newEmergencyArray.push({value :emergency[cnt], idx:cnt}); // 새로운배열에 원래 위치와 값을 객체로 전달
        cnt= cnt+1;
    }
    
    newEmergencyArray.sort((a,b) => b.value-a.value); // 배열을 내림차순으로 정렬
     
    var answer = new Array(emergency.length); // 배열의 공간확보
     
    cnt=0;
    
    
    while(cnt< newEmergencyArray.length){ // 원래 인덱스에 +1 을해서 넣어준다.
        let item = newEmergencyArray[cnt];
        answer[item.idx] = cnt + 1;
        cnt= cnt+1;
        
    }
    return answer;
}


// 누가 더 응급한지 구해야한다.
// 원소를 내림차순으로 정렬한후 순위를 매겨준다? ->원래 위치에 응급도를 넣어줘야한다.
// 원소의 원래 위치를 저장해주고 순위를 매겨준뒤 값을 변환해준다.