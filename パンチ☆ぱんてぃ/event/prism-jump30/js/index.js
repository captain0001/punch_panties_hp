
$(function() {
  function downloadMatch() {
    // $.getJSON("./js/json/pass.json", function(json) {
    //   console.log(json); // this will show the info it in firebug console
    // });
    const $download_01 = $('.download_01');
    let count = 0;
    function download01() {
      console.log('ダウンロードされました');
      location.href = './data/01/くありす本物語_01.jpg';
    }
    function displayButton() {
      $('.form').append('<a href="./data/01/くありす本物語_01.jpg" class="button download" download>ダウンロード</a>');
    }
    function match01() {
      console.log('押下');
      const json = $.getJSON("./js/json/pass.json");
      if (count < 1 ){
        displayButton();
      }
      count++ ;
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