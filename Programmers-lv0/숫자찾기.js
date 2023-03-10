// // 문제 설명
// // 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.


// 입출력 예 설명
// 입출력 예 #1

// 29183에서 1은 3번째에 있습니다.
// 입출력 예 #2

// 232443에서 4는 4번째에 처음 등장합니다.
// 입출력 예 #3

// 123456에 7은 없으므로 -1을 return 합니다.

// indexOf 함수를 사용하여 해당 인덱스의 번호를 조회한다.
const solution = (num, k) => [...num+''].indexOf(k+'') !== -1 ? [...num+''].indexOf(k+'')+1 : -1