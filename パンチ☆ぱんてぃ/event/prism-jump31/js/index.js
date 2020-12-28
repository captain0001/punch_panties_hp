
$(function() {
  function downloadMatch() {
    const $download_01 = $('.download_01');
    let count = 0;
    let successFlg = false;
    function displayButton() {
      $('.form').append('<p class="buttonWrap"><a href="https://bit.ly/3hjLRLx" class="button download" download>ダウンロード</a></p>');
    }
    function match01() {
      let getName = getParam('id');
      let getPass = getParam('pass');
      if (count < 1 ){
        $.getJSON("https://script.google.com/macros/s/AKfycby1FT-gVg42g99jVW65C65kb7fRWq4FiLKatYob6U2YAfB3fXWh/exec", function(json) {
          json.forEach(value => {
            if(value.password === getPass && value.name === getName){
              console.log('一致しましたね');
              displayButton();
              successFlg = true;
              count++ ;
            }
          });
          if(successFlg === false){
            $('.error').remove();
            $('.make01').append('<p class="error">※QRコードを読み込んだ状態で「認証」ボタンを押下してください。認証するのに少々時間がかかる恐れがあります。</p>');
          } else {
            $('.error').remove();
          }
        });
      }
    }
    function getParam(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
    function events() {
      $download_01.on('click', match01);
    }
    function init() {
      events();
    }
    init();
  }
  downloadMatch();
});