window.onload = function(){
    var heading = document.querySelector("#heading");
    heading.onclick = function () {
      heading.style.color = "red";
      heading.style.fontSize = "100px";
    };
  //   글자색바꾸기 토글
  var heading =document.querySelector("#heading");
  var isRed = false; //초기 토글 상태는 false입니다.
  heading.onclick = function(){
      // isRed 변수 값에 따라 텍스트 색상을 변경합니다.
      if(isRed){
          heading.style.color ="initial" //원래 색상으로 변경
          isRed = false;
      }
      else{
          heading.style.color = "red" //빨간색으로 변경
          isRed = true;
      }
  }

    var woo = document.querySelector("#woo")
    woo.onclick = function(){
      woo.style.color = "blue"
      woo.style.fontSize = "50px"
    }
    // 토글
    var woo = document.querySelector("#woo");
    var isBlue = false;
    woo.onclick = function(){
        if(isBlue){
            woo.style.color = "initial"
            isBlue = false;
        }
        else{
            woo.style.color = "blue"
            isBlue = true;
        }
    }
}
