//머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.


//걸린시간 :8분
function solution(array, height) {
    var answer = []; //머쓱이보다 키큰값들을 담을 배열
    for(let i=0; i<array.length; i++){ 
        if(array[i]>height){ // 조건문을 통해 머쓱이보다 키큰사람찾기
            answer.push(i); //answer 빈배열에 키큰사람들을 담아줌
        }
        
    }
    return answer.length; // 키큰사람들은 담은 배열의 길이를 리턴해준다.
}