// // 캐릭터의 좌표
// // 문제 설명
// // 머쓱이는 RPG게임을 하고 있습니다. 게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1], left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다. 머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.

// // [0, 0]은 board의 정 중앙에 위치합니다. 예를 들어 board의 가로 크기가 9라면 캐릭터는 왼쪽으로 최대 [-4, 0]까지 오른쪽으로 최대 [4, 0]까지 이동할 수 있습니다.


// 입출력 예 설명
// 입출력 예 설명 #1

// [0, 0]에서 왼쪽으로 한 칸 오른쪽으로 한 칸 위로 한 칸 오른쪽으로 두 칸 이동한 좌표는 [2, 1]입니다.
// 입출력 예 설명 #2

// [0, 0]에서 아래로 다섯 칸 이동한 좌표는 [0, -5]이지만 맵의 세로 크기가 9이므로 아래로는 네 칸을 넘어서 이동할 수 없습니다. 따라서 [0, -4]를 return합니다.


function solution(keyinput, board) {
    // 1. x,y 좌표를 선언한다.
  let x = 0;
  let y = 0;
  
    // 2. board의 범위도 설정한다. 
  const range = 
        [ Math.abs( Math.floor(board[0] / 2) ), 
         Math.abs( Math.floor(board[1] / 2) ) ];
  
    // 3. keyinput에 방향이 입력된다면 그에 맞게 x 또는 y 좌표를 변경한다.
  for(let k of keyinput){
      switch(k){
          case "left": x--; break;
          case "right": x++; break;
          case "down": y--; break;
          case "up": y++; break;
      }
      
        // 4. x와 y의 값이 설정 범위를 넘어간다면 설정된 범위의 최댓값을 대입한다.
      if(Math.abs(x)>range[0]){
          x = x > 0 ? range[0] : range[0] * -1;
       }
      if(Math.abs(y)>range[1]){
          y = y > 0 ? range[1] : range[1] * -1;
      }
      
  }
  return [x,y];
}