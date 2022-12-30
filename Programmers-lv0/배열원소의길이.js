//문제 설명 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

// 입출력 예 설명
// 입출력 예 #1

// ["We", "are", "the", "world!"]의 각 원소의 길이인 [2, 3, 3, 6]을 return합니다.
// 입출력 예 #2

// ["I", "Love", "Programmers."]의 각 원소의 길이인 [1, 4, 12]을 return합니다.



// 걸린시간 :10분
function solution(strlist) {
    var answer = [];
    let countOfletter = 0; // 문자열의 갯수
    
    for(let i=0; i<strlist.length; i++){
        countOfletter = strlist[i].length; // i번째 배열의 요소의 문자열 갯수
        answer.push(countOfletter); // 문자열의 갯수를 다시 answer 배열에 담아주기.
    }
    
    return answer; // 값 도출
}


//  strlist = ["JUN","KI","ZZANG","DEVELOPER"]
// solution 함수를 통해 => [3,2,5,9] 로 반환...

//1. 문자열을 배열에서 꺼내준다. -> 배열꺼내기...뭐였지?
// 1.1 -> strlist[0] = "JUN" =>가운데 숫자만 바꿔줌 -> 반복문
// 1.2 -> strlist[1] ="KI"

//
//2. 꺼낸 문자열의 문자 갯수를 세어준다. -> .length?
//3. 문자 갯수를 다시 배열에 담아준다. -> push 사용
