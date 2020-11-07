
$(function() {
  function downloadMatch() {
    // $.getJSON("./js/json/pass.json", function(json) {
    //   console.log(json); // this will show the info it in firebug console
    // });
    const $download_01 = $('.download_01');
    let key = '';
    function download01() {
      console.log('ダウンロードされました');
      location.href = './data/01/くありす本物語_01.jpg';
    }
    function displayButton() {
      
    }
    function match01() {
      console.log('押下');
      const json = $.getJSON("./js/json/pass.json");
      displayButton(pass);
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