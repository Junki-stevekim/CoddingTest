// // 문제 설명
// // 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.


// 입출력 예 설명
// 입출력 예 #1

// "hello"를 오른쪽으로 한 칸 밀면 "ohell"가 됩니다.
// 입출력 예 #2

// "apple"은 몇 번을 밀어도 "elppa"가 될 수 없습니다.
// 입출력 예 #3

// "atat"는 오른쪽으로 한 칸, 세 칸을 밀면 "tata"가 되므로 최소 횟수인 1을 반환합니다.
// 입출력 예 #4

// "abc"는 밀지 않아도 "abc"이므로 0을 반환합니다.


function solution(A, B) {
    // 1. 처음부터 A와 B가 같다면 문자열을 한 번도 밀지 않은 경우이므로 0을 반환한다.
    if(A===B) return 0;

    let total = 0;
    let arr = A.split("");
    
    for (let i = arr.length-1; i >= 0; i-- ){
        // 2. A의 마지막 문자를 잘라서 tmp에 넣는다.
        let tmp = arr.splice(arr.length-1, 1)[0]
        
        // 3. tmp를 arr의 맨 앞쪽에 추가한다. (unshift() 사용)
        arr.unshift(tmp);
        
        // 4. 문자열을 한 번 밀었으므로 total 값을 증가시킨다.
        total++
        
        // 5. 문자열을 민 값이 B와 일치한다면 민 횟수(total)를 반환한다.
        if(arr.join("") === B) return total;
    }
    return -1;
}