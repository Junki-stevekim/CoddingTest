// // 잘라서 배열로 저장하기
// // 문제 설명
// // 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.


// 입출력 예 설명
// 입출력 예 #1

// "abc1Addfggg4556b" 를 길이 6씩 잘라 배열에 저장한 ["abc1Ad", "dfggg4", "556b"]를 return해야 합니다.
// 입출력 예 #2

// "abcdef123" 를 길이 3씩 잘라 배열에 저장한 ["abc", "def", "123"]를 return해야 합니다.
// 유의사항
// 입출력 예 #1의 경우 "abc1Addfggg4556b"를 길이 6씩 자르면 "abc1Ad", "dfggg4" 두개와 마지막 "556b"가 남습니다. 이런 경우 남은 문자열을 그대로 배열에 저장합니다.


function solution(my_str, n) {
    const result = []
    // n의 길이의 result를 만들기 위해 전체길이 / n 번 반복
    for(let i = 0 ; i < (my_str.length/n) ; i ++) {
        let part = ''
        // 각 저장요소 별 내용 입력
        for(let j = i*n ; j < i*n+n ; j ++) {
            if(my_str[j]) part+=my_str[j]
            else break
        }
        result.push(part)
    }
    return result
}