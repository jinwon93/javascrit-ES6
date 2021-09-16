
Ajax (Async Javascript And XML)는 웹 페이지에서 새로운 데이터를 보여주려고 할 때 웹페이지 전체를 새로고침 하지 않고, 보여주고자 하는 데이터가 포함된 페이지의 일부 만을 로드 하기 위한 기법입니다.

Ajax는 비동기 처리 모델 (또는 non-blocking 이라고도 함)을 사용하여 데이터를 처리합니다.

 

동기 처리 모델에서 브라우저는 자바스크립트 코드를 만나면 스크립트를 처리하기 전까지 다른 작업을 일시 중지하고, 자바스크립트 코드의 처리가 끝난 후 기존 작업을 진행합니다.

반면에 Ajax를 사용하면 브라우저는 서버에 데이터를 요청한 뒤 페이지의 나머지를 로드하고 페이지와 사용자의 상호작용을 처리합니다.


//ex
$.ajax({
url:"/score/ajax/research",
type:"POST",
success: function(result) {
if (result) {
} else {
alert("불러오기 실패");
}
}
});


$.ajax({
url:"/score/ajax/add_score",
type:"POST",
data:JSON.stringify(params),
contentType: "application/json",
success: function(result) {
if (result) {
alert("저장되었습니다.");
} else {
alert("잠시 후에 시도해주세요.");
}
},
error: function() {
alert("에러 발생");
}
})

//Ajax async ex

function ykCheckEmailDup() {
  $.ajax({
    data: { email: "example@example.com" },
    url: "emailcheck",
    dataType: "json",
    success: function (data) {
      var result = data;
      return result;
    },
  });
}


