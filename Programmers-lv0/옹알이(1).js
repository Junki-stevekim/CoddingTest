// // 문제 설명
// // 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.


// 입출력 예 설명
// 입출력 예 #1

// ["aya", "yee", "u", "maa", "wyeoo"]에서 발음할 수 있는 것은 "aya"뿐입니다. 따라서 1을 return합니다.
// 입출력 예 #2

// ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]에서 발음할 수 있는 것은 "aya" + "ye" = "ayaye", "ye", "ye" + "ma" + "woo" = "yemawoo"로 3개입니다. 따라서 3을 return합니다.
// 유의사항
// 네 가지를 붙여 만들 수 있는 발음 이외에는 어떤 발음도 할 수 없는 것으로 규정합니다. 예를 들어 "woowo"는 "woo"는 발음할 수 있지만 "wo"를 발음할 수 없기 때문에 할 수 없는 발음입니다.


function solution(babbling) {
    const canBab = ['aya', 'ye', 'woo', 'ma']
    let result = 0
    // 전체 문자 배열
    for(let i = 0 ; i < babbling.length ; i ++) {
        // 가능한 옹알이 배열
        for(let j = 0 ; j < canBab.length ; j ++ ) {
            // 발음해야 할 문자가 가능한 옹알이를 포함하는가?
            if(babbling[i].includes(canBab[j])) {
                // 가능한 부분을 제거한 후 j--을 하여 전부 제거할 수 있는지 확인
                // 연속되지 않은 부분만
                if(babbling[i].slice(0,canBab[j].length) === babbling[i].slice(canBab[j].length,canBab[j].length*2)) break
                babbling[i] = babbling[i].replace(canBab[j],'')
                j--
            }
            // 전부 다 발음할 수 있다면
            if(babbling[i].length === 0) {
                result++
                break
            }
        }
    }
    return result
}