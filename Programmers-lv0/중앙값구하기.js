// // // 문제 설명 
// // 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.


// 입출력 예 설명
// 입출력 예 #1

// 본문과 동일합니다.
// 입출력 예 #2

// 9, -1, 0을 오름차순 정렬하면 -1, 0, 9이고 가장 중앙에 위치하는 값은 0입니다.



// 걸린시간 10분 -> JS의 sort 기능으로 간단하게 풀수있으나, 컴퓨터 실행로직을 익히자..! 반복문 아주중요하다!!!
function solution(array) {
    
    let newArray =[];
    let arrayCnt =0;
   
    
    // 원래 배열 길이 만큼 반복
    while(arrayCnt < array.length){
        let minNumber = 1000;
        let cnt =0;  
           // 최소값 구해주기
    while(cnt <array.length){
        if(minNumber > array[cnt]){
            minNumber = array[cnt]
        }
        cnt = cnt +1 ;
    }
    
    // 배열에 최소값 넣기
    newArray.push(minNumber);
     let cnt2 = 0;
    // 기존 배열에서 최소값 지워주기
    while(cnt2 <array.length){
        if(minNumber === array[cnt2]){
            array[cnt2] = 1000;
            break;
        }
        cnt2 = cnt2 + 1;
    }
        
        arrayCnt = arrayCnt + 1;
    }
    
    console.log("newArray :",newArray)
   
    return newArray[Math.floor(array.length/2)] ; //중앙값 꺼내주기

}

// 배열을 원소의 크기순으로 정렬하자.
// 1-1. 원소중 최소값을 구해준다.
// 1-2. 최소값을 꺼내고, 새로운배열에 넣어준다. 이때 꺼낸값을 기존배열에서 삭제.
//1-3 원래배열 길이만큼 반복했으면 끝내고 아니면 1-1로 돌아간다.
// 2. 정렬한 원소중 중앙값을 꺼내준다.
