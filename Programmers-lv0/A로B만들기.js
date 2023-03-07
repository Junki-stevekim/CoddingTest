// // 문제 설명
// // // 문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

// 입출력 예 설명
// 입출력 예 #1

// "olleh"의 순서를 바꾸면 "hello"를 만들 수 있습니다.
// 입출력 예 #2

// "allpe"의 순서를 바꿔도 "apple"을 만들 수 없습니다.


function solution(before, after) {
    // 정렬하여 각 인덱스를 비교함
    before = [...before].sort()
    after = [...after].sort()
    return before.filter((a,i) => a === after[i]).length === after.length ? 1 : 0
}