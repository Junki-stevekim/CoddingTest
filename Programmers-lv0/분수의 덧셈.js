//첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.


// 입출력 예 #1

// 1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.
// 입출력 예 #2

// 9 / 2 + 1 / 3 = 29 / 6입니다. 따라서 [29, 6]을 return 합니다.


// 걸린시간 : 30분... 
function solution(denum1, num1, denum2, num2) {
    var answer = [];
    const denum = denum1 * num2 + denum2 * num1; // 분자
    const num =num1 *num2 ; //분모
    
    let minNumber; //변수생성 -> 계산결과저장
    
    if(denum <num){
        minNumber = denum;
    }else{
        minNumber =num;
    }
    
    while(true){
    if(denum % minNumber ===0){
         if( num % minNumber ===0){
             return [denum/minNumber, num/minNumber];
         }
    }
    minNumber = minNumber -1;
    }
    
}


//1. num1 * num2  =>분모 denum1*num2 + denum2*num1 => 분자.
//2. 분자,분모 최대공약수로 나누어준다.
//3. 최대공약수룰 구하는법 -> 분자 분모 둘중 적은숫자로 나누었을때 둘다 나눠지면 성공. 아니면 -1을해서 다시 찾아준다.
//4. 작은수를 선택하는것과 -1씩 줄여가는것이 어렵다...