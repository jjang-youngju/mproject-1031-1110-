// 클릭했을 때 상세정보 페이지 나오게 하기

// API_KEY
const API_KEY =
  'jlg7KY2npJeU37heElpwCwtYwftrL9yxya9arHvaWoAEmWZG5Pf8NZVOPG7QLy8LzpkAEjeNgey%2Fbj5Pv2N6uw%3D%3D';

// open api 여행지에 사용

// 클릭했을 때 close 되는 함수
function doClose() {
  $('.spotsection').css('visibility', 'hidden');
  $('.section-bottom').css('opacity', 1);
}

getTrip();

function getTrip() {
  var searchCondition = 1;
  $.ajax({
    url:
      'http://apis.data.go.kr/6300000/tourDataService/tourDataListJson?serviceKey=' +
      API_KEY +
      '&searchCondition=' +
      searchCondition +
      '',
    type: 'GET',
    dataType: 'json',
    success: function (response) {
      for (var i = 0; i < response.msgBody.length; i++) {
        console.log(response.msgBody[i].name, ',', response.msgBody[i].addr1);
      }
    },
  });
}
