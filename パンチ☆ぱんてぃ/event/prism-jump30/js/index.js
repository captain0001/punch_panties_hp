
$(function() {
  function downloadMatch() {
    const $download_01 = $('.download_01');
    let count = 0;
    let successFlg = false;
    function displayButton() {
      $('.form').append('<a href="https://1drv.ms/b/s!AnDGkcEU7JcNgp0_LhO2Hltcm2WFng?e=4WkeR1" class="button download" download>ダウンロード</a>');
    }
    function match01() {
      console.log('押下');
      const nameEnter = $('.download-001_name').val();
      const passEnter = $('.download-001_pass').val();
      console.log(nameEnter,passEnter);
      if (count < 1 ){
        $.getJSON("https://script.google.com/macros/s/AKfycby1FT-gVg42g99jVW65C65kb7fRWq4FiLKatYob6U2YAfB3fXWh/exec", function(json) {
          json.forEach(value => {
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