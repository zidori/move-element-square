//함수선언
//move Element
const elem = document.getElementById('animate');
let pos = 0;
let id;

function moveElem(){
  id = setInterval(frame,10);
  function frame(){// element 작동 구현
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';
    pos++;
  }
}//setInterval : 재귀함수와 같은 반복되는 로직 구현 가능

function stopElem(){
  clearInterval(id);
}
