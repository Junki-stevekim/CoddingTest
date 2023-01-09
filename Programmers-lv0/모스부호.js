// // 문제 설명
// // 머쓱이는 친구에게 모스부호를 이용한 편지를 받았습니다. 그냥은 읽을 수 없어 이를 해독하는 프로그램을 만들려고 합니다. 문자열 letter가 매개변수로 주어질 때, letter를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
// // 모스부호는 다음과 같습니다.

// 입출력 예 설명
// 입출력 예 #1

// .... = h
// . = e
// .-.. = l
// .-.. = l
// --- = o
// 따라서 "hello"를 return 합니다.
// 입출력 예 #2

// .--. = p
// -.-- = y
// - = t
// .... = h
// --- = o
// -. = n
// 따라서 "python"을 return 합니다.

// 걸린시간 : 25분 생각하는힘이 아직많이 부족. 모스부호 객체를 가져와서 반복문을 통해 꺼내서 변환후 넣어주는식으로 풀이.
const morse = { 
    '.-':'a',
    '-...':'b',
    '-.-.':'c',
    '-..':'d',
    '.':'e',
    '..-.':'f',
    '--.':'g',
    '....':'h',
    '..':'i',
    '.---':'j',
    '-.-':'k',
    '.-..':'l',
    '--':'m',
    '-.':'n',
    '---':'o',
    '.--.':'p',
    '--.-':'q',
    '.-.':'r',
    '...':'s',
    '-':'t',
    '..-':'u',
    '...-':'v',
    '.--':'w',
    '-..-':'x',
    '-.--':'y',
    '--..':'z'
};


function solution(letter) {
    let currentMorse='';
    let answer = '';
    for(let i =0; i<letter.length; i++){
        const item= letter[i];
        if(item === ' '){ // 문자열이 공백이면 추가
            answer += morse[currentMorse]; // 변환을시켜서 추가해준다.
            currentMorse =''; // 초기화   
        }else{
            currentMorse += item;
        } 
    }
     answer += morse[currentMorse]; // 공백이없을때도 남은 모스부호를  추가 
    return answer;
}