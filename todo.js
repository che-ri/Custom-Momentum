const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const PENDING = "PENDING";

let toDos = [];
//todos는 할일목록이다.
//todos가 많아질 수 있으니 배열로 설정한다!

function deleteToDo(event) {
  const btn = event.target;
  //btn은 이벤트의 타겟을 말한다.
  const li = btn.parentNode;
  //li는 btn의 부모요소
  toDoList.removeChild(li);
  //li를 지운다.
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
    //모든 todo가 li의 id와 같지 않을때!
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(PENDING, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  //delBtn을 클릭하면 deleteToDo 실행!
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    //텍스트라는 키에 text(painttodo의 인자)
    id: newId,
    //id라는 키에 newId 변수
  };
  toDos.push(toDoObj);
  //todos라는 배열에 todoobj를 넣는다.
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(PENDING);
  if (loadedToDos !== null) {
    //로컬스토리지에 "toDos"라는 아이템을 가져왔는데 그 값이 null이 아니라면?
    const parsedToDos = JSON.parse(loadedToDos);
    //로컬스토리지에서 가져온 값을 object 형식으로 바꾼다.
    parsedToDos.forEach(function (toDo) {
      //forEach는 함수를 호출할 수있다!
      //가져온 item 각각을 todo로 명칭함.

      paintToDo(toDo.text);
      //toDo.text를 보여주는 거지!
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
