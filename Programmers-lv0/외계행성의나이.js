// // 문제 설명
// // 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

// 입출력 예 설명
// 입출력 예 #1

// age가 23이므로 "cd"를 return합니다.
// 입출력 예 #2

// age가 51이므로 "fb"를 return합니다.
// 입출력 예 #3

// age가 100이므로 "baa"를 return합니다.



//걸린시간 -> 10분.. 아주 원초적인 방법으로 풀었음. 
// 분명 더 나은 풀이방법이있을테니 찾아보자..!

function solution(age) {
    var answer = '';
    let newString = String(age); // 숫자를 문자열로 변환
    let cnt= 0;
    
    while(cnt < newString.length){
        if(newString[cnt] === '0'){
            answer = answer + 'a';
        }
        if(newString[cnt] === '1'){
            answer = answer + 'b';
        }
        if(newString[cnt] === '2'){
            answer = answer + 'c';
        }
        if(newString[cnt] === '3'){
            answer = answer + 'd';
        }
        if(newString[cnt] === '4'){
            answer = answer + 'e';
        }
        if(newString[cnt] === '5'){
            answer = answer + 'f';
        }
        if(newString[cnt] === '6'){
            answer = answer + 'g';
        }
        if(newString[cnt] === '7'){
            answer = answer + 'h';
        }
        if(newString[cnt] === '8'){
            answer = answer + 'i';
        }
        if(newString[cnt] === '9'){
            answer = answer + 'j';
        }
        cnt = cnt+1;
    }
    
    return answer;
}


// 매개변수 age가 들어오면 -> 나이를 알파벳으로 표현
// 알파벳을 배열로 표시? -> a->0b->1 c -2 d - 3 e -4 f-5 g- 6 h- 7 i- 8 j-9