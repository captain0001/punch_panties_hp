
$(function() {
  function downloadMatch() {
    // $.getJSON("./js/json/pass.json", function(json) {
    //   console.log(json); // this will show the info it in firebug console
    // });
    const $download_01 = $('.download_01');
    let count = 0;
    let successFlg = false;
    function download01() {
      console.log('ダウンロードされました');
      location.href = './data/01/くありす本物語_01.jpg';
    }
    function displayButton() {
      $('.form').append('<a href="./data/01/くありす本物語_01.jpg" class="button download" download>ダウンロード</a>');
    }
    function match01() {
      console.log('押下');
      const nameEnter = $('.download-001_name').val();
      const passEnter = $('.download-001_pass').val();
      console.log(nameEnter,passEnter);
      if (count < 1 ){
        $.getJSON("./js/json/pass.json", function(json) {
          json.forEach(value => {
            // console.log(passValue.password);
            if(value.password === passEnter && value.name === nameEnter){
              console.log('一致しましたね');
              displayButton();
              successFlg = true;
              count++ ;
            }
          });
          if(successFlg === false){
            $('.error').remove();
            $('.make01').append('<p class="error">※idとpassのどちらかが間違えてます</p>');
          } else {
            $('.error').remove();
          }
        });
      }
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