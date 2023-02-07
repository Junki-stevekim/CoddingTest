// // 문제 설명
// // 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요

// 입출력 예 설명
// 입출력 예 #1

// "onetwothreefourfivesixseveneightnine"를 숫자로 바꾼 123456789를 return합니다.
// 입출력 예 #1

// "onefourzerosixseven"를 숫자로 바꾼 14067를 return합니다.

function solution(numbers) {
    const stringNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let i = 0; i < stringNum.length; i++){
      //split을 num[i] 기준으로 자르고 
        numbers = numbers.split(stringNum[i]).join(i)
    }
    
  	//split은 string이라 마지막에 number로 형 변환을 해줬다.
    return Number(numbers)
}