const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
    SHOWING_CN = "showing";
//USER_LS는 currentUser이라는 문자열을 가지고 있다.

function saveName(text) {
    //로컬스토리지에 currenUser을 저장하는 용도!
    localStorage.setItem(USER_LS, text);
    //로컬스토리지에 set하자! key는 currentUser, text는 input.value! 
}


function handleSubmit(event) {
    event.preventDefault();
    //submit할때 기본동작으로 새로고침이 되는데, 그것을 막는 용도다. 
    const currentValue = input.value;
    //currentValue는 input에 작성한 value가 값이야! 
    paintGreeting(currentValue);
    //그럼 환영해주고
    saveName(currentValue);
    // input.vuale로 이름을 저장해
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    //지역변수 currentUser은 로컬스토리지에 "currentUser"을 넣는 역할을 한다.
    if (currentUser === null) {
        //currnetUser(로컬스토리지에 "currentUser"가 없다면)가 없다면?
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();