// 사용자가 최대 값 지정하게 하기 (음수는 x)

// 추측하는 숫자 입력하게하기 (버튼)
// 내가선택한 수, 기계가 선택한 수
// 결과!

// 최대값을 변수에 넣고 저장 ->  실시간 범위 업데이트니까 새로고침 해야됨

// if(선택수 null){
// 선택하게하기
// }else{
// 시작 -> 변수저장
// form 보여주기
// } 
// 내가선택한수: 기계가 선택한 수

// if(선택수 동일){{
// you win!}

//1.랜덤수 저장
const randomInput =document.querySelector("#random-form");



function onRandomSubbit(event){
    //12.브라우저의 기본동작을 실행하지 못하게 막아준다.
    event.preventDefault();
                                                                                                        
    alert(randomInput);
}

randomInput.addEventListener("submit",onRandomSubbit);

//2.수 맞추기
const numberInput = document.querySelector("number-form input");



