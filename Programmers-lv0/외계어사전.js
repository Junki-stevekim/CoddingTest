// // 문제 설명
// // PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.


// 유의사항
// 입출력 예 #3 에서 "moos", "smm", "som"도 "s", "o", "m", "d" 를 조합해 만들 수 있지만 spell의 원소를 모두 사용해야 하기 때문에 정답이 아닙니다.


function solution(spell, dic) {
    // 주어진 단어를 사전순 정렬
    spell = spell.sort().join("")
    // dic배열의 요소를 모두 정렬하고 요소가 있다면 1 없다면 2 반환
    return dic.map(a => a.split("").sort().join("")).find(a => a===spell) !== undefined ? 1 : 2
}