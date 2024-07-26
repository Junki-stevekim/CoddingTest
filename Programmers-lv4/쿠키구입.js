// 문제 설명
// 과자를 바구니 단위로 파는 가게가 있습니다. 이 가게는 1번부터 N번까지 차례로 번호가 붙은 바구니 N개가 일렬로 나열해 놨습니다.

// 철수는 두 아들에게 줄 과자를 사려합니다. 첫째 아들에게는 l번 바구니부터 m번 바구니까지, 둘째 아들에게는 m+1번 바구니부터 r번 바구니까지를 주려합니다. 단, 두 아들이 받을 과자 수는 같아야 합니다(1 <= l <= m, m+1 <= r <= N). 즉, A[i] 를 i번 바구니에 들어있는 과자 수라고 했을 때, A[l]+..+A[m] = A[m+1]+..+A[r] 를 만족해야 합니다.

// 각 바구니 안에 들은 과자 수가 차례로 들은 배열 cookie가 주어질 때, 조건에 맞게 과자를 살 경우 한 명의 아들에게 줄 수 있는 가장 많은 과자 수를 return 하는 solution 함수를 완성해주세요. (단, 조건에 맞게 과자를 구매할 수 없다면 0을 return 합니다)

// 제한사항
// cookie의 길이는 1 이상 2,000 이하입니다.
// cookie의 각각의 원소는 1 이상 500 이하인 자연수입니다.
// 입출력 예
// cookie	result
// [1,1,2,3]	3
// [1,2,4,5]	0
// 입출력 예 설명
// 입출력 예 #1

// 첫째 아들에게 2, 3번 바구니를, 둘째 아들에게 4번 바구니를 사주면 두 아들은 각각 과자 3개를 받습니다.

// 입출력 예 #2

// 주어진 조건에 맞게 과자를 살 방법이 없습니다.


// 구간합을 구하는 함수 생성
const getPrefixSum = (arr) => {
    const arrLength = arr.length;
    const arrPrefixSum = new Array(arrLength + 1).fill(0);
  
    for (let i = 0; i < arrLength; i += 1) {
      const now = arr[i];
      arrPrefixSum[i + 1] = now + arrPrefixSum[i];
    }
    return arrPrefixSum;
  };
  
  const solution = (cookie) => {
    if (cookie.length === 1) return 0;
  
    let result = 0;
  
    const cookiePrefixSum = getPrefixSum(cookie);
    const cookieLength = cookie.length;
  
    // 기준점 이동시키기
    for (let m = 0; m < cookieLength - 1; m += 1) {
      const leftEnd = m;
      const rightStart = m + 1;
  
      let leftStart = leftEnd;
      let rightEnd = rightStart;
  
      while (leftStart >= 0 && rightEnd < cookieLength) {
        let nowLeftSum = cookiePrefixSum[m + 1] - cookiePrefixSum[leftStart];
        let nowRightSum = cookiePrefixSum[rightEnd + 1] - cookiePrefixSum[m + 1];
  
        if (nowLeftSum === nowRightSum) {
          result = Math.max(nowLeftSum, result);
          rightEnd += 1;
          leftStart -= 1;
        } else if (nowLeftSum < nowRightSum) {
          leftStart -= 1;
        } else {
          rightEnd += 1;
        }
      }
    }
  
    return result;
  };