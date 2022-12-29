//정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

//걸린시간 : 5분
function solution(numbers) {
    var answer = [];
     for(let i = 0; i < numbers.length; i++) { //배열의 길이만큼 반복해서
        answer.push(numbers[i] * 2); // 원소값을 꺼내준후, 2를 곱해준다음 리턴해준다.
    }
    return answer;
}