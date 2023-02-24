// // 문제 설명
// // 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.



// 입출력 예 설명
// 입출력 예 #1

// "aAb1B2cC34oOp"안의 자연수는 1, 2, 34 입니다. 따라서 1 + 2 + 34 = 37 을 return합니다.
// 입출력 예 #2

// "1a2b3c4d123Z"안의 자연수는 1, 2, 3, 4, 123 입니다. 따라서 1 + 2 + 3 + 4 + 123 = 133 을 return합니다.


function solution(my_string) {
    let result = 0
    for(let i = 0 ; i < my_string.length;i++) {
        // 이번 반복의 연속되는 숫자를 문자열로 취득
        let thisNum = ''
        while(!Number.isNaN(Number(my_string[i]))) {
            thisNum+= my_string[i]
            i++
        }
        // 문자가 온 경우 취득되었던 숫자를 Number형으로 변환 후 result에 더함
        result+= +thisNum
    }
    return result
}