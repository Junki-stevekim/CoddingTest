// 문제 설명
// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.


// 입출력 예 설명
// 입출력 예 #1

// 1, 8, 3 중 가장 큰 수는 8이고 인덱스 1에 있습니다.
// 입출력 예 #2

// 9, 10, 11, 8 중 가장 큰 수는 11이고 인덱스 2에 있습니다.


// 가장큰수와 그수의 인덱스를 찾아서 값 도출
function solution(array) {
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
}