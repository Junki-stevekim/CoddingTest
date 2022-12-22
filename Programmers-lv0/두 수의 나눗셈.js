//정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.

// 걸린시간=15초 -> num1과 num2 나눈값을 구해주고, *1000후 parseInt로 정수화시킨다.
function solution(num1, num2) {
    var answer = parseInt((num1 / num2)*1000);
    return answer;
}